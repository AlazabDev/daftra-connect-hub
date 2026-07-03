
CREATE TABLE public.foundry_agents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  capabilities jsonb NOT NULL DEFAULT '[]'::jsonb,
  owner_user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  token_hash text NOT NULL,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz
);
GRANT SELECT ON public.foundry_agents TO authenticated;
GRANT ALL  ON public.foundry_agents TO service_role;
ALTER TABLE public.foundry_agents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "owners read own agents" ON public.foundry_agents
  FOR SELECT TO authenticated USING (owner_user_id = auth.uid());

CREATE TABLE public.foundry_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id uuid NOT NULL DEFAULT gen_random_uuid(),
  from_agent text NOT NULL,
  to_agent   text NOT NULL,
  role text NOT NULL DEFAULT 'message',
  content jsonb NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  delivered_at timestamptz,
  acked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX foundry_messages_to_idx ON public.foundry_messages(to_agent, acked_at);
CREATE INDEX foundry_messages_thread_idx ON public.foundry_messages(thread_id, created_at);
GRANT SELECT ON public.foundry_messages TO authenticated;
GRANT ALL  ON public.foundry_messages TO service_role;
ALTER TABLE public.foundry_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "owners read messages of own agents" ON public.foundry_messages
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.foundry_agents a
      WHERE (a.agent_id = foundry_messages.from_agent OR a.agent_id = foundry_messages.to_agent)
        AND a.owner_user_id = auth.uid())
  );
