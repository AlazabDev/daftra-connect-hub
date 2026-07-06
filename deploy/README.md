# نشر console.alazab.cloud على Ubuntu + Nginx

مجلد يحتوي على سكربتات نشر التطبيق على سيرفر Ubuntu مع Nginx + Certbot + PM2.

## الملفات

| الملف | الوظيفة |
|-------|---------|
| `setup-server.sh` | تجهيز سيرفر Ubuntu لأول مرة (Node/Bun/PM2/Nginx/Certbot/UFW) |
| `deploy.sh` | نشر/تحديث التطبيق (سحب، بناء، تشغيل PM2، إعادة تحميل Nginx) |
| `nginx/console.alazab.cloud.conf` | إعداد Nginx **بدون SSL** — Certbot يضيف كتلة 443 تلقائيًا |

## خطوات التشغيل

### 1) على السيرفر (أول مرة)

```bash
# سجّل دخول كـ root أو استخدم sudo
git clone <repo-url> /tmp/app-src
sudo bash /tmp/app-src/deploy/setup-server.sh
```

### 2) توجيه DNS

أضف `A record` للنطاق `console.alazab.cloud` يشير إلى IP السيرفر.

### 3) إصدار شهادة SSL (Certbot يعدّل Nginx تلقائيًا)

```bash
sudo certbot --nginx -d console.alazab.cloud \
  --redirect --agree-tos -m admin@alazab.cloud --no-eff-email
```

> ⚠️ لا تُضِف كتلة `listen 443 ssl` يدويًا في ملف Nginx —
> Certbot يقوم بذلك تلقائيًا ويحدّث المسارات.

### 4) النشر / التحديثات

```bash
sudo -iu deploy
cd /var/www/console-alazab
REPO_URL=git@github.com:your-org/your-repo.git BRANCH=main bash deploy/deploy.sh
```

للنشرات اللاحقة يكفي:

```bash
cd /var/www/console-alazab && bash deploy/deploy.sh
```

## متغيرات البيئة

ضع ملف `.env` داخل `/var/www/console-alazab/.env` قبل أول نشر — يحتوي كل الأسرار
(Supabase, Ollama, Azure, Daftra, …). PM2 يقرأه تلقائيًا عبر `--update-env`.

## متطلبات nitro

البناء يستخدم `NITRO_PRESET=node-server` (بدلًا من `cloudflare` الافتراضي) لينتج
`.output/server/index.mjs` قابلًا للتشغيل عبر Node/PM2. يتم ضبطه داخل `deploy.sh`
تلقائيًا — لا يلزم تعديل `vite.config.ts`.

## المنافذ

- `80` / `443` → Nginx (عام)
- `8080` → تطبيق Node عبر PM2 (localhost فقط)

## التشخيص

```bash
pm2 status
pm2 logs console-alazab
sudo tail -f /var/log/nginx/console.alazab.cloud.error.log
sudo nginx -t
```
