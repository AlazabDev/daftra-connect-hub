
-- =============== Roles (has_role) ===============
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin','moderator','user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "read own roles" ON public.user_roles;
CREATE POLICY "read own roles" ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

-- =============== Drop-and-recreate misaligned tables ===============
DROP TABLE IF EXISTS public.ai_usage_logs CASCADE;
DROP TABLE IF EXISTS public.rate_limit_counters CASCADE;
DROP TABLE IF EXISTS public.ai_agents CASCADE;
DROP TABLE IF EXISTS public.apim_policies CASCADE;
DROP TABLE IF EXISTS public.storage_providers CASCADE;
DROP TABLE IF EXISTS public.ai_endpoints CASCADE;

-- =============== ai_endpoints ===============
CREATE TABLE public.ai_endpoints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  provider text NOT NULL DEFAULT 'azure_openai',
  base_url text,
  deployment_name text,
  model text NOT NULL,
  api_version text,
  use_apim boolean NOT NULL DEFAULT false,
  is_default boolean NOT NULL DEFAULT false,
  enabled boolean NOT NULL DEFAULT true,
  api_key text,
  extra_headers jsonb,
  last_status text,
  last_latency_ms integer,
  last_checked_at timestamptz,
  created_by uuid REFERENCES auth.users ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_endpoints TO authenticated;
GRANT ALL ON public.ai_endpoints TO service_role;
ALTER TABLE public.ai_endpoints ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read endpoints" ON public.ai_endpoints FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin manage endpoints" ON public.ai_endpoints FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_ai_endpoints_updated BEFORE UPDATE ON public.ai_endpoints
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============== apim_policies ===============
CREATE TABLE public.apim_policies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  policy_type text NOT NULL CHECK (policy_type IN ('rate_limit','quota','content_filter','cost_cap','circuit_breaker')),
  config jsonb NOT NULL DEFAULT '{}'::jsonb,
  enabled boolean NOT NULL DEFAULT true,
  applies_to_endpoint_id uuid REFERENCES public.ai_endpoints ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.apim_policies TO authenticated;
GRANT ALL ON public.apim_policies TO service_role;
ALTER TABLE public.apim_policies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read policies" ON public.apim_policies FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin manage policies" ON public.apim_policies FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_apim_policies_updated BEFORE UPDATE ON public.apim_policies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============== ai_agents ===============
CREATE TABLE public.ai_agents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  display_name text,
  kind text NOT NULL CHECK (kind IN ('copilot','core','prod','maint','finance','custom')),
  version text,
  endpoint_id uuid REFERENCES public.ai_endpoints ON DELETE SET NULL,
  model text,
  system_prompt text,
  enabled boolean NOT NULL DEFAULT true,
  created_by uuid REFERENCES auth.users ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_agents TO authenticated;
GRANT ALL ON public.ai_agents TO service_role;
ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read agents" ON public.ai_agents FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin manage agents" ON public.ai_agents FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_ai_agents_updated BEFORE UPDATE ON public.ai_agents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============== storage_providers ===============
CREATE TABLE public.storage_providers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider text NOT NULL CHECK (provider IN ('azure_blob','aws_s3','google_drive','supabase')),
  display_name text NOT NULL,
  config jsonb NOT NULL DEFAULT '{}'::jsonb,
  enabled boolean NOT NULL DEFAULT true,
  is_default boolean NOT NULL DEFAULT false,
  created_by uuid REFERENCES auth.users ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.storage_providers TO authenticated;
GRANT ALL ON public.storage_providers TO service_role;
ALTER TABLE public.storage_providers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read storage providers" ON public.storage_providers FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin manage storage providers" ON public.storage_providers FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_storage_providers_updated BEFORE UPDATE ON public.storage_providers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =============== rate_limit_counters (server only) ===============
CREATE TABLE public.rate_limit_counters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  endpoint_id uuid,
  window_key text NOT NULL CHECK (window_key IN ('minute','hour','day')),
  window_start timestamptz NOT NULL,
  count integer NOT NULL DEFAULT 0,
  tokens integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, endpoint_id, window_key, window_start)
);
GRANT ALL ON public.rate_limit_counters TO service_role;
ALTER TABLE public.rate_limit_counters ENABLE ROW LEVEL SECURITY;
-- no policies: service_role only

-- =============== ai_usage_logs ===============
CREATE TABLE public.ai_usage_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  endpoint_id uuid REFERENCES public.ai_endpoints ON DELETE SET NULL,
  conversation_id uuid,
  model text,
  prompt_tokens integer NOT NULL DEFAULT 0,
  completion_tokens integer NOT NULL DEFAULT 0,
  total_tokens integer NOT NULL DEFAULT 0,
  total_cost_usd numeric(14,6) NOT NULL DEFAULT 0,
  latency_ms integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'success',
  error text,
  flagged boolean NOT NULL DEFAULT false,
  request_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_usage_user_created ON public.ai_usage_logs(user_id, created_at DESC);
GRANT SELECT, INSERT ON public.ai_usage_logs TO authenticated;
GRANT ALL ON public.ai_usage_logs TO service_role;
ALTER TABLE public.ai_usage_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read own usage" ON public.ai_usage_logs FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "insert own usage" ON public.ai_usage_logs FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
