import { createServerFn } from "@tanstack/react-start";
import { DAFTRA_TOOLS, findTool, type DaftraTool } from "./api-map";

function baseUrl(version: "v1" | "v2", subdomain: string) {
  return version === "v2"
    ? `https://${subdomain}.daftra.com/v2/api/entity`
    : `https://${subdomain}.daftra.com/api2`;
}

function interpolate(path: string, params: Record<string, string | number> = {}) {
  return path.replace(/\{(\w+)\}/g, (_, k) => encodeURIComponent(String(params[k] ?? `{${k}}`)));
}

async function logAudit(entry: Record<string, unknown>) {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin.from("daftra_audit_log").insert(entry as never);
  } catch (e) {
    console.error("audit log failed", e);
  }
}

export const listDaftraTools = createServerFn({ method: "GET" }).handler(async () => {
  return { tools: DAFTRA_TOOLS };
});

export const getDaftraConfig = createServerFn({ method: "GET" }).handler(async () => {
  return {
    subdomain: process.env.DAFTRA_SUBDOMAIN ?? "",
    hasApiKey: !!process.env.DAFTRA_API_KEY,
    hasClientId: !!process.env.DAFTRA_CLIENT_ID,
    hasClientSecret: !!process.env.DAFTRA_CLIENT_SECRET,
    hasPrivateKey: !!process.env.ALAZAB_MCP_PRIVATE_KEY,
  };
});

type CallInput = {
  tool: string;
  alazabKey: string;
  params?: Record<string, string | number>;
  query?: Record<string, string | number | boolean>;
  body?: unknown;
  confirm?: string; // must equal "I_UNDERSTAND" for write/delete
};

export const callDaftraTool = createServerFn({ method: "POST" })
  .inputValidator((data: CallInput) => data)
  .handler(async ({ data }): Promise<{ ok: boolean; error?: string | null; status?: number; duration_ms?: number; data?: unknown; url?: string }> => {
    // 1. Alazab private key guard
    const expectedKey = process.env.ALAZAB_MCP_PRIVATE_KEY;
    if (!expectedKey) {
      return { ok: false, error: "ALAZAB_MCP_PRIVATE_KEY غير مضبوط على الخادم" };
    }
    if (!data.alazabKey || data.alazabKey !== expectedKey) {
      return { ok: false, error: "مفتاح العزب غير صحيح (X-Alazab-Key mismatch)" };
    }

    // 2. Tool lookup
    const tool: DaftraTool | undefined = findTool(data.tool);
    if (!tool) return { ok: false, error: `الأداة غير موجودة: ${data.tool}` };

    // 3. Governance — write/delete require confirmation
    if (tool.perm !== "read" && data.confirm !== "I_UNDERSTAND") {
      return {
        ok: false,
        error: `العملية "${tool.perm}" محمية. أرسل confirm: "I_UNDERSTAND" للمتابعة.`,
      };
    }

    // 4. Config
    const subdomain = process.env.DAFTRA_SUBDOMAIN;
    const apiKey = process.env.DAFTRA_API_KEY;
    if (!subdomain) return { ok: false, error: "DAFTRA_SUBDOMAIN غير مضبوط" };
    if (!apiKey) return { ok: false, error: "DAFTRA_API_KEY غير مضبوط" };

    // 5. Build URL
    const path = interpolate(tool.path, data.params);
    const url = new URL(baseUrl(tool.version, subdomain) + path);
    if (data.query) {
      for (const [k, v] of Object.entries(data.query)) url.searchParams.set(k, String(v));
    }

    // 6. Request
    const started = Date.now();
    let status = 0;
    let respBody: unknown = null;
    let ok = false;
    let errMsg: string | null = null;
    try {
      const res = await fetch(url.toString(), {
        method: tool.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          apikey: apiKey,
        },
        body: tool.method === "GET" || tool.method === "DELETE" ? undefined : JSON.stringify(data.body ?? {}),
      });
      status = res.status;
      const text = await res.text();
      try {
        respBody = text ? JSON.parse(text) : null;
      } catch {
        respBody = text;
      }
      ok = res.ok;
      if (!ok) errMsg = `HTTP ${status}`;
    } catch (e) {
      errMsg = e instanceof Error ? e.message : String(e);
    }

    const duration = Date.now() - started;

    await logAudit({
      tool: tool.name,
      method: tool.method,
      path: tool.path,
      version: tool.version,
      status,
      duration_ms: duration,
      ok,
      error: errMsg,
      actor: "gui",
      meta: { params: data.params, query: data.query },
    });

    return { ok, status, duration_ms: duration, error: errMsg, data: respBody, url: url.toString() };
  });

export const listAuditLog = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("daftra_audit_log")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);
  if (error) return { entries: [], error: error.message };
  return { entries: data ?? [] };
});
