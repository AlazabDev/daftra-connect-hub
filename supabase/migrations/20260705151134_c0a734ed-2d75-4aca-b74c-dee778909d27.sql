
ALTER TABLE public.ai_conversations
  ADD COLUMN IF NOT EXISTS system_prompt text;

ALTER TABLE public.ai_messages
  ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS metadata jsonb;
