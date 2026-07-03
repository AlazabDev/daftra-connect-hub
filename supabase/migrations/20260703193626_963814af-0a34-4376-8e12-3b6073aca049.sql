
-- 1) daftra_audit_log: remove public-read policy (server uses service_role and bypasses RLS)
DROP POLICY IF EXISTS "read audit" ON public.daftra_audit_log;
-- No SELECT policy => no one can SELECT via the Data API. Service role bypasses RLS.

-- 2) comments: drop broad public SELECT that exposes email; add owner-only SELECT; expose safe view
DROP POLICY IF EXISTS "Comments: anyone can view approved" ON public.comments;

CREATE POLICY "Comments: owner can view own"
  ON public.comments FOR SELECT
  USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);

CREATE OR REPLACE VIEW public.comments_public
WITH (security_invoker = on) AS
SELECT id, image_id, name, content, is_approved, created_at
FROM public.comments
WHERE is_approved = true;

GRANT SELECT ON public.comments_public TO anon, authenticated;

-- The view uses security_invoker, so RLS is checked as the caller.
-- Add a narrow SELECT policy on the base table allowing anon/authenticated to see
-- only approved rows through the view (email column is not selectable via the view).
CREATE POLICY "Comments: public can view approved (via view)"
  ON public.comments FOR SELECT
  USING (is_approved = true);
-- Note: this still allows direct SELECT of approved rows with email exposed to Data API.
-- To fully hide email we remove the permissive policy above and rely on view only:
DROP POLICY "Comments: public can view approved (via view)" ON public.comments;

-- Re-add as owner-only already covered; the view will only work for owners unless we
-- allow read at row-level. Add row-level allow but revoke column-level SELECT on email.
CREATE POLICY "Comments: approved rows readable"
  ON public.comments FOR SELECT
  USING (is_approved = true);

-- Column-level protection: revoke SELECT on email from anon/authenticated
REVOKE SELECT ON public.comments FROM anon, authenticated;
GRANT SELECT (id, image_id, name, content, is_approved, created_at, user_id)
  ON public.comments TO anon, authenticated;
GRANT INSERT ON public.comments TO anon, authenticated;
GRANT UPDATE, DELETE ON public.comments TO authenticated;
GRANT ALL ON public.comments TO service_role;

-- 3) storage.objects: add RLS policies for azgallery bucket
-- Public read (bucket is public), authenticated users can upload, only owner can modify/delete.
DO $$ BEGIN
  EXECUTE 'ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY';
EXCEPTION WHEN others THEN NULL; END $$;

DROP POLICY IF EXISTS "azgallery public read" ON storage.objects;
CREATE POLICY "azgallery public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'azgallery');

DROP POLICY IF EXISTS "azgallery authenticated upload" ON storage.objects;
CREATE POLICY "azgallery authenticated upload"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'azgallery' AND owner = auth.uid());

DROP POLICY IF EXISTS "azgallery owner update" ON storage.objects;
CREATE POLICY "azgallery owner update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'azgallery' AND owner = auth.uid())
  WITH CHECK (bucket_id = 'azgallery' AND owner = auth.uid());

DROP POLICY IF EXISTS "azgallery owner delete" ON storage.objects;
CREATE POLICY "azgallery owner delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'azgallery' AND owner = auth.uid());
