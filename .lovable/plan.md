## الوضع الحالي

مشروع `reference/genai-gateway-apim` تم دمجه سابقًا، وأضاف شجرة `src/routes/_app/*` وملفات `src/lib/*.functions.ts` تشير إلى جداول Supabase غير موجودة. البناء يفشل حاليًا بسبب:

1. **تعارض مسار `/`**: كل من `src/routes/_app/index.tsx` و`src/routes/_authenticated/index.tsx` يسجّلان نفس المسار.
2. **أخطاء TypeScript**: `src/lib/{ai-gateway.server, conversations.functions, endpoints.functions, policies.functions, storage-providers.functions, usage.functions, agents.functions}.ts` تستدعي جداول غير موجودة في `types.ts`:
   `ai_agents, ai_endpoints, ai_usage_logs, apim_policies, model_pricing, rate_limit_counters, ai_conversations, ai_messages, storage_providers`.

## الخطة (بدون حذف)

### 1) فك التعارض بإعادة تسمية `_app` → `console`
- `src/routes/_app.tsx` → `src/routes/console.tsx` (تحديث `createFileRoute("/_app")` → `/console`، وتحديث كل `to: "/…"` في القائمة الجانبية لتصبح `/console/…`، ما عدا الرئيسية).
- `src/routes/_app/*` → `src/routes/console/*` وتحديث كل `createFileRoute("/_app/xxx")` → `/console/xxx`.
- `_app/index.tsx` يصبح `console/index.tsx` (المسار `/console`) — لا يعود يتعارض مع `/`.
- شريط `_authenticated` (لوحة Azure/Foundry الحالية) يظل مسؤولًا عن `/`.

### 2) إنشاء الجداول الناقصة عبر migration واحدة
Migration تنشئ الجداول التالية في `public` مع `GRANT` + RLS + سياسات ملكية بـ `user_id = auth.uid()`:
- `ai_endpoints` (id, user_id, name, provider, base_url, deployment, api_version, enabled, created_at)
- `apim_policies` (id, user_id, name, xml, scope, enabled, created_at)
- `model_pricing` (id, model, input_per_1k numeric, output_per_1k numeric, currency, updated_at) — للقراءة العامة `TO authenticated`
- `rate_limit_counters` (id, key text, window_start timestamptz, count int) — service_role فقط
- `ai_usage_logs` (id, user_id, endpoint_id, model, prompt_tokens, completion_tokens, cost, created_at)
- `ai_conversations` (id, user_id, title, created_at, updated_at)
- `ai_messages` (id, conversation_id fk, role, content, tokens, created_at)
- `ai_agents` (id, user_id, name, system_prompt, model, tools jsonb, enabled, created_at)
- `storage_providers` (id, user_id, kind, name, config jsonb, enabled, created_at)

كل جدول: `GRANT SELECT,INSERT,UPDATE,DELETE ... TO authenticated; GRANT ALL ... TO service_role;` ثم `ENABLE ROW LEVEL SECURITY` وسياسات `USING (user_id = auth.uid())`. `model_pricing` قراءة عامة لكل الـ authenticated.

### 3) توفيق حماية الاستدعاءات
- كل `createServerFn` في هذه الملفات يستخدم `.middleware([requireSupabaseAuth])` ويعتمد على `context.supabase` (RLS كمستخدم).
- إزالة أي `process.env` من module scope إن وُجد ونقله داخل `.handler()`.

### 4) التحقق
- `bun run build` يمر.
- `bunx tsgo --noEmit` بدون أخطاء متعلقة بالجداول.

بعد الموافقة سأنفّذ الترحيل ثم إعادة التسمية والتعديلات في نفس الجولة.