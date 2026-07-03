import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  callDaftraTool,
  getDaftraConfig,
  listAuditLog,
  listDaftraTools,
  testDaftraConnection,
} from "@/lib/daftra/daftra.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daftra MCP — لوحة تحكم العزب" },
      { name: "description", content: "طبقة حوكمة MCP لدفترة: اتصال، أدوات، سجل تدقيق" },
    ],
  }),
  component: Dashboard,
});

type ToolDef = {
  name: string;
  title: string;
  description: string;
  method: string;
  path: string;
  version: string;
  perm: "read" | "write" | "delete";
  category: string;
};

const permColors: Record<string, string> = {
  read: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  write: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  delete: "bg-rose-500/15 text-rose-700 dark:text-rose-400",
};

function Dashboard() {
  const cfgFn = useServerFn(getDaftraConfig);
  const toolsFn = useServerFn(listDaftraTools);
  const callFn = useServerFn(callDaftraTool);
  const auditFn = useServerFn(listAuditLog);
  const testFn = useServerFn(testDaftraConnection);

  const [cfg, setCfg] = useState<{ subdomain: string; hasApiKey: boolean; hasClientId: boolean; hasClientSecret: boolean; hasPrivateKey: boolean } | null>(null);
  const [tools, setTools] = useState<ToolDef[]>([]);
  const [alazabKey, setAlazabKey] = useState<string>(() => (typeof window !== "undefined" ? localStorage.getItem("alazabKey") ?? "" : ""));
  const [selected, setSelected] = useState<string>("ping");
  const [paramsText, setParamsText] = useState('{}');
  const [queryText, setQueryText] = useState('{"limit": 5}');
  const [bodyText, setBodyText] = useState('{}');
  const [confirmWrite, setConfirmWrite] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [audit, setAudit] = useState<Array<Record<string, unknown>>>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    void cfgFn({}).then(setCfg);
    void toolsFn({}).then((r) => setTools(r.tools as ToolDef[]));
    void refreshAudit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("alazabKey", alazabKey);
  }, [alazabKey]);

  async function refreshAudit() {
    const r = await auditFn({});
    setAudit((r.entries ?? []) as Array<Record<string, unknown>>);
  }

  const activeTool = useMemo(() => tools.find((t) => t.name === selected), [tools, selected]);

  async function runTool() {
    if (!activeTool) return;
    setLoading(true);
    setResult(null);
    try {
      const params = paramsText.trim() ? JSON.parse(paramsText) : {};
      const query = queryText.trim() ? JSON.parse(queryText) : {};
      const body = bodyText.trim() ? JSON.parse(bodyText) : {};
      const res = await callFn({
        data: {
          tool: activeTool.name,
          alazabKey,
          params,
          query,
          body,
          confirm: confirmWrite ? "I_UNDERSTAND" : undefined,
        },
      });
      setResult(res);
      void refreshAudit();
    } catch (e) {
      setResult({ ok: false, error: e instanceof Error ? e.message : String(e) });
    } finally {
      setLoading(false);
    }
  }

  const filteredTools = tools.filter(
    (t) =>
      !filter ||
      t.name.includes(filter) ||
      t.title.includes(filter) ||
      t.category.includes(filter),
  );

  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Daftra MCP Governance</h1>
            <p className="text-sm text-muted-foreground">طبقة حوكمة MCP لدفترة — بيئة العزب</p>
          </div>
          <div className="flex gap-2 items-center text-xs">
            <Badge variant={cfg?.hasPrivateKey ? "default" : "destructive"}>
              مفتاح العزب {cfg?.hasPrivateKey ? "✓" : "✗"}
            </Badge>
            <Badge variant={cfg?.hasApiKey ? "default" : "destructive"}>
              Daftra API {cfg?.hasApiKey ? "✓" : "✗"}
            </Badge>
            <Badge variant={cfg?.subdomain ? "default" : "destructive"}>
              {cfg?.subdomain ? `${cfg.subdomain}.daftra.com` : "لا يوجد subdomain"}
            </Badge>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">
        <Tabs defaultValue="tools" className="w-full">
          <TabsList>
            <TabsTrigger value="tools">الأدوات (Tools)</TabsTrigger>
            <TabsTrigger value="connection">الاتصال</TabsTrigger>
            <TabsTrigger value="audit">سجل التدقيق</TabsTrigger>
            <TabsTrigger value="mcp">MCP Endpoint</TabsTrigger>
          </TabsList>

          <TabsContent value="connection" className="mt-4">
            <Card>
              <CardHeader><CardTitle>حالة الاتصال</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Info label="Subdomain" value={cfg?.subdomain || "—"} />
                  <Info label="DAFTRA_API_KEY" value={cfg?.hasApiKey ? "مضبوط" : "غير مضبوط"} />
                  <Info label="DAFTRA_CLIENT_ID" value={cfg?.hasClientId ? "مضبوط" : "غير مضبوط"} />
                  <Info label="DAFTRA_CLIENT_SECRET" value={cfg?.hasClientSecret ? "مضبوط" : "غير مضبوط"} />
                  <Info label="ALAZAB_MCP_PRIVATE_KEY" value={cfg?.hasPrivateKey ? "مضبوط على الخادم" : "غير مضبوط"} />
                </div>
                <div>
                  <Label>مفتاح العزب (يُحفظ محلياً في المتصفح)</Label>
                  <Input
                    type="password"
                    value={alazabKey}
                    onChange={(e) => setAlazabKey(e.target.value)}
                    placeholder="أدخل ALAZAB_MCP_PRIVATE_KEY"
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    يجب أن يطابق قيمة ALAZAB_MCP_PRIVATE_KEY الموجودة على الخادم لتنفيذ أي أداة.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">الأدوات ({tools.length})</CardTitle>
                  <Input
                    placeholder="بحث…"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mt-2"
                  />
                </CardHeader>
                <CardContent className="max-h-[600px] overflow-auto space-y-1 p-2">
                  {filteredTools.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => setSelected(t.name)}
                      className={`w-full text-right px-3 py-2 rounded-md text-sm transition ${
                        selected === t.name
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent"
                      }`}
                    >
                      <div className="flex justify-between items-center gap-2">
                        <span className="font-medium truncate">{t.title}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded ${permColors[t.perm]}`}>
                          {t.perm}
                        </span>
                      </div>
                      <div className="text-[11px] opacity-70 truncate">{t.name}</div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {activeTool?.title ?? "اختر أداة"}
                    {activeTool && (
                      <Badge variant="outline" className="font-mono text-xs">
                        {activeTool.method} · {activeTool.version} · {activeTool.path}
                      </Badge>
                    )}
                  </CardTitle>
                  {activeTool && <p className="text-sm text-muted-foreground">{activeTool.description}</p>}
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <Label>Path Params (JSON)</Label>
                      <Textarea rows={4} value={paramsText} onChange={(e) => setParamsText(e.target.value)} className="font-mono text-xs" />
                    </div>
                    <div>
                      <Label>Query (JSON)</Label>
                      <Textarea rows={4} value={queryText} onChange={(e) => setQueryText(e.target.value)} className="font-mono text-xs" />
                    </div>
                    <div>
                      <Label>Body (JSON)</Label>
                      <Textarea rows={4} value={bodyText} onChange={(e) => setBodyText(e.target.value)} className="font-mono text-xs" />
                    </div>
                  </div>

                  {activeTool && activeTool.perm !== "read" && (
                    <label className="flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                      <input type="checkbox" checked={confirmWrite} onChange={(e) => setConfirmWrite(e.target.checked)} />
                      أؤكد فهم خطورة هذه العملية ({activeTool.perm}) — أرسل confirm=I_UNDERSTAND
                    </label>
                  )}

                  <div className="flex gap-2 items-center">
                    <Button onClick={runTool} disabled={loading || !activeTool || !alazabKey}>
                      {loading ? "جاري التنفيذ…" : "تشغيل"}
                    </Button>
                    {!alazabKey && <span className="text-xs text-rose-500">أدخل مفتاح العزب في تبويب الاتصال أولاً</span>}
                  </div>

                  {result !== null && (
                    <div>
                      <Label>النتيجة</Label>
                      <pre className="mt-1 max-h-[400px] overflow-auto rounded-md bg-muted p-3 text-xs" dir="ltr">
{JSON.stringify(result, null, 2)}
                      </pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audit" className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>آخر 100 عملية</CardTitle>
                <Button size="sm" variant="outline" onClick={refreshAudit}>تحديث</Button>
              </CardHeader>
              <CardContent className="overflow-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs text-muted-foreground">
                    <tr className="text-right">
                      <th className="p-2">الوقت</th>
                      <th className="p-2">الأداة</th>
                      <th className="p-2">Method</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">مدة</th>
                      <th className="p-2">ok</th>
                      <th className="p-2">الخطأ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audit.map((row) => (
                      <tr key={String(row.id)} className="border-t border-border">
                        <td className="p-2 whitespace-nowrap text-xs">{new Date(String(row.created_at)).toLocaleString("ar-EG")}</td>
                        <td className="p-2 font-mono text-xs">{String(row.tool)}</td>
                        <td className="p-2">{String(row.method ?? "")}</td>
                        <td className="p-2">{String(row.status ?? "")}</td>
                        <td className="p-2">{String(row.duration_ms ?? "")}ms</td>
                        <td className="p-2">{row.ok ? "✓" : "✗"}</td>
                        <td className="p-2 text-rose-500 text-xs">{String(row.error ?? "")}</td>
                      </tr>
                    ))}
                    {audit.length === 0 && (
                      <tr><td colSpan={7} className="p-6 text-center text-muted-foreground">لا توجد عمليات بعد</td></tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mcp" className="mt-4">
            <Card>
              <CardHeader><CardTitle>MCP JSON-RPC Endpoint</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>مسار الاستدعاء المتوافق مع MCP:</p>
                <code className="block bg-muted p-3 rounded" dir="ltr">POST /api/public/daftra-mcp</code>
                <p>الترويسات المطلوبة:</p>
                <pre className="bg-muted p-3 rounded text-xs" dir="ltr">{`Content-Type: application/json
X-Alazab-Key: <ALAZAB_MCP_PRIVATE_KEY>`}</pre>
                <p>أمثلة الأوامر:</p>
                <pre className="bg-muted p-3 rounded text-xs" dir="ltr">{`{ "method": "tools/list" }

{ "method": "tools/call",
  "params": {
    "name": "clients.list",
    "arguments": { "query": { "limit": 5 } }
  } }`}</pre>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="font-mono text-sm mt-1">{value}</div>
    </div>
  );
}
