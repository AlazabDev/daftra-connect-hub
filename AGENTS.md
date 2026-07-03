اقرأ كل الملفات بعناية قبل التنفيذ.

المطلوب:
إنشاء Daftra MCP Server كامل يعمل بواجهة رسومية داخل المسار:

/mnt/mcp/daftra-mcp/

هذا المشروع ليس سكريبت API بسيط.
المطلوب بناء طبقة MCP Governance كاملة لدفترة، تشمل:
1. API Map منظمة.
2. MCP tools.
3. واجهة رسومية لإدارة الاتصال والاختبار والـ snapshots.
4. حماية خاصة بمفتاح داخلي للعزب.
5. Audit log.
6. فصل read/write/delete.
7. منع العمليات الخطرة افتراضيًا.
8. قابلية إضافة مفاتيح دفترة والدومين وبيانات العملاء والموردين والمنتجات لاحقًا.

المراجع التي يجب قراءتها أولًا:
- أي ملف OpenAPI موجود داخل:
  /mnt/mcp/daftra-mcp/docs/
- أي ملف Markdown API موجود، خصوصًا:
  Default module.md
- إن لم تكن الملفات موجودة، أنشئ مجلد docs وضع README يطلب وضع ملفات:
  daftra-openapi-3.0.yaml
  daftra-openapi-3.0.json
  Default module.md

معلومات أساسية من توثيق دفترة يجب اعتمادها:
- Base URL v1:
  https://{{subdomain}}.daftra.com/api2

- Base URL v2:
  https://{{subdomain}}.daftra.com/v2/api/entity

- المصادقة:
  Bearer Token
  apikey header

- OAuth token endpoint:
  POST /v2/oauth/token

- يجب دعم auth modes:
  apikey
  bearer
  oauth_password

- يجب دعم v1 و v2 معًا.

المسار المعماري المطلوب:

GUI Dashboard
    ↓
Daftra MCP Backend
    ↓
Private Alazab MCP Auth / HMAC
    ↓
Daftra API Map
    ↓
Daftra API

أنشئ المشروع في:

/mnt/mcp/daftra-mcp/

بالهيكل التالي:

/mnt/mcp/daftra-mcp/
├── README.md
├── pyproject.toml
├── .env.example
├── .gitignore
├── docs/
│   ├── README.md
│   └── samples/
├── config/
│   ├── daftra_api_map.yaml
│   └── governance_policy.yaml
├── data/
│   ├── snapshots/
│   ├── exports/
│   └── reports/
├── logs/
│   └── audit/
├── src/
│   └── daftra_mcp/
│       ├── __init__.py
│       ├── settings.py
│       ├── auth.py
│       ├── hmac_auth.py
│       ├── daftra_client.py
│       ├── api_map.py
│       ├── safety.py
│       ├── audit.py
│       ├── mcp_server.py
│       ├── gui_server.py
│       ├── tools_read.py
│       ├── tools_write.py
│       ├── tools_snapshot.py
│       └── schemas.py
├── web/
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── api.ts
│       ├── pages/
│       │   ├── Dashboard.tsx
│       │   ├── Connection.tsx
│       │   ├── ApiMap.tsx
│       │   ├── OperationTester.tsx
│       │   ├── Snapshots.tsx
│       │   ├── Governance.tsx
│       │   ├── AuditLog.tsx
│       │   └── Settings.tsx
│       └── components/
└── tests/
    ├── test_hmac_auth.py
    ├── test_api_map.py
    ├── test_safety.py
    ├── test_daftra_client_mock.py
    └── test_mcp_tools.py

التقنيات المطلوبة:
- Python 3.11+
- FastAPI للواجهة الخلفية والـ GUI API
- MCP Python SDK لتسجيل أدوات MCP
- httpx لتنفيذ طلبات Daftra
- pydantic / pydantic-settings للإعدادات
- PyYAML لقراءة API Map
- pytest للاختبارات
- React + Vite + TypeScript للواجهة الرسومية
- لا تستخدم مفاتيح حقيقية في الكود
- لا تطبع أسرار في logs
- لا تعمل اتصال حي مع Daftra إلا إذا كانت المتغيرات موجودة وتم تفعيل live mode صراحة

.env.example يجب أن يحتوي:

DAFTRA_SUBDOMAIN=alazab-co
DAFTRA_BASE_URL=https://alazab-co.daftra.com/api2
DAFTRA_V2_BASE_URL=https://alazab-co.daftra.com/v2/api/entity

DAFTRA_AUTH_MODE=apikey
DAFTRA_API_KEY=
DAFTRA_BEARER_TOKEN=

DAFTRA_CLIENT_ID=1
DAFTRA_CLIENT_SECRET=
DAFTRA_USERNAME=
DAFTRA_PASSWORD=
DAFTRA_REFRESH_TOKEN=

ALAZAB_MCP_AUTH_MODE=hmac
ALAZAB_MCP_KEY_ID=alazab-main
ALAZAB_MCP_PRIVATE_KEY=

ALAZAB_MCP_READ_ENABLED=true
ALAZAB_MCP_WRITE_ENABLED=false
ALAZAB_MCP_DELETE_ENABLED=false
ALAZAB_MCP_AUDIT_ENABLED=true

ALAZAB_MCP_LIVE_MODE=false
ALAZAB_MCP_DEFAULT_LIMIT=100
ALAZAB_MCP_MAX_LIMIT=200

GUI_HOST=127.0.0.1
GUI_PORT=8787

MCP_TRANSPORT=stdio
MCP_HTTP_HOST=127.0.0.1
MCP_HTTP_PORT=8788

قواعد الأمان:
1. الـ MCP محمي بمفتاح خاص داخلي للعزب، وليس مفتاح دفترة.
2. استخدم HMAC headers:
   X-Alazab-MCP-Key-Id
   X-Alazab-MCP-Timestamp
   X-Alazab-MCP-Nonce
   X-Alazab-MCP-Signature

3. التوقيع:
   HMAC_SHA256(
     ALAZAB_MCP_PRIVATE_KEY,
     timestamp + "\n" + nonce + "\n" + sha256(body)
   )

4. ارفض أي request:
   - بدون signature
   - timestamp قديم
   - nonce مكرر
   - key_id غير مطابق
   - signature غير صحيح

5. لا تسجل:
   Authorization
   apikey
   DAFTRA_API_KEY
   DAFTRA_BEARER_TOKEN
   ALAZAB_MCP_PRIVATE_KEY
   X-Alazab-MCP-Signature

6. write disabled افتراضيًا.
7. delete disabled افتراضيًا.
8. أي write يحتاج:
   confirm=true
   idempotency_key
   write enabled env
   audit log
9. delete لا يعمل إلا إذا:
   ALAZAB_MCP_DELETE_ENABLED=true
   confirm=true
   idempotency_key
   explicit operation allowlist

config/governance_policy.yaml:
أنشئ سياسة واضحة تشمل:
- default_mode: read_only
- writes disabled by default
- deletes disabled by default
- pagination default 100 max 200
- redact sensitive headers/env
- require confirmation for write
- require idempotency_key for write
- block unknown operation_id
- block raw URL pass-through unless explicitly allowed
- block destructive operations

config/daftra_api_map.yaml:
استخرج API Map مبدئية من الملفات المتاحة.
لو يوجد OpenAPI spec استخدمه كمصدر أول.
لو لا يوجد OpenAPI spec استخدم Default module.md كمصدر.
لا تخترع endpoints غير موجودة.
لو schema ناقص اكتب needs_manual_validation=true.

يجب أن تحتوي API Map على الأقل العمليات التالية:

Read / Snapshot:
- daftra.site.info
- daftra.clients.list
- daftra.clients.get
- daftra.suppliers.list
- daftra.suppliers.get
- daftra.products.list
- daftra.products.get
- daftra.invoices.list
- daftra.invoices.get
- daftra.invoice_payments.list
- daftra.client_payments.list
- daftra.expenses.list
- daftra.purchase_invoices.list
- daftra.stores.list
- daftra.treasuries.list
- daftra.staff.list
- daftra.general_listing.get
- daftra.branches.list
- daftra.cost_centers.list
- daftra.departments.list
- daftra.assets.list إن وجدت في v2

Write / Correction:
- daftra.clients.create
- daftra.clients.update
- daftra.suppliers.create
- daftra.suppliers.update
- daftra.products.create
- daftra.products.update
- daftra.invoices.create
- daftra.invoices.update
- daftra.expenses.create
- daftra.expenses.update

Dangerous / Disabled:
- daftra.clients.delete
- daftra.suppliers.delete
- daftra.products.delete
- daftra.invoices.delete
- أي delete آخر

صيغة operation داخل API Map:

operations:
  daftra.clients.list:
    title: List Clients
    version: v1
    method: GET
    path: /clients{format}
    default_format: .json
    category: clients
    access: read
    risk: low
    params:
      page: integer
      limit: integer
    default_params:
      limit: 100
    governance_use: snapshot_clients
    needs_manual_validation: false

  daftra.invoices.list:
    title: List Invoices
    version: v1
    method: GET
    path: /invoices{format}
    default_format: .json
    category: invoices
    access: read
    risk: medium
    params:
      page: integer
      limit: integer
      recursive: integer
      client_id: integer
      payment_status: integer
      date_from: string
      date_to: string
      created_from: string
      created_to: string
      einvoice_status: integer
    default_params:
      limit: 100
      recursive: 1
    governance_use: snapshot_invoices_full
    notes:
      - recursive=1 is required for line items, payments, taxes, documents, and custom fields.

  daftra.clients.create:
    title: Create Client
    version: v1
    method: POST
    path: /clients{format}
    default_format: .json
    category: clients
    access: write
    risk: high
    body_root: Client
    requires_confirmation: true
    requires_idempotency_key: true
    governance_use: create_missing_client
    needs_manual_validation: true

MCP tools المطلوبة:
1. daftra_map_list_operations
   input:
     category optional
     access optional read/write/delete
   output:
     list of operations

2. daftra_map_describe_operation
   input:
     operation_id
   output:
     full operation metadata

3. daftra_call_operation
   input:
     operation_id
     params
     body
     confirm
     idempotency_key
   rules:
     - read executes if read enabled
     - write requires write enabled + confirm=true + idempotency_key
     - delete blocked by default

4. daftra_snapshot_site
5. daftra_snapshot_clients
6. daftra_snapshot_suppliers
7. daftra_snapshot_products
8. daftra_snapshot_invoices
9. daftra_snapshot_expenses
10. daftra_snapshot_purchase_invoices
11. daftra_snapshot_stores
12. daftra_snapshot_treasuries
13. daftra_general_listing

Snapshot behavior:
- يستخدم pagination آمن.
- default limit=100.
- max limit=200.
- يحفظ النتائج في:
  data/snapshots/YYYY-MM-DD/<entity>.json
- يحفظ metadata:
  entity
  started_at
  finished_at
  total_pages
  total_records
  source_base_url
  auth_mode
  operation_id
- لا يحفظ secrets.

واجهة GUI المطلوبة:
أنشئ Dashboard رسومي يعمل محليًا على:

http://127.0.0.1:8787

الصفحات المطلوبة:

1. Dashboard
   - حالة MCP
   - حالة GUI
   - read/write/delete enabled
   - live mode enabled/disabled
   - عدد operations في API Map
   - آخر snapshot
   - آخر audit events

2. Connection
   - عرض subdomain
   - عرض base URLs
   - اختيار auth mode
   - حالة وجود DAFTRA_API_KEY بدون عرضه
   - حالة وجود DAFTRA_BEARER_TOKEN بدون عرضه
   - زر Test Connection يستخدم site_info فقط
   - لا تعرض المفاتيح

3. API Map
   - جدول operations
   - فلترة بالـ category
   - فلترة read/write/delete
   - عرض risk
   - عرض needs_manual_validation
   - زر describe operation

4. Operation Tester
   - اختيار operation_id
   - إدخال params
   - إدخال body JSON
   - read فقط يعمل مباشرة إذا live mode مفعل
   - write يعرض blocked إلا إذا write enabled وconfirm
   - delete blocked افتراضيًا
   - عرض response مع redaction

5. Snapshots
   - أزرار:
     site
     clients
     suppliers
     products
     invoices
     expenses
     purchase_invoices
     stores
     treasuries
   - عرض progress
   - عرض مكان ملف snapshot
   - عرض total records
   - لا تنفذ live snapshot إلا إذا ALAZAB_MCP_LIVE_MODE=true

6. Governance
   - عرض policy
   - read enabled
   - write enabled
   - delete enabled
   - max limit
   - confirmation required
   - idempotency required
   - لا تعدل env من الواجهة في هذه المرحلة، فقط read-only display

7. Audit Log
   - جدول آخر العمليات
   - timestamp
   - operation_id
   - access
   - risk
   - status
   - duration
   - redacted headers
   - لا تعرض secrets

8. Settings
   - عرض paths
   - docs status
   - API map file status
   - env status
   - test status

Backend GUI API:
- GET /api/health
- GET /api/settings/status
- GET /api/map/operations
- GET /api/map/operations/{operation_id}
- POST /api/operation/test
- POST /api/snapshot/{entity}
- GET /api/audit/recent
- GET /api/governance/policy

لا تسمح بتعديل secrets من الواجهة الآن.
لا تسمح بحفظ مفاتيح من الواجهة الآن.
الإعدادات الحساسة تضاف يدويًا في .env فقط.

daftra_client.py:
- استخدم httpx.
- ابنِ URL من operation map.
- ادعم {format} = .json.
- ادعم base_url حسب version.
- أضف headers حسب auth mode:
  apikey
  Authorization: Bearer
- timeout واضح.
- retry محافظ للـ 429 و 5xx.
- لا retry للـ POST/PUT إلا إذا idempotency_key موجود.
- لا raw URL خارج base_url.
- لا تقبل operation غير موجود في map.

auth.py / hmac_auth.py:
- تحقق من HMAC.
- طبّق replay protection عبر nonce memory store.
- اجعل التحقق قابلًا للاختبار.
- GUI local يمكن أن يعمل بدون HMAC إذا host=127.0.0.1، لكن MCP external endpoints يجب أن تتطلب HMAC.
- وثّق هذا القرار في README.

audit.py:
- سجل كل operation في JSONL:
  logs/audit/audit-YYYY-MM-DD.jsonl
- redaction كامل للأسرار.
- سجل:
  timestamp
  caller
  operation_id
  method
  path_template
  access
  risk
  status
  http_status
  duration_ms
  idempotency_key hash only
  error summary

اختبارات مطلوبة:
- test_hmac_auth_valid_signature
- test_hmac_auth_invalid_signature
- test_hmac_auth_old_timestamp
- test_hmac_auth_replayed_nonce
- test_api_map_loads
- test_unknown_operation_blocked
- test_write_blocked_by_default
- test_delete_blocked_by_default
- test_write_requires_confirm
- test_write_requires_idempotency_key
- test_redaction_removes_secrets
- test_daftra_client_builds_v1_url
- test_daftra_client_builds_v2_url
- test_snapshot_uses_pagination_mock

README.md يجب أن يشرح:
1. هدف المشروع.
2. لماذا MCP وليس API script.
3. طريقة تثبيت المتطلبات.
4. طريقة إعداد .env.
5. طريقة تشغيل GUI.
6. طريقة تشغيل MCP.
7. طريقة إضافة OpenAPI/Markdown docs.
8. طريقة توليد/تحديث API Map.
9. سياسة read/write/delete.
10. طريقة حماية HMAC.
11. طريقة audit logs.
12. خطوات التشغيل الآمن:
    - map validation
    - GUI health
    - test connection
    - site_info read-only
    - clients snapshot
    - products snapshot
    - invoices snapshot
    - enable write لاحقًا بموافقة

أوامر تشغيل مقترحة في README:

cd /mnt/mcp/daftra-mcp
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
cp .env.example .env
python -m daftra_mcp.gui_server

ثم:
http://127.0.0.1:8787

ممنوع:
- لا تضع مفاتيح حقيقية.
- لا تعمل git push.
- لا تعمل delete.
- لا تعمل write live.
- لا تعمل اتصال حي إذا ALAZAB_MCP_LIVE_MODE=false.
- لا تخترع schema غير موجودة.
- لا تخزن أسرار في audit.
- لا تجعل GUI تعرض secrets.

بعد الإنشاء:
نفذ:
- pytest
- python -m daftra_mcp.api_map --validate إن أنشأت CLI validation
- اعرض tree للمشروع
- اعرض تقرير:
  /mnt/mcp/daftra-mcp/data/reports/initial-build-report.md

مخرجات التقرير:
- ما تم إنشاؤه
- الملفات الأساسية
- عدد operations في API Map
- ما تم استخراجه من docs
- ما يحتاج manual validation
- حالة الاختبارات
- طريقة التشغيل
- الخطوة التالية قبل إضافة مفاتيح دفترة

ابدأ الآن بإنشاء المشروع داخل /mnt/mcp/daftra-mcp/ فقط.
لا تعدل أي مسار خارج /mnt/mcp/daftra-mcp/.
