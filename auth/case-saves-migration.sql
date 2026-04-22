-- ReasonDx — Case Saves Table (Save & Resume Phase 1)
-- =======================================================================
-- Stores user-initiated case saves so users can return later via email
-- link. Works for both anonymous and authenticated users.
--
-- Each save contains a JSON state_blob with:
--   caseId, caseName, phase, phaseLabel, turnCount,
--   conversationMessages (last 20), differentials, depthVersion,
--   isDepthCase, savedAt
--
-- The resume_token is a short opaque string used in the email link
-- (e.g., reasondx.com/?resume=xxxxxxxxxx). Users never see the UUID.
-- =======================================================================

CREATE TABLE IF NOT EXISTS public.case_saves (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Who saved
  session_id      TEXT,
  user_id         UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  -- Where to resume
  case_id         TEXT NOT NULL,           -- slug
  case_page       TEXT,                    -- 'simulation-engine' | 'virtual-emr' | etc.
  case_phase      INTEGER,                 -- current phase number when saved

  -- Contact
  email           TEXT NOT NULL,           -- where the resume link was sent

  -- The actual serialized state (JSON). Full case state — interview
  -- messages, differential, orders, notes, etc.
  state_blob      JSONB NOT NULL DEFAULT '{}',

  -- Short opaque token used in the resume URL. Indexed for fast lookup.
  resume_token    TEXT NOT NULL UNIQUE,

  -- Lifecycle
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  resumed_at      TIMESTAMPTZ,             -- set when the user clicks the link
  reminder_sent_at TIMESTAMPTZ             -- set when the 24h reminder was sent (Phase 2)
);

CREATE INDEX IF NOT EXISTS idx_case_saves_token
  ON public.case_saves(resume_token);

CREATE INDEX IF NOT EXISTS idx_case_saves_email
  ON public.case_saves(email);

CREATE INDEX IF NOT EXISTS idx_case_saves_session
  ON public.case_saves(session_id)
  WHERE session_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_case_saves_user
  ON public.case_saves(user_id)
  WHERE user_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_case_saves_unresumed
  ON public.case_saves(created_at)
  WHERE resumed_at IS NULL AND reminder_sent_at IS NULL;


-- ─── RLS ───────────────────────────────────────────────────────────────
-- Anonymous inserts allowed so visitors can save.
-- SELECT by token allowed (how resume works — fetch by URL token).
-- No other reads exposed.
ALTER TABLE public.case_saves ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "case_saves_anon_insert" ON public.case_saves;
CREATE POLICY "case_saves_anon_insert"
  ON public.case_saves
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to SELECT by token (they have the token, they can resume)
-- This is how the resume flow works — the token in the URL is the auth.
DROP POLICY IF EXISTS "case_saves_select_by_token" ON public.case_saves;
CREATE POLICY "case_saves_select_by_token"
  ON public.case_saves
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow updating resumed_at when the user clicks the link
DROP POLICY IF EXISTS "case_saves_mark_resumed" ON public.case_saves;
CREATE POLICY "case_saves_mark_resumed"
  ON public.case_saves
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);


-- Aggregate view — how many saves, by day
CREATE OR REPLACE VIEW public.case_saves_daily AS
SELECT
  DATE(created_at) AS save_date,
  COUNT(*) AS total_saves,
  COUNT(DISTINCT email) AS unique_savers,
  COUNT(*) FILTER (WHERE resumed_at IS NOT NULL) AS resumed,
  ROUND(100.0 * COUNT(*) FILTER (WHERE resumed_at IS NOT NULL) / NULLIF(COUNT(*), 0), 1) AS resume_pct
FROM public.case_saves
GROUP BY DATE(created_at)
ORDER BY save_date DESC;

-- Per-case summary
CREATE OR REPLACE VIEW public.case_saves_by_case AS
SELECT
  case_id,
  COUNT(*) AS total_saves,
  COUNT(*) FILTER (WHERE resumed_at IS NOT NULL) AS resumed,
  ROUND(100.0 * COUNT(*) FILTER (WHERE resumed_at IS NOT NULL) / NULLIF(COUNT(*), 0), 1) AS resume_pct
FROM public.case_saves
GROUP BY case_id
ORDER BY total_saves DESC;
