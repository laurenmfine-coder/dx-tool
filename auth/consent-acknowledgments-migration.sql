-- ReasonDx — Consent Acknowledgments Table
-- Records when users acknowledge the data practices notice.
-- Supports two-tier identification: anonymous session-based acknowledgment,
-- then promotion to identified (email + user_id) at account creation or
-- email capture.

CREATE TABLE IF NOT EXISTS public.consent_acknowledgments (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Identity: at minimum a session_id is always present. email and user_id
  -- are populated when the anonymous session is promoted (e.g., account
  -- registration, email capture). Promotion happens via a new row OR an
  -- update to the original row — both patterns are supported.
  session_id      TEXT NOT NULL,
  email           TEXT,
  user_id         UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  -- What was acknowledged
  policy_version  TEXT NOT NULL,
  acknowledged_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Acknowledgment context
  source          TEXT,            -- 'first_visit_modal' | 'registration' | 'email_capture'
  page            TEXT,
  user_agent      TEXT,

  -- Metadata
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_consent_ack_session
  ON public.consent_acknowledgments(session_id);

CREATE INDEX IF NOT EXISTS idx_consent_ack_email
  ON public.consent_acknowledgments(email)
  WHERE email IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_consent_ack_user
  ON public.consent_acknowledgments(user_id)
  WHERE user_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_consent_ack_version
  ON public.consent_acknowledgments(policy_version);

-- RLS: anonymous inserts allowed; reads restricted to user's own records.
ALTER TABLE public.consent_acknowledgments ENABLE ROW LEVEL SECURITY;

-- Anyone (including anon) can insert an acknowledgment
DROP POLICY IF EXISTS "consent_ack_insert" ON public.consent_acknowledgments;
CREATE POLICY "consent_ack_insert"
  ON public.consent_acknowledgments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Authenticated users can read their own acknowledgments (for account/settings UI)
DROP POLICY IF EXISTS "consent_ack_select_own" ON public.consent_acknowledgments;
CREATE POLICY "consent_ack_select_own"
  ON public.consent_acknowledgments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- No update or delete from client; service role only (via Supabase dashboard).

-- Helpful view: latest acknowledgment per user
CREATE OR REPLACE VIEW public.consent_acknowledgments_latest AS
SELECT DISTINCT ON (COALESCE(user_id::TEXT, email, session_id))
  id,
  session_id,
  email,
  user_id,
  policy_version,
  acknowledged_at,
  source,
  page
FROM public.consent_acknowledgments
ORDER BY COALESCE(user_id::TEXT, email, session_id), acknowledged_at DESC;
