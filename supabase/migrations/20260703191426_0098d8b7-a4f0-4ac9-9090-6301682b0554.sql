
DROP POLICY IF EXISTS "insert audit" ON public.daftra_audit_log;
REVOKE INSERT ON public.daftra_audit_log FROM authenticated, anon;
