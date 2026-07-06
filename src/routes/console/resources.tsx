import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Cloud, Cpu, Bot, RefreshCw, CheckCircle2, XCircle } from "lucide-react";

import { PageHeader } from "@/components/console/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { listOllamaModels, getOllamaStatus } from "@/lib/ollama.functions";

export const Route = createFileRoute("/console/resources")({
  component: ResourcesPage,
});

/* Static inventory extracted from قائمة موارد AI (Azure Foundry — azab-rg-ai) */
const AZURE_MODELS = [
  { name: "az-model-maint", version: "gpt-5.1", type: "Chat / Reasoning" },
  { name: "az-model-core", version: "gpt-5.5", type: "Chat / Reasoning" },
  { name: "az-model-speech", version: "Azure-Speech Speech-to-Text", type: "STT" },
  { name: "az-model-finance", version: "DeepSeek-V4-Pro", type: "Finance" },
  { name: "az-models-text", version: "text-embedding-3-small", type: "Embeddings" },
  { name: "az-model-voice", version: "Azure-Speech Voice-Live", type: "Voice" },
];

const FOUNDRY_AGENTS = [
  { name: "az-agent-auth", version: 2 },
  { name: "az-agent-copilot", version: 3 },
  { name: "az-agent-prod", version: 4 },
  { name: "az-agent-finance", version: 4 },
  { name: "az-agent-core", version: 3 },
  { name: "az-agent-maint", version: 15 },
  { name: "az-agent-project", version: 2 },
  { name: "az-agent-vision", version: 3 },
];

const AZURE_META = {
  resourceGroup: "azab-rg-ai",
  subscription: "Microsoft Azure Sponsorship",
  subscriptionId: "1363114a-a1d7-4abb-8042-dcdebf91e2c9",
  endpoints: [
    { label: "Foundry", url: "https://az-ai-resource.openai.azure.com/openai/v1" },
    { label: "OpenAI", url: "https://az-ai-resource.services.ai.azure.com/" },
    { label: "AI Services", url: "https://az-ai-resource.services.ai.azure.com/" },
  ],
};

function fmtSize(bytes: number): string {
  if (!bytes) return "-";
  const gb = bytes / 1024 ** 3;
  return `${gb.toFixed(1)} GB`;
}

function ResourcesPage() {
  const fetchModels = useServerFn(listOllamaModels);
  const fetchStatus = useServerFn(getOllamaStatus);

  const status = useQuery({ queryKey: ["ollama-status"], queryFn: fetchStatus });
  const models = useQuery({ queryKey: ["ollama-models"], queryFn: fetchModels });

  const ollamaOk = models.data?.ok ?? false;
  const ollamaCount = models.data?.models?.length ?? 0;

  return (
    <div className="space-y-6" dir="rtl">
      <PageHeader
        title="موارد الذكاء الاصطناعي"
        description="جرد شامل: نماذج Azure Foundry، الوكلاء، والنماذج المحلية على سيرفر النشر."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">نماذج Azure</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{AZURE_MODELS.length}</div>
            <p className="text-xs text-muted-foreground">في {AZURE_META.resourceGroup}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">وكلاء Foundry</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{FOUNDRY_AGENTS.length}</div>
            <p className="text-xs text-muted-foreground">Azure Foundry Agents</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">نماذج محلية (Ollama)</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-2">
              {ollamaCount}
              {status.data?.configured ? (
                ollamaOk ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-destructive" />
                )
              ) : null}
            </div>
            <p className="text-xs text-muted-foreground truncate">
              {status.data?.base_url ?? "غير مضبوط"}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="local" className="w-full">
        <TabsList>
          <TabsTrigger value="local">النماذج المحلية</TabsTrigger>
          <TabsTrigger value="azure">نماذج Azure</TabsTrigger>
          <TabsTrigger value="agents">الوكلاء</TabsTrigger>
        </TabsList>

        <TabsContent value="local" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>نماذج Ollama المكتشفة تلقائيًا</CardTitle>
                <CardDescription>
                  من {status.data?.base_url ?? "—"} عبر <code>/api/tags</code>
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => models.refetch()}
                disabled={models.isFetching}
              >
                <RefreshCw className={`h-4 w-4 ml-2 ${models.isFetching ? "animate-spin" : ""}`} />
                تحديث
              </Button>
            </CardHeader>
            <CardContent>
              {!status.data?.configured && (
                <p className="text-sm text-muted-foreground py-8 text-center">
                  لم يتم ضبط <code>OLLAMA_BASE_URL</code> بعد.
                </p>
              )}
              {status.data?.configured && !ollamaOk && (
                <p className="text-sm text-destructive py-4">
                  فشل الاتصال: {models.data?.error ?? "—"}
                </p>
              )}
              {ollamaOk && (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>الاسم</TableHead>
                      <TableHead>العائلة</TableHead>
                      <TableHead>الحجم</TableHead>
                      <TableHead>المعاملات</TableHead>
                      <TableHead>Digest</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(models.data?.models ?? []).map((m) => (
                      <TableRow key={m.digest}>
                        <TableCell className="font-mono">{m.name}</TableCell>
                        <TableCell>{m.details?.family ?? "-"}</TableCell>
                        <TableCell>{fmtSize(m.size)}</TableCell>
                        <TableCell>{m.details?.parameter_size ?? "-"}</TableCell>
                        <TableCell className="font-mono text-xs text-muted-foreground">
                          {m.digest.slice(0, 12)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="azure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>نماذج Azure Foundry</CardTitle>
              <CardDescription>
                Resource Group: <code>{AZURE_META.resourceGroup}</code> —{" "}
                {AZURE_META.subscription}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الاسم</TableHead>
                    <TableHead>الإصدار / الطراز</TableHead>
                    <TableHead>النوع</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {AZURE_MODELS.map((m) => (
                    <TableRow key={m.name}>
                      <TableCell className="font-mono">{m.name}</TableCell>
                      <TableCell>{m.version}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{m.type}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div>
                <h4 className="text-sm font-semibold mb-2">نقاط النهاية</h4>
                <div className="space-y-1 text-sm">
                  {AZURE_META.endpoints.map((e) => (
                    <div key={e.label} className="flex gap-2">
                      <Badge variant="outline">{e.label}</Badge>
                      <code className="text-xs text-muted-foreground">{e.url}</code>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>وكلاء Azure Foundry</CardTitle>
              <CardDescription>{FOUNDRY_AGENTS.length} وكيل مسجَّل</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الاسم</TableHead>
                    <TableHead>الإصدار</TableHead>
                    <TableHead>النوع</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {FOUNDRY_AGENTS.map((a) => (
                    <TableRow key={a.name}>
                      <TableCell className="font-mono">{a.name}</TableCell>
                      <TableCell>v{a.version}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Agent</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
