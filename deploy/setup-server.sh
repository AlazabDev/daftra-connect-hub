#!/usr/bin/env bash
# ------------------------------------------------------------------
# setup-server.sh
# تجهيز سيرفر Ubuntu (22.04/24.04) لاستضافة تطبيق TanStack Start
# على النطاق: console.alazab.cloud
#
# يقوم بـ:
#   1) تحديث النظام + الأدوات الأساسية
#   2) تثبيت Node.js 20 LTS + Bun + PM2
#   3) تثبيت Nginx + Certbot (سيتولى certbot إضافة كتلة SSL تلقائيًا)
#   4) إعداد مستخدم النشر + مجلد التطبيق
#   5) فتح منافذ الجدار الناري (80/443/22)
#
# طريقة التشغيل:
#   sudo bash deploy/setup-server.sh
# ------------------------------------------------------------------
set -euo pipefail

DOMAIN="console.alazab.cloud"
APP_USER="${APP_USER:-deploy}"
APP_DIR="${APP_DIR:-/var/www/console-alazab}"
NODE_MAJOR="20"

log() { echo -e "\e[1;32m[setup]\e[0m $*"; }
err() { echo -e "\e[1;31m[error]\e[0m $*" >&2; }

if [[ $EUID -ne 0 ]]; then
  err "يجب تشغيل هذا السكربت بصلاحيات root (استخدم sudo)."
  exit 1
fi

log "1/6 تحديث الحزم الأساسية…"
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get upgrade -y
apt-get install -y ca-certificates curl gnupg lsb-release ufw git build-essential unzip

log "2/6 تثبيت Node.js ${NODE_MAJOR}.x + PM2…"
if ! command -v node >/dev/null || [[ "$(node -v | cut -c2- | cut -d. -f1)" -lt "${NODE_MAJOR}" ]]; then
  curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash -
  apt-get install -y nodejs
fi
npm install -g pm2@latest

log "3/6 تثبيت Bun (لأوامر البناء المحلية)…"
if ! command -v bun >/dev/null; then
  curl -fsSL https://bun.sh/install | bash
  ln -sf "$HOME/.bun/bin/bun" /usr/local/bin/bun || true
fi

log "4/6 تثبيت Nginx + Certbot…"
apt-get install -y nginx certbot python3-certbot-nginx
systemctl enable nginx
systemctl start nginx

log "5/6 إنشاء المستخدم ${APP_USER} ومجلد التطبيق ${APP_DIR}…"
if ! id "${APP_USER}" &>/dev/null; then
  adduser --disabled-password --gecos "" "${APP_USER}"
  usermod -aG sudo "${APP_USER}"
fi
mkdir -p "${APP_DIR}"
chown -R "${APP_USER}:${APP_USER}" "${APP_DIR}"

log "6/6 ضبط الجدار الناري UFW…"
ufw allow OpenSSH || true
ufw allow 'Nginx Full' || true
yes | ufw enable || true

# نسخ ملف تكوين Nginx (بدون SSL — سيضيفه certbot تلقائيًا)
NGINX_CONF_SRC="$(dirname "$0")/nginx/${DOMAIN}.conf"
NGINX_CONF_DST="/etc/nginx/sites-available/${DOMAIN}.conf"
if [[ -f "${NGINX_CONF_SRC}" ]]; then
  log "نسخ إعداد Nginx إلى ${NGINX_CONF_DST}"
  cp "${NGINX_CONF_SRC}" "${NGINX_CONF_DST}"
  ln -sf "${NGINX_CONF_DST}" "/etc/nginx/sites-enabled/${DOMAIN}.conf"
  # تعطيل الافتراضي إن وُجد
  rm -f /etc/nginx/sites-enabled/default || true
  nginx -t && systemctl reload nginx
else
  err "ملف ${NGINX_CONF_SRC} غير موجود — أضفه ثم أعد التشغيل."
fi

cat <<EOF

────────────────────────────────────────────────
✅ تم تجهيز السيرفر بنجاح.

الخطوات التالية:
  1) وجّه DNS للنطاق ${DOMAIN} إلى IP هذا السيرفر (A record).
  2) نفّذ إصدار شهادة SSL عبر Certbot (سيضيف كتلة 443 تلقائيًا):

       sudo certbot --nginx -d ${DOMAIN} --redirect --agree-tos -m admin@alazab.cloud --no-eff-email

  3) انشر التطبيق باستخدام:

       sudo -iu ${APP_USER}
       cd ${APP_DIR}
       bash /path/to/deploy/deploy.sh

────────────────────────────────────────────────
EOF
