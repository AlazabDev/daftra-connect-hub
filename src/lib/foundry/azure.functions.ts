/* eslint-disable @typescript-eslint/no-explicit-any */
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// Azure AI Foundry REST client
// Endpoint format: https://<resource>.services.ai.azure.com/api/projects/<project>
// Auth: api-key header (Foundry) or Bearer via Entra ID (client credentials).

const AGENTS_API_VERSION = "v1";
const DEPLOYMENTS_API_VERSION = "2024-10-21";

function endpoint(): string {
  const ep = process.env.AZURE_FOUNDRY_ENDPOINT;
  if (!ep) throw new Error("AZURE_FOUNDRY_ENDPOINT غير مضبوط");
  return ep.replace(/\/$/, "");
}

function openAiEndpoint(): string {
  const ep = process.env.AZURE_OPENAI_ENDPOINT;
  if (!ep) throw new Error("AZURE_OPENAI_ENDPOINT غير مضبوط");
  return ep.replace(/\/$/, "");
}

// --- Entra ID (client credentials) token cache ---
let cachedToken: { token: string; exp: number } | null = null;

async function getEntraToken(scope: string): Promise<string | null> {
  const tenant = process.env.AZURE_TENANT_ID;
  const clientId = process.env.AZURE_CLIENT_ID;
  const clientSecret = process.env.AZURE_CLIENT_SECRET;
  if (!tenant || !clientId || !clientSecret) return null;
  if (cachedToken && cachedToken.exp > Date.now() + 30_000) return cachedToken.token;

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    scope,
  });
  const res = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) return null;
  const j = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { token: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return j.access_token;
}

async function authHeaders(scope = "https://ai.azure.com/.default"): Promise<Record<string, string>> {
  const apiKey = process.env.AZURE_FOUNDRY_API_KEY;
  if (apiKey) return { "api-key": apiKey };
  const token = await getEntraToken(scope);
  if (token) return { Authorization: `Bearer ${token}` };
  throw new Error("لا يوجد AZURE_FOUNDRY_API_KEY ولا Entra credentials");
}

async function azureGet(url: string, scope?: string): Promise<{ ok: boolean; status: number; data?: unknown; error?: string }> {
  try {
    const headers = await authHeaders(scope);
    const res = await fetch(url, { headers: { ...headers, Accept: "application/json" } });
    const text = await res.text();
    let data: any = undefined;
    try { data = text ? JSON.parse(text) : undefined; } catch { data = text; }
    if (!res.ok) return { ok: false, status: res.status, error: typeof data === "string" ? data : JSON.stringify(data) };
    return { ok: true, status: res.status, data };
  } catch (e) {
    return { ok: false, status: 0, error: e instanceof Error ? e.message : String(e) };
  }
}

// --- Public server functions (auth required) ---

export const azureListAgents = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const url = `${endpoint()}/assistants?api-version=${AGENTS_API_VERSION}`;
    const r = await azureGet(url);
    if (!r.ok) return { ok: false, error: r.error, agents: [] as any[] };
    const d = r.data as { data?: any[] } | any[];
    const list = Array.isArray(d) ? d : d?.data ?? [];
    return { ok: true, agents: list };
  });

export const azureListModels = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    // OpenAI-compatible models list on the OpenAI resource
    const url = `${openAiEndpoint()}/models`;
    const apiKey = process.env.AZURE_FOUNDRY_API_KEY;
    try {
      const res = await fetch(url, {
        headers: apiKey ? { "api-key": apiKey, Accept: "application/json" } : { Accept: "application/json" },
      });
      const text = await res.text();
      let data: any; try { data = JSON.parse(text); } catch { data = text; }
      if (!res.ok) return { ok: false, error: typeof data === "string" ? data : JSON.stringify(data), models: [] as any[] };
      const d = data as { data?: any[] } | any[];
      return { ok: true, models: Array.isArray(d) ? d : d?.data ?? [] };
    } catch (e) {
      return { ok: false, error: e instanceof Error ? e.message : String(e), models: [] as any[] };
    }
  });

export const azureListDeployments = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    // ARM-style deployments listing needs subscription+resourceGroup — not always available.
    // Instead, list deployments via Foundry project endpoint if exposed.
    const url = `${endpoint()}/deployments?api-version=${DEPLOYMENTS_API_VERSION}`;
    const r = await azureGet(url);
    if (!r.ok) return { ok: false, error: r.error, deployments: [] as any[] };
    const d = r.data as { data?: any[]; value?: any[] } | any[];
    const list = Array.isArray(d) ? d : d?.data ?? d?.value ?? [];
    return { ok: true, deployments: list };
  });

export const azureTestConnection = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const url = `${endpoint()}/assistants?api-version=${AGENTS_API_VERSION}&limit=1`;
    const r = await azureGet(url);
    return { ok: r.ok, status: r.status, error: r.error, endpoint: endpoint() };
  });
