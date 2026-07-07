#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/console-alazab}"
BRANCH="${BRANCH:-main}"
APP_NAME="${APP_NAME:-console-alazab}"
PORT="${PORT:-8080}"

cd "${APP_DIR}"
git fetch --all --prune
git checkout "${BRANCH}"
git reset --hard "origin/${BRANCH}"

bun install --frozen-lockfile
npm run preflight
NITRO_PRESET=node-server NODE_ENV=production bun run build

test -f .output/server/index.mjs

if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
  PORT="${PORT}" NODE_ENV=production pm2 reload "${APP_NAME}" --update-env
else
  PORT="${PORT}" NODE_ENV=production pm2 start .output/server/index.mjs --name "${APP_NAME}" --time --update-env
fi
pm2 save

if sudo -n nginx -t 2>/dev/null; then
  sudo -n systemctl reload nginx
fi
