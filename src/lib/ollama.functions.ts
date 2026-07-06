/**
 * Ollama server functions — auto-discovery for local models on the deploy server.
 * Uses OLLAMA_BASE_URL + optional Basic auth (OLLAMA_USERNAME / OLLAMA_PASSWORD).
 */
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

function authHeaders(): Record<string, string> {
  const h: Record<string, string> = { "Content-Type": "application/json" };
  const user = process.env.OLLAMA_USERNAME;
  const pass = process.env.OLLAMA_PASSWORD;
  if (user && pass) h["Authorization"] = "Basic " + btoa(`${user}:${pass}`);
  return h;
}

export type OllamaModel = {
  name: string;
  model: string;
  size: number;
  digest: string;
  modified_at: string;
  details?: { family?: string; parameter_size?: string; quantization_level?: string };
};

export const getOllamaStatus = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const base = process.env.OLLAMA_BASE_URL;
    return {
      configured: Boolean(base),
      base_url: base ?? null,
      has_basic_auth: Boolean(process.env.OLLAMA_USERNAME && process.env.OLLAMA_PASSWORD),
    };
  });

export const listOllamaModels = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async (): Promise<{ ok: boolean; models: OllamaModel[]; error?: string }> => {
    const base = (process.env.OLLAMA_BASE_URL ?? "").replace(/\/$/, "");
    if (!base) return { ok: false, models: [], error: "OLLAMA_BASE_URL غير مضبوط" };
    try {
      const started = Date.now();
      const r = await fetch(`${base}/api/tags`, { headers: authHeaders() });
      if (!r.ok) {
        const txt = await r.text().catch(() => "");
        return { ok: false, models: [], error: `HTTP ${r.status} ${txt.slice(0, 200)}` };
      }
      const j = (await r.json()) as { models?: OllamaModel[] };
      void started;
      return { ok: true, models: j.models ?? [] };
    } catch (e) {
      return { ok: false, models: [], error: e instanceof Error ? e.message : String(e) };
    }
  });
