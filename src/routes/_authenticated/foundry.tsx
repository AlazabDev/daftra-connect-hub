import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  listMyFoundryAgents,
  listRecentFoundryMessages,
  registerFoundryAgent,
  revokeFoundryAgent,
} from "@/lib/foundry/foundry.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_authenticated/foundry")({
  head: () => ({
    meta: [
      { title: "Foundry A2A — بروتوكول اتصال الوكلاء" },
      { name: "description", content: "طبقة Agent-to-Agent MCP لوكلاء Azure AI Foundry مع دفترة" },
    ],
  }),
  component: FoundryPage,
});

type Agent = {
  agent_id: string;
  name: string;
  description: string | null;
  capabilities: string[];
  active: boolean;
  last_seen_at: string | null;
  created_at: string;
};

type Msg = {
  id: string;
  thread_id: string;
  from_agent: string;
  to_agent: string;
  role: string;
  content: unknown;
  created_at: string;
  delivered_at: string | null;
  acked_at: string | null;
};

function FoundryPage() {
  const listFn = useServerFn(listMyFoundryAgents);
  const msgFn = useServerFn(listRecentFoundryMessages);
  const regFn = useServerFn(registerFoundryAgent);
  const revokeFn = useServerFn(revokeFoundryAgent);

  const [agents, setAgents] = useState<Agent[]>([]);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [form, setForm] = useState({ agent_id: "", name: "", description: "", capabilities: "" });
  const [newToken, setNewToken] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const mcpUrl =
    typeof window !== "undefined" ? `${window.location.origin}/api/public/foundry-mcp` : "/api/public/foundry-mcp";
  const prodUrl = "https://foundry-mcp.alazab.cloud/api/public/foundry-mcp";

  async function refresh() {
    const [a, m] = await Promise.all([listFn({}), msgFn({})]);
    setAgents((a as { agents: Agent[] }).agents ?? []);
    setMessages((m as { messages: Msg[] }).messages ?? []);
  }
  useEffect(() => { refresh(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function register() {
    if (!form.agent_id || !form.name) return;
    setBusy(true);
    setNewToken(null);
    const res = (await regFn({
      data: {
        agent_id: form.agent_id,
        name: form.name,
        description: form.description || undefined,
        capabilities: form.capabilities.split(",").map((s) => s.trim()).filter(Boolean),
      },
    })) as { ok: boolean; token?: string; error?: string };
    setBusy(false);
    if (res.ok && res.token) {
      setNewToken(res.token);
      setForm({ agent_id: "", name: "", description: "", capabilities: "" });
      await refresh();
    } else {
      alert(res.error ?? "فشل التسجيل");
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Foundry A2A — بروتوكول اتصال الوكلاء</h1>
            <p className="text-sm text-muted-foreground">
              نقطة MCP موحدة لوكلاء Azure AI Foundry: تسجيل، مراسلة، وأدوات دفترة كاملة.
            </p>
          </div>
          <div className="flex gap-3 text-sm">
            <Link to="/azure" className="underline text-muted-foreground">Azure Foundry →</Link>
            <Link to="/" className="underline text-muted-foreground">← لوحة Daftra</Link>
          </div>
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base">نقطة الاتصال (MCP Endpoint)</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">إنتاج (subdomain مخصص):</span>
              <code className="rounded bg-muted px-2 py-1 text-xs">{prodUrl}</code>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">المعاينة الحالية:</span>
              <code className="rounded bg-muted px-2 py-1 text-xs">{mcpUrl}</code>
            </div>
            <p className="text-xs text-muted-foreground">
              JSON-RPC 2.0 · Streamable HTTP · Headers: <code>Accept: application/json, text/event-stream</code>,{" "}
              <code>X-Agent-Id</code>, <code>X-Agent-Token</code>.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base">تسجيل وكيل جديد</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div><Label>Agent ID</Label><Input value={form.agent_id} onChange={(e) => setForm({ ...form, agent_id: e.target.value })} placeholder="foundry.sales.bot" /></div>
              <div><Label>الاسم</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div><Label>الوصف</Label><Textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
              <div><Label>القدرات (comma-separated)</Label><Input value={form.capabilities} onChange={(e) => setForm({ ...form, capabilities: e.target.value })} placeholder="clients.read, invoices.create" /></div>
              <Button onClick={register} disabled={busy}>{busy ? "..." : "تسجيل"}</Button>
              {newToken && (
                <div className="rounded border border-amber-500/40 bg-amber-500/10 p-3 text-xs">
                  <div className="mb-1 font-semibold">Token (احفظه الآن، لن يظهر ثانية):</div>
                  <code className="break-all">{newToken}</code>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">وكلائي ({agents.length})</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              {agents.length === 0 && <p className="text-sm text-muted-foreground">لا يوجد وكلاء بعد.</p>}
              {agents.map((a) => (
                <div key={a.agent_id} className="flex items-start justify-between rounded border p-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{a.name}</span>
                      <Badge variant={a.active ? "default" : "secondary"}>{a.active ? "نشط" : "مُبطل"}</Badge>
                    </div>
                    <code className="text-xs text-muted-foreground">{a.agent_id}</code>
                    {a.capabilities?.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {a.capabilities.map((c) => <Badge key={c} variant="outline" className="text-xs">{c}</Badge>)}
                      </div>
                    )}
                  </div>
                  {a.active && (
                    <Button size="sm" variant="ghost" onClick={async () => { await revokeFn({ data: { agent_id: a.agent_id } }); refresh(); }}>
                      إبطال
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base">آخر الرسائل ({messages.length})</CardTitle></CardHeader>
          <CardContent>
            {messages.length === 0 ? (
              <p className="text-sm text-muted-foreground">لا رسائل بعد.</p>
            ) : (
              <div className="space-y-2 max-h-96 overflow-auto">
                {messages.map((m) => (
                  <div key={m.id} className="rounded border p-2 text-xs">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>{new Date(m.created_at).toLocaleString()}</span>
                      <Badge variant="outline">{m.role}</Badge>
                      {m.acked_at ? <Badge>acked</Badge> : m.delivered_at ? <Badge variant="secondary">delivered</Badge> : <Badge variant="destructive">pending</Badge>}
                    </div>
                    <div className="mt-1"><code>{m.from_agent}</code> → <code>{m.to_agent}</code></div>
                    <pre className="mt-1 max-h-32 overflow-auto rounded bg-muted p-2">{JSON.stringify(m.content, null, 2)}</pre>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
