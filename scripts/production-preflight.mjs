import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
let failed = false;

function ok(message) {
  console.log(`[ok] ${message}`);
}

function fail(message) {
  failed = true;
  console.error(`[fail] ${message}`);
}

for (const path of ['src/api', 'src/web', 'src/package.json', 'src/package-lock.json']) {
  if (existsSync(join(root, path))) fail(`legacy production path still exists: ${path}`);
  else ok(`legacy production path removed: ${path}`);
}

const migrationsDir = join(root, 'supabase', 'migrations');
const migrations = existsSync(migrationsDir) ? readdirSync(migrationsDir).filter((file) => file.endsWith('.sql')) : [];
if (migrations.length === 0) fail('no active Supabase migrations found');
else ok(`active Supabase migrations: ${migrations.length}`);

if (failed) process.exit(1);
