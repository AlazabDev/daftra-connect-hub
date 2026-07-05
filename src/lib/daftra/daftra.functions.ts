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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .handler(async ({ data }): Promise<any> => {
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
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("daftra_audit_log")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);
    if (error) return { entries: [], error: error.message };
    return { entries: data ?? [] };
  } catch (e) {
    return { entries: [], error: e instanceof Error ? e.message : String(e) };
  }
});

type TestInput = { alazabKey: string };
type AuthCheck = {
  mode: "apikey" | "bearer" | "oauth_password";
  ok: boolean;
  status: number;
  duration_ms: number;
  message: string;
  detail?: string;
};

async function probe(url: string, headers: Record<string, string>): Promise<{ ok: boolean; status: number; duration_ms: number; snippet: string }> {
  const started = Date.now();
  try {
    const res = await fetch(url, { method: "GET", headers: { Accept: "application/json", ...headers } });
    const text = await res.text();
    return { ok: res.ok, status: res.status, duration_ms: Date.now() - started, snippet: text.slice(0, 200) };
  } catch (e) {
    return { ok: false, status: 0, duration_ms: Date.now() - started, snippet: e instanceof Error ? e.message : String(e) };
  }
}

export const testDaftraConnection = createServerFn({ method: "POST" })
  .inputValidator((data: TestInput) => data)
  .handler(async ({ data }) => {
    const expected = process.env.ALAZAB_MCP_PRIVATE_KEY;
    const alazab = {
      configured: !!expected,
      matches: !!expected && data.alazabKey === expected,
    };

    const subdomain = process.env.DAFTRA_SUBDOMAIN;
    const apiKey = process.env.DAFTRA_API_KEY;
    const clientId = process.env.DAFTRA_CLIENT_ID;
    const clientSecret = process.env.DAFTRA_CLIENT_SECRET;

    const config = {
      subdomain: subdomain ?? null,
      hasApiKey: !!apiKey,
      hasClientId: !!clientId,
      hasClientSecret: !!clientSecret,
    };

    const checks: AuthCheck[] = [];

    if (!alazab.matches) {
      return {
        ok: false,
        alazab,
        config,
        checks,
        error: alazab.configured
          ? "مفتاح العزب المُدخل لا يطابق ALAZAB_MCP_PRIVATE_KEY على الخادم"
          : "ALAZAB_MCP_PRIVATE_KEY غير مضبوط على الخادم",
      };
    }

    if (!subdomain) {
      return { ok: false, alazab, config, checks, error: "DAFTRA_SUBDOMAIN غير مضبوط" };
    }

    const base = `https://${subdomain}.daftra.com/api2`;
    const testUrl = `${base}/clients.json?limit=1`;

    // 1) apikey header
    if (apiKey) {
      const r = await probe(testUrl, { apikey: apiKey });
      checks.push({
        mode: "apikey",
        ok: r.ok,
        status: r.status,
        duration_ms: r.duration_ms,
        message: r.ok ? "نجح — apikey header صالح" : `فشل — HTTP ${r.status}`,
        detail: r.snippet,
      });
    } else {
      checks.push({ mode: "apikey", ok: false, status: 0, duration_ms: 0, message: "DAFTRA_API_KEY غير مضبوط" });
    }

    // 2) bearer token (using same api key as bearer)
    if (apiKey) {
      const r = await probe(testUrl, { Authorization: `Bearer ${apiKey}` });
      checks.push({
        mode: "bearer",
        ok: r.ok,
        status: r.status,
        duration_ms: r.duration_ms,
        message: r.ok ? "نجح — Bearer token صالح" : `فشل — HTTP ${r.status}`,
        detail: r.snippet,
      });
    } else {
      checks.push({ mode: "bearer", ok: false, status: 0, duration_ms: 0, message: "DAFTRA_API_KEY غير مضبوط (يُستخدم كـ Bearer)" });
    }

    // 3) oauth_password — request token then probe
    if (clientId && clientSecret) {
      const started = Date.now();
      try {
        const tokenRes = await fetch(`https://${subdomain}.daftra.com/v2/oauth/token`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
          }),
        });
        const tokText = await tokenRes.text();
        let tok: { access_token?: string } = {};
        try { tok = JSON.parse(tokText); } catch { /* ignore */ }
        if (tokenRes.ok && tok.access_token) {
          const r = await probe(testUrl, { Authorization: `Bearer ${tok.access_token}` });
          checks.push({
            mode: "oauth_password",
            ok: r.ok,
            status: r.status,
            duration_ms: Date.now() - started,
            message: r.ok ? "نجح — تم استلام token واستخدامه" : `token صالح لكن الاستدعاء فشل HTTP ${r.status}`,
            detail: r.snippet,
          });
        } else {
          checks.push({
            mode: "oauth_password",
            ok: false,
            status: tokenRes.status,
            duration_ms: Date.now() - started,
            message: `فشل جلب OAuth token — HTTP ${tokenRes.status}`,
            detail: tokText.slice(0, 200),
          });
        }
      } catch (e) {
        checks.push({
          mode: "oauth_password",
          ok: false,
          status: 0,
          duration_ms: Date.now() - started,
          message: "خطأ شبكة أثناء طلب OAuth token",
          detail: e instanceof Error ? e.message : String(e),
        });
      }
    } else {
      checks.push({
        mode: "oauth_password",
        ok: false,
        status: 0,
        duration_ms: 0,
        message: "DAFTRA_CLIENT_ID / DAFTRA_CLIENT_SECRET غير مضبوطة",
      });
    }

    const ok = checks.some((c) => c.ok);
    return { ok, alazab, config, checks };
  });
