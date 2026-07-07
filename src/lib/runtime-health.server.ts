type HealthStatus = "healthy" | "warning" | "down" | "not_configured";

type EnvSpec = {
  key: string;
  label: string;
  required?: boolean;
};

export type RuntimeHealthItem = {
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

const OPENAI_API_VERSION = process.env.AZURE_OPENAI_API_VERSION || "2024-10-21";

function env(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

function vars(specs: EnvSpec[]) {
  return specs.map((s) => ({ key: s.key, label: s.label, present: Boolean(env(s.key)) }));
}

function configured(required: EnvSpec[]) {
  return required.every((s) => Boolean(env(s.key)));
}

function safeEndpoint(value?: string) {
  if (!value) return undefined;
  try {
    const u = new URL(value);
    return `${u.protocol}//${u.host}${u.pathname}`;
  } catch {
    return value;
  }
}

function withTimeout(ms = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return { signal: controller.signal, done: () => clearTimeout(timer) };
}

function basicAuth(user?: string, pass?: string) {
  if (!user || !pass) return undefined;
  return `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`;
}

async function probe(url: string, init: RequestInit = {}): Promise<{ status: HealthStatus; httpStatus?: number; latencyMs: number; message: string }> {
  const started = Date.now();
  const timeout = withTimeout();
  try {
    const res = await fetch(url, { ...init, signal: timeout.signal });
    const latencyMs = Date.now() - started;
    const ok = res.status >= 200 && res.status < 400;
    const authProblem = res.status === 401 || res.status === 403;
    return {
      status: ok ? "healthy" : authProblem ? "down" : "warning",
      httpStatus: res.status,
      latencyMs,
      message: ok ? "اتصال فعلي ناجح" : authProblem ? "الخدمة وصلت لكن الاعتماد مرفوض" : `الخدمة ردت HTTP ${res.status}`,
    };
  } catch (e) {
    return {
      status: "down",
      latencyMs: Date.now() - started,
      message: e instanceof Error && e.name === "AbortError" ? "انتهت مهلة الاتصال" : `فشل الاتصال: ${(e as Error).message}`,
    };
  } finally {
    timeout.done();
  }
}

function notConfigured(id: string, group: string, name: string, required: EnvSpec[], optional: EnvSpec[] = [], endpoint?: string, meta?: RuntimeHealthItem["meta"]): RuntimeHealthItem {
  return {
    id,
    group,
    name,
    status: "not_configured",
    configured: false,
    requiredKeys: vars(required),
    optionalKeys: vars(optional),
    endpoint: safeEndpoint(endpoint),
    checkedAt: new Date().toISOString(),
    message: "إعدادات التشغيل غير مكتملة",
    meta,
  };
}

function itemFromProbe(args: {
  id: string;
  group: string;
  name: string;
  required: EnvSpec[];
  optional?: EnvSpec[];
  endpoint?: string;
  result: Awaited<ReturnType<typeof probe>>;
  meta?: RuntimeHealthItem["meta"];
}): RuntimeHealthItem {
  return {
    id: args.id,
    group: args.group,
    name: args.name,
    status: args.result.status,
    configured: true,
    requiredKeys: vars(args.required),
    optionalKeys: vars(args.optional ?? []),
    endpoint: safeEndpoint(args.endpoint),
    httpStatus: args.result.httpStatus,
    latencyMs: args.result.latencyMs,
    checkedAt: new Date().toISOString(),
    message: args.result.message,
    meta: args.meta,
  };
}

export async function buildRuntimeHealth(): Promise<RuntimeHealthItem[]> {
  const checks: Promise<RuntimeHealthItem>[] = [];

  const foundryReq = [
    { key: "AZURE_FOUNDRY_ENDPOINT", label: "Foundry endpoint" },
    { key: "AZURE_FOUNDRY_PROJECT_ENDPOINT", label: "Project endpoint" },
    { key: "AZURE_FOUNDRY_PROJECT_NAME", label: "Project name" },
  ];
  const foundryOpt = [
    { key: "AZURE_FOUNDRY_API_KEY1", label: "Foundry key 1" },
    { key: "AZURE_FOUNDRY_API_KEY2", label: "Foundry key 2" },
  ];
  checks.push((async () => {
    const endpoint = env("AZURE_FOUNDRY_PROJECT_ENDPOINT") || env("AZURE_FOUNDRY_ENDPOINT");
    if (!configured(foundryReq)) return notConfigured("azure_foundry", "Azure Foundry", "Azure AI Project", foundryReq, foundryOpt, endpoint);
    const result = await probe(endpoint!, { method: "GET", headers: env("AZURE_FOUNDRY_API_KEY1") ? { "api-key": env("AZURE_FOUNDRY_API_KEY1")! } : {} });
    return itemFromProbe({ id: "azure_foundry", group: "Azure Foundry", name: "Azure AI Project", required: foundryReq, optional: foundryOpt, endpoint, result, meta: { project: env("AZURE_FOUNDRY_PROJECT_NAME") ?? null } });
  })());

  const openaiReq = [
    { key: "AZURE_OPENAI_ENDPOINT", label: "OpenAI endpoint" },
    { key: "AZURE_OPENAI_API_KEY", label: "OpenAI key" },
  ];
  const openaiOpt = [{ key: "AZURE_OPENAI_V1_ENDPOINT", label: "OpenAI v1 endpoint" }];
  checks.push((async () => {
    if (!configured(openaiReq)) return notConfigured("azure_openai", "Azure OpenAI", "Deployments API", openaiReq, openaiOpt, env("AZURE_OPENAI_ENDPOINT"));
    const base = env("AZURE_OPENAI_ENDPOINT")!.replace(/\/+$/, "");
    const endpoint = `${base}/openai/deployments?api-version=${OPENAI_API_VERSION}`;
    const result = await probe(endpoint, { headers: { "api-key": env("AZURE_OPENAI_API_KEY")! } });
    return itemFromProbe({ id: "azure_openai", group: "Azure OpenAI", name: "Deployments API", required: openaiReq, optional: openaiOpt, endpoint: env("AZURE_OPENAI_ENDPOINT"), result });
  })());

  const deploymentSpecs = [
    ["az_model_core", "Core model", "AZ_MODEL_CORE", "AZ_MODEL_CORE_VERSION"],
    ["az_model_maint", "Maintenance model", "AZ_MODEL_MAINT", "AZ_MODEL_MAINT_VERSION"],
    ["az_model_finance", "Finance model", "AZ_MODEL_FINANCE", "AZ_MODEL_FINANCE_VERSION"],
    ["az_models_text", "Embeddings model", "AZ_MODELS_TEXT", "AZ_MODELS_TEXT_VERSION"],
  ] as const;
  for (const [id, name, deploymentKey, versionKey] of deploymentSpecs) {
    const required = [{ key: deploymentKey, label: "Deployment name" }, { key: versionKey, label: "Model/version" }];
    checks.push(Promise.resolve(
      configured(required)
        ? {
            id,
            group: "Azure Models",
            name,
            status: "healthy" as const,
            configured: true,
            requiredKeys: vars(required),
            endpoint: safeEndpoint(env("AZURE_OPENAI_ENDPOINT")),
            checkedAt: new Date().toISOString(),
            message: "اسم النشر مضبوط في بيئة الإنتاج",
            meta: { deployment: env(deploymentKey) ?? null, version: env(versionKey) ?? null },
          }
        : notConfigured(id, "Azure Models", name, required, [], env("AZURE_OPENAI_ENDPOINT")),
    ));
  }

  const aiServicesReq = [
    { key: "AZURE_AI_SERVICES_ENDPOINT", label: "AI Services endpoint" },
    { key: "AZURE_AI_SERVICES_KEY", label: "AI Services key" },
  ];
  checks.push((async () => {
    if (!configured(aiServicesReq)) return notConfigured("azure_ai_services", "Azure AI Services", "Multi-service endpoint", aiServicesReq, [], env("AZURE_AI_SERVICES_ENDPOINT"));
    const result = await probe(env("AZURE_AI_SERVICES_ENDPOINT")!, { headers: { "Ocp-Apim-Subscription-Key": env("AZURE_AI_SERVICES_KEY")! } });
    return itemFromProbe({ id: "azure_ai_services", group: "Azure AI Services", name: "Multi-service endpoint", required: aiServicesReq, endpoint: env("AZURE_AI_SERVICES_ENDPOINT"), result });
  })());

  const speechReq = [
    { key: "AZURE_SPEECH_REGION", label: "Speech region" },
    { key: "AZURE_SPEECH_KEY", label: "Speech key" },
    { key: "AZURE_SPEECH_TO_TEXT_ENDPOINT", label: "STT endpoint" },
    { key: "AZURE_TEXT_TO_SPEECH_ENDPOINT", label: "TTS endpoint" },
  ];
  checks.push((async () => {
    if (!configured(speechReq)) return notConfigured("azure_speech", "Azure Speech", "STT/TTS endpoints", speechReq, [], env("AZURE_SPEECH_TO_TEXT_ENDPOINT"));
    const result = await probe(env("AZURE_SPEECH_TO_TEXT_ENDPOINT")!, { method: "GET", headers: { "Ocp-Apim-Subscription-Key": env("AZURE_SPEECH_KEY")! } });
    return itemFromProbe({ id: "azure_speech", group: "Azure Speech", name: "STT/TTS endpoints", required: speechReq, endpoint: env("AZURE_SPEECH_TO_TEXT_ENDPOINT"), result, meta: { region: env("AZURE_SPEECH_REGION") ?? null } });
  })());

  const translatorReq = [
    { key: "AZURE_TRANSLATOR_ENDPOINT", label: "Translator endpoint" },
    { key: "AZURE_TRANSLATOR_REGION", label: "Translator region" },
    { key: "AZURE_TRANSLATOR_KEY", label: "Translator key" },
  ];
  checks.push((async () => {
    if (!configured(translatorReq)) return notConfigured("azure_translator", "Azure Translator", "Languages API", translatorReq, [], env("AZURE_TRANSLATOR_ENDPOINT"));
    const base = env("AZURE_TRANSLATOR_ENDPOINT")!.replace(/\/+$/, "");
    const endpoint = `${base}/languages?api-version=3.0`;
    const result = await probe(endpoint, { headers: { "Ocp-Apim-Subscription-Key": env("AZURE_TRANSLATOR_KEY")!, "Ocp-Apim-Subscription-Region": env("AZURE_TRANSLATOR_REGION")! } });
    return itemFromProbe({ id: "azure_translator", group: "Azure Translator", name: "Languages API", required: translatorReq, endpoint: env("AZURE_TRANSLATOR_ENDPOINT"), result, meta: { region: env("AZURE_TRANSLATOR_REGION") ?? null } });
  })());

  const agentSpecs = [
    ["az_agent_auth", "Auth agent", "AZ_AGENT_AUTH", "AZ_AGENT_AUTH_VERSION"],
    ["az_agent_copilot", "Copilot agent", "AZ_AGENT_COPILOT", "AZ_AGENT_COPILOT_VERSION"],
    ["az_agent_prod", "Product agent", "AZ_AGENT_PROD", "AZ_AGENT_PROD_VERSION"],
    ["az_agent_finance", "Finance agent", "AZ_AGENT_FINANCE", "AZ_AGENT_FINANCE_VERSION"],
    ["az_agent_core", "Core agent", "AZ_AGENT_CORE", "AZ_AGENT_CORE_VERSION"],
    ["az_agent_maint", "Maintenance agent", "AZ_AGENT_MAINT", "AZ_AGENT_MAINT_VERSION"],
    ["az_agent_project", "Project agent", "AZ_AGENT_PROJECT", "AZ_AGENT_PROJECT_VERSION"],
    ["az_agent_vision", "Vision agent", "AZ_AGENT_VISION", "AZ_AGENT_VISION_VERSION"],
  ] as const;
  for (const [id, name, agentKey, versionKey] of agentSpecs) {
    const required = [{ key: agentKey, label: "Agent name" }, { key: versionKey, label: "Agent version" }];
    checks.push(Promise.resolve(
      configured(required)
        ? {
            id,
            group: "Azure Agents",
            name,
            status: "healthy" as const,
            configured: true,
            requiredKeys: vars(required),
            endpoint: safeEndpoint(env("AZURE_FOUNDRY_PROJECT_ENDPOINT")),
            checkedAt: new Date().toISOString(),
            message: "تعريف الوكيل مضبوط في بيئة الإنتاج",
            meta: { agent: env(agentKey) ?? null, version: env(versionKey) ?? null },
          }
        : notConfigured(id, "Azure Agents", name, required, [], env("AZURE_FOUNDRY_PROJECT_ENDPOINT")),
    ));
  }

  const ollamaReq = [
    { key: "OLLAMA_BASE_URL", label: "Ollama base URL" },
    { key: "OLLAMA_USERNAME", label: "Ollama username" },
    { key: "OLLAMA_PASSWORD", label: "Ollama password" },
  ];
  const ollamaOpt = [{ key: "OLLAMA_OPENAI_BASE_URL", label: "Ollama OpenAI-compatible URL" }];
  checks.push((async () => {
    if (!configured(ollamaReq)) return notConfigured("ollama", "Ollama", "Native API", ollamaReq, ollamaOpt, env("OLLAMA_BASE_URL"));
    const endpoint = `${env("OLLAMA_BASE_URL")!.replace(/\/+$/, "")}/api/version`;
    const auth = basicAuth(env("OLLAMA_USERNAME"), env("OLLAMA_PASSWORD"));
    const result = await probe(endpoint, { headers: auth ? { Authorization: auth } : {} });
    return itemFromProbe({ id: "ollama", group: "Ollama", name: "Native API", required: ollamaReq, optional: ollamaOpt, endpoint: env("OLLAMA_BASE_URL"), result });
  })());

  const ollamaOpenAiReq = [{ key: "OLLAMA_OPENAI_BASE_URL", label: "OpenAI-compatible URL" }];
  checks.push((async () => {
    if (!configured(ollamaOpenAiReq)) return notConfigured("ollama_openai", "Ollama", "OpenAI-compatible API", ollamaOpenAiReq, ollamaReq, env("OLLAMA_OPENAI_BASE_URL"));
    const endpoint = `${env("OLLAMA_OPENAI_BASE_URL")!.replace(/\/+$/, "")}/models`;
    const auth = basicAuth(env("OLLAMA_USERNAME"), env("OLLAMA_PASSWORD"));
    const result = await probe(endpoint, { headers: auth ? { Authorization: auth } : {} });
    return itemFromProbe({ id: "ollama_openai", group: "Ollama", name: "OpenAI-compatible API", required: ollamaOpenAiReq, optional: ollamaReq, endpoint: env("OLLAMA_OPENAI_BASE_URL"), result });
  })());

  const openWebuiReq = [{ key: "OPEN_WEBUI_URL", label: "Open WebUI URL" }, { key: "OPEN_WEBUI_NAME", label: "Open WebUI display name" }];
  checks.push((async () => {
    if (!configured(openWebuiReq)) return notConfigured("open_webui", "Open WebUI", "Web UI", openWebuiReq, [], env("OPEN_WEBUI_URL"));
    const result = await probe(env("OPEN_WEBUI_URL")!);
    return itemFromProbe({ id: "open_webui", group: "Open WebUI", name: env("OPEN_WEBUI_NAME") || "Open WebUI", required: openWebuiReq, endpoint: env("OPEN_WEBUI_URL"), result });
  })());

  return Promise.all(checks);
}

export function summarizeRuntimeHealth(items: RuntimeHealthItem[]) {
  const counts = items.reduce<Record<HealthStatus, number>>((acc, item) => {
    acc[item.status] += 1;
    return acc;
  }, { healthy: 0, warning: 0, down: 0, not_configured: 0 });
  return {
    total: items.length,
    ...counts,
    checkedAt: new Date().toISOString(),
  };
}
