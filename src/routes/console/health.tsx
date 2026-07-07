import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Activity, AlertTriangle, CheckCircle2, Clock3, RefreshCw, ServerCrash, ShieldQuestion } from "lucide-react";

import { PageHeader, EmptyState } from "@/components/console/PageHeader";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";

type HealthStatus = "healthy" | "warning" | "down" | "not_configured";

type HealthItem = {
  id: string;
  group: string;
  name: string;
  status: HealthStatus;
  configured: boolean;
  requiredKeys: Array<{ key: string; label: string; present: boolean }>;
  optionalKeys?: Array<{ key: string; label: string; present: boolean }>;
  endpoint?: string;
  httpStatus?: number;
  latencyMs?: number;
  checkedAt: string;
  message: string;
  meta?: Record<string, string | number | boolean | null>;
};

type HealthResponse = {
  summary: Record<string, number | string>;
  items: HealthItem[];
};

export const Route = createFileRoute("/console/health")({
  component: RuntimeHealthPage,
});

function statusView(status: HealthStatus) {
  switch (status) {
    case "healthy":
      return { text: "سليم", cls: "border-success/30 bg-success/10 text-success", icon: CheckCircle2 };
    case "warning":
      return { text: "تحذير", cls: "border-warning/30 bg-warning/10 text-warning-foreground", icon: AlertTriangle };
    case "down":
      return { text: "متعطل", cls: "border-destructive/30 bg-destructive/10 text-destructive", icon: ServerCrash };
    default:
      return { text: "غير مكتمل", cls: "border-muted bg-muted/40 text-muted-foreground", icon: ShieldQuestion };
  }
}

function SummaryCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-bold num">{value}</div>
    </div>
  );
}

function RuntimeHealthPage() {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["runtime-health"],
    queryFn: () => api<HealthResponse>("/api/system-health"),
    retry: 0,
  });

  const groups = new Map<string, HealthItem[]>();
  for (const item of data?.items ?? []) {
    groups.set(item.group, [...(groups.get(item.group) ?? []), item]);
  }

  return (
    <div className="space-y-5">
      <PageHeader
        title="مؤشرات صحة الاتصال"
        description="فحص فعلي لعناصر Azure Foundry و Azure OpenAI و AI Services و Speech و Translator و Ollama و Open WebUI والوكلاء والموديلات. الصفحة تعرض حالة الاتصال فقط ولا تعرض قيم الأسرار."
        actions={
          <Button variant="outline" size="sm" onClick={() => refetch()} disabled={isFetching}>
            <RefreshCw className={`ml-2 h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
            إعادة الفحص
          </Button>
        }
      />

      {isLoading ? (
        <div className="flex items-center justify-center rounded-lg border bg-card p-10 text-muted-foreground">
          <Activity className="ml-2 h-5 w-5 animate-pulse" /> جارٍ فحص الخدمات…
        </div>
      ) : error ? (
        <EmptyState title="تعذّر تحميل مؤشرات الصحة" description={(error as Error).message} />
      ) : !data ? (
        <EmptyState title="لا توجد بيانات فحص" description="لم يرجع الباك اند أي بيانات من مسار فحص الصحة." />
      ) : (
        <>
          <div className="grid gap-3 md:grid-cols-5">
            <SummaryCard label="الإجمالي" value={data.summary.total ?? 0} />
            <SummaryCard label="سليم" value={data.summary.healthy ?? 0} />
            <SummaryCard label="تحذير" value={data.summary.warning ?? 0} />
            <SummaryCard label="متعطل" value={data.summary.down ?? 0} />
            <SummaryCard label="غير مكتمل" value={data.summary.not_configured ?? 0} />
          </div>

          {[...groups.entries()].map(([group, items]) => (
            <section key={group} className="rounded-xl border bg-card">
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="font-semibold">{group}</h2>
                <span className="text-xs text-muted-foreground num">{items.length} عناصر</span>
              </div>
              <div className="grid gap-3 p-4 lg:grid-cols-2">
                {items.map((item) => {
                  const s = statusView(item.status);
                  const Icon = s.icon;
                  return (
                    <article key={item.id} className="rounded-lg border p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">{item.message}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs ${s.cls}`}>
                          <Icon className="h-3.5 w-3.5" /> {s.text}
                        </span>
                      </div>

                      <dl className="mt-4 grid gap-2 text-xs md:grid-cols-2">
                        <div>
                          <dt className="text-muted-foreground">Endpoint</dt>
                          <dd className="truncate text-left font-mono" dir="ltr">{item.endpoint ?? "—"}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">HTTP</dt>
                          <dd className="num">{item.httpStatus ?? "—"}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Latency</dt>
                          <dd className="num">{item.latencyMs != null ? `${item.latencyMs} ms` : "—"}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Checked</dt>
                          <dd className="num">{new Date(item.checkedAt).toLocaleString("ar-EG")}</dd>
                        </div>
                      </dl>

                      <div className="mt-4 rounded-md bg-muted/40 p-3">
                        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                          <Clock3 className="h-3.5 w-3.5" /> متغيرات التشغيل
                        </div>
                        <div className="grid gap-1 text-xs md:grid-cols-2">
                          {[...item.requiredKeys, ...(item.optionalKeys ?? [])].map((k) => (
                            <div key={k.key} className="flex items-center justify-between gap-2">
                              <span className="truncate font-mono text-[11px]" dir="ltr">{k.key}</span>
                              <span className={k.present ? "text-success" : "text-muted-foreground"}>{k.present ? "موجود" : "ناقص"}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {item.meta ? (
                        <div className="mt-3 grid gap-1 text-xs md:grid-cols-2">
                          {Object.entries(item.meta).map(([key, value]) => (
                            <div key={key} className="flex justify-between gap-2 rounded bg-muted/20 px-2 py-1">
                              <span className="text-muted-foreground">{key}</span>
                              <span className="truncate text-left font-mono" dir="ltr">{String(value ?? "—")}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
