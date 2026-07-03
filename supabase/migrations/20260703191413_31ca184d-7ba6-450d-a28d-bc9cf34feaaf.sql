
CREATE TABLE public.daftra_audit_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  tool text not null,
  method text,
  path text,
  version text,
  status int,
  duration_ms int,
  actor text,
  ok boolean not null default true,
  error text,
  meta jsonb
);
GRANT SELECT, INSERT ON public.daftra_audit_log TO authenticated, anon;
GRANT ALL ON public.daftra_audit_log TO service_role;
ALTER TABLE public.daftra_audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read audit" ON public.daftra_audit_log FOR SELECT USING (true);
CREATE POLICY "insert audit" ON public.daftra_audit_log FOR INSERT WITH CHECK (true);
CREATE INDEX idx_daftra_audit_created ON public.daftra_audit_log(created_at DESC);
