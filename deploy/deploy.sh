#!/usr/bin/env bash
# ------------------------------------------------------------------
# deploy.sh — نشر التطبيق للإنتاج على console.alazab.cloud
#
# يفترض أن السيرفر تم تجهيزه مسبقًا عبر setup-server.sh
# ويقوم بـ:
#   1) سحب أحدث نسخة من الكود (git pull)
#   2) تثبيت الاعتماديات
#   3) البناء (bun run build) — يستخدم preset=node-server
#   4) تشغيل/إعادة تشغيل التطبيق عبر PM2 على المنفذ 8080
#   5) إعادة تحميل Nginx
#
# طريقة التشغيل:
#   cd /var/www/console-alazab
#   bash deploy/deploy.sh
# ------------------------------------------------------------------
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/console-alazab}"
REPO_URL="${REPO_URL:-}"           # مثال: git@github.com:org/repo.git
BRANCH="${BRANCH:-main}"
APP_NAME="${APP_NAME:-console-alazab}"
PORT="${PORT:-8080}"
NODE_ENV="production"

log()  { echo -e "\e[1;32m[deploy]\e[0m $*"; }
warn() { echo -e "\e[1;33m[warn]\e[0m  $*"; }
err()  { echo -e "\e[1;31m[error]\e[0m $*" >&2; }

mkdir -p "${APP_DIR}"
cd "${APP_DIR}"

# ------------------------------------------------------------------
# 1) الحصول على الكود
# ------------------------------------------------------------------
if [[ ! -d "${APP_DIR}/.git" ]]; then
  if [[ -z "${REPO_URL}" ]]; then
    err "المجلد ${APP_DIR} فارغ ولم يتم تحديد REPO_URL."
    err "شغّل: REPO_URL=git@github.com:you/repo.git bash deploy.sh"
    exit 1
  fi
  log "استنساخ المستودع لأول مرة…"
  git clone --branch "${BRANCH}" "${REPO_URL}" .
else
  log "تحديث الكود من الفرع ${BRANCH}…"
  git fetch --all --prune
  git checkout "${BRANCH}"
  git reset --hard "origin/${BRANCH}"
fi

# ------------------------------------------------------------------
# 2) الاعتماديات
# ------------------------------------------------------------------
if ! command -v bun >/dev/null; then
  err "bun غير مثبت — شغّل setup-server.sh أولاً."
  exit 1
fi

log "تثبيت الاعتماديات (bun install)…"
bun install --frozen-lockfile || bun install

# ------------------------------------------------------------------
# 3) البناء
# ------------------------------------------------------------------
log "بناء الإنتاج (nitro preset = node-server)…"
export NITRO_PRESET="node-server"
export NODE_ENV="production"
bun run build

if [[ ! -f "${APP_DIR}/.output/server/index.mjs" ]]; then
  err "لم يُنتج البناء ملف .output/server/index.mjs — تحقق من nitro preset."
  exit 1
fi

# ------------------------------------------------------------------
# 4) PM2
# ------------------------------------------------------------------
if ! command -v pm2 >/dev/null; then
  err "pm2 غير مثبت — شغّل setup-server.sh أولاً."
  exit 1
fi

log "تشغيل/إعادة تشغيل التطبيق عبر PM2 على المنفذ ${PORT}…"
if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
  pm2 reload "${APP_NAME}" --update-env
else
  PORT="${PORT}" NODE_ENV="${NODE_ENV}" \
    pm2 start ".output/server/index.mjs" \
      --name "${APP_NAME}" \
      --time \
      --update-env
fi
pm2 save

# ------------------------------------------------------------------
# 5) Nginx
# ------------------------------------------------------------------
if command -v nginx >/dev/null; then
  log "التحقق من إعدادات Nginx وإعادة التحميل…"
  if sudo -n nginx -t 2>/dev/null; then
    sudo -n systemctl reload nginx
  else
    warn "تخطّي إعادة تحميل Nginx (لا توجد صلاحيات sudo بدون كلمة سر)."
  fi
fi

log "✅ اكتمل النشر — التطبيق يعمل على http://127.0.0.1:${PORT}"
log "افتح: https://console.alazab.cloud"
