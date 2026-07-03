import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { azureListAgents, azureListDeployments, azureListModels, azureTestConnection } from "@/lib/foundry/azure.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/_authenticated/azure")({
  head: () => ({
    meta: [
      { title: "Azure AI Foundry — الوكلاء والنماذج" },
      { name: "description", content: "استعراض حي لوكلاء ونماذج ونشرات Azure AI Foundry" },
    ],
  }),
  component: AzurePage,
});

type Row = Record<string, unknown>;

function AzurePage() {
  const agentsFn = useServerFn(azureListAgents);
  const modelsFn = useServerFn(azureListModels);
  const deploysFn = useServerFn(azureListDeployments);
  const testFn = useServerFn(azureTestConnection);

  const [agents, setAgents] = useState<Row[]>([]);
  const [models, setModels] = useState<Row[]>([]);
  const [deployments, setDeployments] = useState<Row[]>([]);
  const [errors, setErrors] = useState<{ agents?: string; models?: string; deployments?: string }>({});
  const [test, setTest] = useState<{ ok: boolean; status: number; endpoint: string; error?: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function refresh() {
    setBusy(true);
    const [a, m, d] = await Promise.all([agentsFn({}), modelsFn({}), deploysFn({})]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const A = a as any, M = m as any, D = d as any;
    setAgents(A.agents ?? []);
    setModels(M.models ?? []);
    setDeployments(D.deployments ?? []);
    setErrors({ agents: A.error, models: M.error, deployments: D.error });
    setBusy(false);
  }

  useEffect(() => { refresh(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function doTest() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const r = (await testFn({})) as any;
    setTest(r);
  }

  const mcpUrl = typeof window !== "undefined" ? `${window.location.origin}/api/public/foundry-mcp` : "";

  return (
    <div dir="rtl" className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Azure AI Foundry</h1>
            <p className="text-sm text-muted-foreground">استعراض حي للوكلاء والنماذج والنشرات من مشروع Foundry.</p>
          </div>
          <div className="flex gap-3 text-sm">
            <Link to="/foundry" className="underline text-muted-foreground">← A2A Bridge</Link>
            <Link to="/" className="underline text-muted-foreground">Daftra</Link>
          </div>
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base">حالة الاتصال</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={doTest}>اختبار</Button>
              <Button size="sm" onClick={refresh} disabled={busy}>{busy ? "..." : "تحديث"}</Button>
              {test && (
                <Badge variant={test.ok ? "default" : "destructive"}>
                  {test.ok ? `متصل (${test.status})` : `فشل (${test.status})`}
                </Badge>
              )}
            </div>
            {test?.endpoint && <code className="block rounded bg-muted px-2 py-1 text-xs">{test.endpoint}</code>}
            {test?.error && <p className="text-xs text-destructive">{test.error}</p>}
          </CardContent>
        </Card>

        <Tabs defaultValue="agents">
          <TabsList>
            <TabsTrigger value="agents">الوكلاء ({agents.length})</TabsTrigger>
            <TabsTrigger value="models">النماذج ({models.length})</TabsTrigger>
            <TabsTrigger value="deployments">النشرات ({deployments.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="agents">
            <ListView rows={agents} error={errors.agents} idKeys={["id", "name"]} extra={["model", "instructions"]} onGetCode={(r) => generateAgentCode(r, mcpUrl)} />
          </TabsContent>
          <TabsContent value="models">
            <ListView rows={models} error={errors.models} idKeys={["id", "model"]} extra={["capabilities", "lifecycle_status", "deprecation"]} />
          </TabsContent>
          <TabsContent value="deployments">
            <ListView rows={deployments} error={errors.deployments} idKeys={["name", "id"]} extra={["model", "sku", "status"]} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function pickString(r: Row, keys: string[]): string {
  for (const k of keys) {
    const v = r[k];
    if (typeof v === "string" && v) return v;
    if (v && typeof v === "object" && "name" in (v as Row)) {
      const n = (v as Row).name;
      if (typeof n === "string") return n;
    }
  }
  return JSON.stringify(r).slice(0, 60);
}

function ListView({ rows, error, idKeys, extra, onGetCode }: { rows: Row[]; error?: string; idKeys: string[]; extra: string[]; onGetCode?: (r: Row) => string }) {
  const [code, setCode] = useState<string | null>(null);
  if (error) return <p className="text-sm text-destructive p-4">{error}</p>;
  if (rows.length === 0) return <p className="text-sm text-muted-foreground p-4">لا توجد عناصر.</p>;
  return (
    <div className="space-y-2">
      {rows.map((r, i) => {
        const title = pickString(r, idKeys);
        return (
          <Card key={i}>
            <CardContent className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {extra.map((k) => {
                      const v = r[k];
                      if (v == null) return null;
                      const s = typeof v === "string" ? v : JSON.stringify(v);
                      return <Badge key={k} variant="outline" className="text-xs">{k}: {s.slice(0, 40)}</Badge>;
                    })}
                  </div>
                </div>
                {onGetCode && (
                  <Button size="sm" variant="outline" onClick={() => setCode(onGetCode(r))}>Get code</Button>
                )}
              </div>
              <details className="text-xs">
                <summary className="cursor-pointer text-muted-foreground">JSON</summary>
                <pre className="mt-1 max-h-64 overflow-auto rounded bg-muted p-2">{JSON.stringify(r, null, 2)}</pre>
              </details>
            </CardContent>
          </Card>
        );
      })}
      {code && (
        <Card>
          <CardHeader><CardTitle className="text-sm">Code snippet</CardTitle></CardHeader>
          <CardContent>
            <pre className="max-h-96 overflow-auto rounded bg-muted p-3 text-xs">{code}</pre>
            <Button size="sm" variant="ghost" className="mt-2" onClick={() => setCode(null)}>إغلاق</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function generateAgentCode(agent: Row, mcpUrl: string): string {
  const id = pickString(agent, ["id", "name"]);
  return `// إرسال رسالة إلى الوكيل ${id} عبر MCP
const res = await fetch("${mcpUrl}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json, text/event-stream",
    "X-Agent-Id": "<your-registered-agent-id>",
    "X-Agent-Token": "<your-token>",
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: "agent.send_message",
      arguments: { to_agent: "${id}", content: { text: "مرحبا" } }
    }
  })
});
console.log(await res.json());`;
}
