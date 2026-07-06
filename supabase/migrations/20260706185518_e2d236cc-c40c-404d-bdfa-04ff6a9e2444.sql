
-- daftra_audit_log: admin read only, no writes from clients
CREATE POLICY "Admins can view daftra audit log"
  ON public.daftra_audit_log FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- foundry_agents: owner-scoped writes
CREATE POLICY "Owners can insert their foundry agents"
  ON public.foundry_agents FOR INSERT TO authenticated
  WITH CHECK (owner_user_id = auth.uid());

CREATE POLICY "Owners can update their foundry agents"
  ON public.foundry_agents FOR UPDATE TO authenticated
  USING (owner_user_id = auth.uid())
  WITH CHECK (owner_user_id = auth.uid());

CREATE POLICY "Owners can delete their foundry agents"
  ON public.foundry_agents FOR DELETE TO authenticated
  USING (owner_user_id = auth.uid());

-- foundry_messages: writes restricted to participants (owner of from or to agent)
CREATE POLICY "Participants can insert foundry messages"
  ON public.foundry_messages FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.foundry_agents a
      WHERE a.agent_id = foundry_messages.from_agent
        AND a.owner_user_id = auth.uid()
    )
  );

CREATE POLICY "Participants can update foundry messages"
  ON public.foundry_messages FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.foundry_agents a
      WHERE a.agent_id IN (foundry_messages.from_agent, foundry_messages.to_agent)
        AND a.owner_user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.foundry_agents a
      WHERE a.agent_id IN (foundry_messages.from_agent, foundry_messages.to_agent)
        AND a.owner_user_id = auth.uid()
    )
  );

CREATE POLICY "Participants can delete foundry messages"
  ON public.foundry_messages FOR DELETE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.foundry_agents a
      WHERE a.agent_id IN (foundry_messages.from_agent, foundry_messages.to_agent)
        AND a.owner_user_id = auth.uid()
    )
  );

-- rate_limit_counters: admin read only, no client writes
CREATE POLICY "Admins can view rate limit counters"
  ON public.rate_limit_counters FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
