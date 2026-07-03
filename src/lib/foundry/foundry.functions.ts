import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// ---- Server-side helpers (import supabaseAdmin lazily inside handlers) ----

async function admin() {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

async function sha256Hex(input: string): Promise<string> {
  const buf = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ---- A2A protocol primitives shared with the public MCP endpoint ----

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type A2AResult = { ok: boolean; error?: string; data?: any };

export async function a2aRegisterAgent(input: {
  agent_id: string;
  name: string;
  description?: string;
  capabilities?: string[];
  owner_user_id?: string | null;
}): Promise<A2AResult & { token?: string }> {
  if (!input.agent_id || !input.name) return { ok: false, error: "agent_id و name مطلوبان" };
  const sb = await admin();
  const token = randomToken();
  const token_hash = await sha256Hex(token);
  const { data, error } = await sb
    .from("foundry_agents")
    .upsert(
      {
        agent_id: input.agent_id,
        name: input.name,
        description: input.description ?? null,
        capabilities: input.capabilities ?? [],
        owner_user_id: input.owner_user_id ?? null,
        token_hash,
        active: true,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "agent_id" },
    )
    .select("agent_id, name, capabilities")
    .single();
  if (error) return { ok: false, error: error.message };
  return { ok: true, data, token };
}

export async function a2aAuthenticate(agent_id: string, token: string): Promise<boolean> {
  if (!agent_id || !token) return false;
  const sb = await admin();
  const { data } = await sb.from("foundry_agents").select("token_hash, active").eq("agent_id", agent_id).maybeSingle();
  if (!data || !data.active) return false;
  const h = await sha256Hex(token);
  if (h !== data.token_hash) return false;
  await sb.from("foundry_agents").update({ last_seen_at: new Date().toISOString() }).eq("agent_id", agent_id);
  return true;
}

export async function a2aListAgents(): Promise<A2AResult> {
  const sb = await admin();
  const { data, error } = await sb
    .from("foundry_agents")
    .select("agent_id, name, description, capabilities, active, last_seen_at")
    .eq("active", true)
    .order("name");
  if (error) return { ok: false, error: error.message };
  return { ok: true, data };
}

export async function a2aSendMessage(input: {
  from_agent: string;
  to_agent: string;
  content: unknown;
  thread_id?: string;
  role?: string;
  metadata?: Record<string, unknown>;
}): Promise<A2AResult> {
  const sb = await admin();
  const { data: dest } = await sb.from("foundry_agents").select("agent_id").eq("agent_id", input.to_agent).eq("active", true).maybeSingle();
  if (!dest) return { ok: false, error: `الوكيل المستقبل غير موجود: ${input.to_agent}` };
  const row = {
    from_agent: input.from_agent,
    to_agent: input.to_agent,
    role: input.role ?? "message",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: (input.content ?? {}) as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata: (input.metadata ?? {}) as any,
    ...(input.thread_id ? { thread_id: input.thread_id } : {}),
  };
  const { data, error } = await sb.from("foundry_messages").insert(row).select("id, thread_id, created_at").single();
  if (error) return { ok: false, error: error.message };
  return { ok: true, data };
}

export async function a2aInbox(agent_id: string, limit = 20): Promise<A2AResult> {
  const sb = await admin();
  const { data, error } = await sb
    .from("foundry_messages")
    .select("id, thread_id, from_agent, to_agent, role, content, metadata, created_at, delivered_at, acked_at")
    .eq("to_agent", agent_id)
    .is("acked_at", null)
    .order("created_at", { ascending: true })
    .limit(Math.min(Math.max(limit, 1), 100));
  if (error) return { ok: false, error: error.message };
  if (data?.length) {
    const ids = data.map((m) => m.id);
    await sb.from("foundry_messages").update({ delivered_at: new Date().toISOString() }).in("id", ids).is("delivered_at", null);
  }
  return { ok: true, data };
}

export async function a2aAck(agent_id: string, message_ids: string[]): Promise<A2AResult> {
  if (!Array.isArray(message_ids) || message_ids.length === 0) return { ok: false, error: "message_ids مطلوب" };
  const sb = await admin();
  const { error, count } = await sb
    .from("foundry_messages")
    .update({ acked_at: new Date().toISOString() }, { count: "exact" })
    .in("id", message_ids)
    .eq("to_agent", agent_id);
  if (error) return { ok: false, error: error.message };
  return { ok: true, data: { acked: count ?? 0 } };
}

// ---- GUI server functions (authenticated) ----

export const registerFoundryAgent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { agent_id: string; name: string; description?: string; capabilities?: string[] }) => d)
  .handler(async ({ data, context }) => {
    return a2aRegisterAgent({ ...data, owner_user_id: context.userId });
  });

export const listMyFoundryAgents = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const sb = await admin();
    const { data, error } = await sb
      .from("foundry_agents")
      .select("agent_id, name, description, capabilities, active, last_seen_at, created_at")
      .eq("owner_user_id", context.userId)
      .order("created_at", { ascending: false });
    return { ok: !error, error: error?.message, agents: data ?? [] };
  });

export const listRecentFoundryMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const sb = await admin();
    const { data: mine } = await sb.from("foundry_agents").select("agent_id").eq("owner_user_id", context.userId);
    const ids = (mine ?? []).map((a) => a.agent_id);
    if (ids.length === 0) return { ok: true, messages: [] };
    const { data, error } = await sb
      .from("foundry_messages")
      .select("id, thread_id, from_agent, to_agent, role, content, created_at, delivered_at, acked_at")
      .or(`from_agent.in.(${ids.join(",")}),to_agent.in.(${ids.join(",")})`)
      .order("created_at", { ascending: false })
      .limit(50);
    return { ok: !error, error: error?.message, messages: data ?? [] };
  });

export const revokeFoundryAgent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { agent_id: string }) => d)
  .handler(async ({ data, context }) => {
    const sb = await admin();
    const { error } = await sb
      .from("foundry_agents")
      .update({ active: false, updated_at: new Date().toISOString() })
      .eq("agent_id", data.agent_id)
      .eq("owner_user_id", context.userId);
    return { ok: !error, error: error?.message };
  });
