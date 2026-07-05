import { createFileRoute } from "@tanstack/react-router";
import { DAFTRA_TOOLS } from "@/lib/daftra/api-map";
import { callDaftraTool } from "@/lib/daftra/daftra.functions";
import {
  a2aAck,
  a2aAuthenticate,
  a2aInbox,
  a2aListAgents,
  a2aRegisterAgent,
  a2aSendMessage,
} from "@/lib/foundry/foundry.functions";

// Foundry Agent-to-Agent MCP endpoint — JSON-RPC 2.0 over Streamable HTTP.
// Deployed at: https://foundry-mcp.alazab.cloud/api/public/foundry-mcp
// Compatible with Azure AI Foundry / Anthropic MCP / OpenAI MCP clients.

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Agent-Id, X-Agent-Token, X-Alazab-Key, Accept, Mcp-Session-Id",
  "Access-Control-Expose-Headers": "Mcp-Session-Id",
  "Access-Control-Max-Age": "86400",
};

type JsonRpc = { jsonrpc: "2.0"; id?: string | number | null; method?: string; params?: Record<string, unknown> };

function rpcOk(id: JsonRpc["id"], result: unknown) {
  return Response.json({ jsonrpc: "2.0", id: id ?? null, result }, { headers: { ...CORS, "Content-Type": "application/json" } });
}
function rpcErr(id: JsonRpc["id"], code: number, message: string, data?: unknown) {
  return Response.json({ jsonrpc: "2.0", id: id ?? null, error: { code, message, data } }, { headers: { ...CORS, "Content-Type": "application/json" } });
}

// --- A2A + Daftra tools manifest ---

const A2A_TOOLS = [
  {
    name: "agent.register",
    description: "تسجيل وكيل جديد في شبكة Foundry A2A والحصول على token خاص به.",
    inputSchema: {
      type: "object",
      required: ["agent_id", "name"],
      properties: {
        agent_id: { type: "string", description: "معرف فريد للوكيل" },
        name: { type: "string" },
        description: { type: "string" },
        capabilities: { type: "array", items: { type: "string" } },
      },
    },
    annotations: { readOnlyHint: false },
  },
  {
    name: "agent.list",
    description: "قائمة الوكلاء النشطين في الشبكة.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
  },
  {
    name: "agent.send_message",
    description: "إرسال رسالة إلى وكيل آخر. يتطلب مصادقة الوكيل المرسل عبر X-Agent-Id / X-Agent-Token.",
    inputSchema: {
      type: "object",
      required: ["to_agent", "content"],
      properties: {
        to_agent: { type: "string" },
        content: { description: "محتوى الرسالة (نص أو JSON)" },
        thread_id: { type: "string", description: "لمواصلة محادثة" },
        role: { type: "string", enum: ["message", "request", "response", "system"] },
        metadata: { type: "object" },
      },
    },
    annotations: { readOnlyHint: false },
  },
  {
    name: "agent.inbox",
    description: "استلام الرسائل غير المقروءة للوكيل الحالي. يعلّمها كـ delivered.",
    inputSchema: { type: "object", properties: { limit: { type: "integer", minimum: 1, maximum: 100 } } },
    annotations: { readOnlyHint: false, idempotentHint: false },
  },
  {
    name: "agent.ack",
    description: "تأكيد معالجة رسائل واردة (حذفها من صندوق الوارد).",
    inputSchema: {
      type: "object",
      required: ["message_ids"],
      properties: { message_ids: { type: "array", items: { type: "string" } } },
    },
    annotations: { readOnlyHint: false, destructiveHint: false },
  },
];

const DAFTRA_MCP_TOOLS = DAFTRA_TOOLS.map((t) => ({
  name: `daftra.${t.name}`,
  description: `${t.title} — ${t.description} (${t.method} ${t.path})`,
  inputSchema: {
    type: "object",
    properties: {
      params: { type: "object", description: "قيم متغيرات المسار" },
      query: { type: "object" },
      body: { type: "object" },
      confirm: { type: "string", description: 'مطلوب للكتابة/الحذف = "I_UNDERSTAND"' },
    },
  },
  annotations: {
    readOnlyHint: t.perm === "read",
    destructiveHint: t.perm === "delete",
    needsApproval: t.perm !== "read",
  },
}));

const ALL_TOOLS = [...A2A_TOOLS, ...DAFTRA_MCP_TOOLS];

// --- Auth helpers ---

async function agentFromHeaders(request: Request): Promise<{ agent_id: string } | null> {
  const id = request.headers.get("x-agent-id");
  const token = request.headers.get("x-agent-token");
  if (!id || !token) return null;
  const ok = await a2aAuthenticate(id, token);
  return ok ? { agent_id: id } : null;
}

// --- Handler ---

async function handleRpc(body: JsonRpc, request: Request): Promise<Response> {
  const { id, method, params } = body;

  if (method === "initialize") {
    return rpcOk(id, {
      protocolVersion: "2025-06-18",
      capabilities: { tools: { listChanged: false } },
      serverInfo: { name: "foundry-a2a-mcp", version: "1.0.0", vendor: "Alazab" },
      instructions:
        "Foundry Agent-to-Agent MCP. سجّل وكيلك عبر agent.register ثم مرّر X-Agent-Id و X-Agent-Token لبقية العمليات. يوفر أيضاً أدوات دفترة كاملة.",
    });
  }

  if (method === "tools/list") return rpcOk(id, { tools: ALL_TOOLS });

  if (method === "tools/call") {
    const name = String((params as { name?: string })?.name ?? "");
    const args = ((params as { arguments?: Record<string, unknown> })?.arguments ?? {}) as Record<string, unknown>;
    const toText = (v: unknown, isError = false) => ({
      content: [{ type: "text", text: typeof v === "string" ? v : JSON.stringify(v) }],
      isError,
    });

    try {
      // ---- A2A ----
      if (name === "agent.register") {
        const agent_id = String(args.agent_id ?? "");
        if (!agent_id) return rpcOk(id, toText({ ok: false, error: "agent_id مطلوب" }, true));
        // Prevent identity takeover: block re-registration of existing agent_ids via the
        // unauthenticated public endpoint. Owners must use the authenticated GUI path.
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: existing } = await supabaseAdmin
          .from("foundry_agents")
          .select("agent_id")
          .eq("agent_id", agent_id)
          .maybeSingle();
        if (existing) {
          return rpcOk(id, toText({ ok: false, error: "agent_id مسجّل مسبقًا — استخدم الواجهة المصادَق عليها لإعادة التسجيل" }, true));
        }
        const r = await a2aRegisterAgent({
          agent_id,
          name: String(args.name ?? ""),
          description: args.description as string | undefined,
          capabilities: (args.capabilities as string[] | undefined) ?? [],
        });
        return rpcOk(id, toText(r, !r.ok));
      }
      if (name === "agent.list") {
        const r = await a2aListAgents();
        return rpcOk(id, toText(r, !r.ok));
      }
      if (name === "agent.send_message") {
        const auth = await agentFromHeaders(request);
        if (!auth) return rpcOk(id, toText({ ok: false, error: "unauthenticated — send X-Agent-Id + X-Agent-Token" }, true));
        const r = await a2aSendMessage({
          from_agent: auth.agent_id,
          to_agent: String(args.to_agent ?? ""),
          content: args.content ?? {},
          thread_id: args.thread_id as string | undefined,
          role: args.role as string | undefined,
          metadata: (args.metadata as Record<string, unknown>) ?? {},
        });
        return rpcOk(id, toText(r, !r.ok));
      }
      if (name === "agent.inbox") {
        const auth = await agentFromHeaders(request);
        if (!auth) return rpcOk(id, toText({ ok: false, error: "unauthenticated" }, true));
        const r = await a2aInbox(auth.agent_id, Number(args.limit ?? 20));
        return rpcOk(id, toText(r, !r.ok));
      }
      if (name === "agent.ack") {
        const auth = await agentFromHeaders(request);
        if (!auth) return rpcOk(id, toText({ ok: false, error: "unauthenticated" }, true));
        const r = await a2aAck(auth.agent_id, (args.message_ids as string[]) ?? []);
        return rpcOk(id, toText(r, !r.ok));
      }

      // ---- Daftra bridge ----
      if (name.startsWith("daftra.")) {
        const bare = name.slice("daftra.".length);
        const alazabKey = request.headers.get("x-alazab-key") ?? "";
        if (!alazabKey) {
          return rpcOk(id, toText({ ok: false, error: "X-Alazab-Key header مطلوب لاستدعاء أدوات دفترة" }, true));
        }
        const res = await callDaftraTool({
          data: {
            tool: bare,
            alazabKey,
            params: (args.params ?? {}) as Record<string, string | number>,
            query: (args.query ?? {}) as Record<string, string | number | boolean>,
            body: args.body,
            confirm: typeof args.confirm === "string" ? args.confirm : undefined,
          },
        });
        return rpcOk(id, toText(res, !(res as { ok?: boolean }).ok));
      }

      return rpcErr(id, -32601, `Unknown tool: ${name}`);
    } catch (e) {
      return rpcErr(id, -32000, e instanceof Error ? e.message : String(e));
    }
  }

  if (method === "ping") return rpcOk(id, {});
  if (method === "notifications/initialized") return new Response(null, { status: 202, headers: CORS });

  return rpcErr(id, -32601, `Unknown method: ${method}`);
}

export const Route = createFileRoute("/api/public/foundry-mcp")({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      GET: async () =>
        Response.json(
          {
            name: "foundry-a2a-mcp",
            version: "1.0.0",
            protocol: "MCP 2025-06-18 / JSON-RPC 2.0",
            transport: "Streamable HTTP",
            tools: ALL_TOOLS.map((t) => ({ name: t.name, description: t.description })),
            endpoint: "POST here with JSON-RPC 2.0 payload; Accept: application/json, text/event-stream",
          },
          { headers: CORS },
        ),
      POST: async ({ request }) => {
        const accept = request.headers.get("accept") ?? "";
        if (accept && !accept.includes("application/json") && !accept.includes("*/*")) {
          return new Response(
            JSON.stringify({ jsonrpc: "2.0", error: { code: -32600, message: "Accept must include application/json" }, id: null }),
            { status: 406, headers: { ...CORS, "Content-Type": "application/json" } },
          );
        }
        let body: JsonRpc;
        try {
          body = (await request.json()) as JsonRpc;
        } catch {
          return rpcErr(null, -32700, "Parse error");
        }
        return handleRpc(body, request);
      },
    },
  },
});
