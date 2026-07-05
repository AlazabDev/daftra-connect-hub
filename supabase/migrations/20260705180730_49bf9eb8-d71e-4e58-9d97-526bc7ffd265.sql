
-- 1. Convert has_role to SECURITY INVOKER (fixes definer-executable linter findings)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;

-- 2. Restrict SELECT on sensitive tables to admins only
DROP POLICY IF EXISTS "read agents" ON public.ai_agents;
CREATE POLICY "admins read agents" ON public.ai_agents
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "read endpoints" ON public.ai_endpoints;
CREATE POLICY "admins read endpoints" ON public.ai_endpoints
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "read policies" ON public.apim_policies;
CREATE POLICY "admins read policies" ON public.apim_policies
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "read storage providers" ON public.storage_providers;
CREATE POLICY "admins read storage providers" ON public.storage_providers
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 3. Hide commenter email via column-level grants
REVOKE SELECT ON public.comments FROM anon, authenticated;
GRANT SELECT (id, created_at, image_id, user_id, name, content, is_approved)
  ON public.comments TO anon, authenticated;

-- 4. Tighten the always-true INSERT policy on comments
DROP POLICY IF EXISTS "Comments: anyone can insert" ON public.comments;
CREATE POLICY "Comments: anyone can insert" ON public.comments
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    is_approved = false
    AND content IS NOT NULL
    AND length(content) BETWEEN 1 AND 5000
    AND (name IS NULL OR length(name) <= 200)
    AND (email IS NULL OR length(email) <= 320)
    AND (user_id IS NULL OR user_id = auth.uid())
  );

-- 5. Prevent listing files in the azgallery public bucket (public URLs still resolve directly)
DROP POLICY IF EXISTS "azgallery public read" ON storage.objects;
