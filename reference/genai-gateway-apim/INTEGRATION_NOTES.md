# genai-gateway-apim (مرجعي فقط)

هذا المجلد يحوي ملفات مشروع Azure `genai-gateway-apim` النموذجي التي دُمجت داخل هذا المشروع.
تم نقلها هنا كي لا تتعارض مع كود TanStack Start الفعلي.

## المحتوى
- `api/`, `web/`, `package.json`, `package-lock.json`, `.env-example`, `README.md` — تطبيق Node/Express + صفحة HTML ثابتة (كانت داخل `src/`).
- `infra/`, `test/`, `azure.yaml` — قوالب Bicep و `azd` لنشر APIM + Azure OpenAI.
- `DOC.md`, `architecture.jpg`, `apim.jpg` — توثيق معماري.

## ملاحظات هامة
- **azure.yaml**: خطاف `postprovision` كان يكتب إلى `src/.env` — لا تشغّل `azd up` من جذر المشروع لأنه سيكتب داخل `src/` الخاص بـ TanStack. شغّله من داخل هذا المجلد المرجعي.
- **package.json الداخلي**: منفصل عن `package.json` الرئيسي؛ لا تُنصّبه على الجذر.
- **Bicep templates** في `infra/` و `test/` قابلة للاستخدام كمرجع عند تجهيز موارد Azure لـ Azure Foundry / APIM المستخدمة في `src/lib/foundry/*` و `src/lib/azure.server.ts`.

## الملفات الفعلية التي تستخدم بيانات Azure في هذا التطبيق
- `src/lib/foundry/azure.functions.ts` — يقرأ `AZURE_FOUNDRY_ENDPOINT`, `AZURE_OPENAI_ENDPOINT`, `AZURE_FOUNDRY_API_KEY`, `AZURE_TENANT_ID`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET` من Secrets.
- `src/lib/azure.server.ts` — يقرأ `AZURE_OPENAI_*`, `AZURE_AI_SEARCH_*`, `AZURE_DOCUMENT_INTELLIGENCE_*`, `AZURE_STORAGE_CONNECTION_STRING`.
