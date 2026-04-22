-- ReasonDx — Case Shares Table
-- Tracks when users share cases or referral links, and through which channel.
-- Purpose:
--   (1) Research/funnel analytics — which cases spread, which channels convert.
--   (2) Understanding organic growth patterns before building cohort features.
-- Privacy: we do NOT store recipient emails here (the email itself goes
-- through the email worker). Only the sharing session, what was shared,
-- and via which channel.

CREATE TABLE IF NOT EXISTS public.case_shares (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Who shared (anonymous session or authenticated user)
  session_id      TEXT,
  user_id         UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  -- What and how
  case_slug       TEXT,                    -- NULL if it was a general referral share
  share_channel   TEXT NOT NULL,           -- 'copy_link' | 'email' | 'referral_copy' | 'referral_email'
  share_context   TEXT,                    -- 'post_case' | 'dashboard' | 'other'

  -- Metadata
  page            TEXT,
  user_agent      TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_case_shares_session
  ON public.case_shares(session_id)
  WHERE session_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_case_shares_user
  ON public.case_shares(user_id)
  WHERE user_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_case_shares_case
  ON public.case_shares(case_slug)
  WHERE case_slug IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_case_shares_channel
  ON public.case_shares(share_channel);

CREATE INDEX IF NOT EXISTS idx_case_shares_created
  ON public.case_shares(created_at DESC);

-- RLS: anonymous inserts allowed; reads restricted.
ALTER TABLE public.case_shares ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "case_shares_insert" ON public.case_shares;
CREATE POLICY "case_shares_insert"
  ON public.case_shares
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "case_shares_select_own" ON public.case_shares;
CREATE POLICY "case_shares_select_own"
  ON public.case_shares
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Helpful aggregate view for a "viral" dashboard: which cases spread most?
CREATE OR REPLACE VIEW public.case_shares_by_case AS
SELECT
  case_slug,
  COUNT(*) AS total_shares,
  COUNT(DISTINCT session_id) AS unique_sharers,
  COUNT(*) FILTER (WHERE share_channel = 'copy_link') AS copy_link_shares,
  COUNT(*) FILTER (WHERE share_channel = 'email') AS email_shares,
  MAX(created_at) AS last_shared_at
FROM public.case_shares
WHERE case_slug IS NOT NULL
GROUP BY case_slug
ORDER BY total_shares DESC;

-- Daily share volume
CREATE OR REPLACE VIEW public.case_shares_daily AS
SELECT
  DATE(created_at) AS share_date,
  COUNT(*) AS total_shares,
  COUNT(DISTINCT session_id) AS unique_sharers,
  COUNT(DISTINCT case_slug) AS unique_cases
FROM public.case_shares
GROUP BY DATE(created_at)
ORDER BY share_date DESC;
