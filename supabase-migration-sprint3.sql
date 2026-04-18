-- ReasonDx Sprint 3 Migration
-- Tables: guided_sessions, program_configs
-- Run in Supabase SQL Editor at: supabase.com/dashboard/project/lpwbiqpojisqgezycupw/sql

-- ══════════════════════════════════════════════════════════════
-- TABLE: program_configs
-- Stores institutional Guided Mode configuration per program
-- ══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.program_configs (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id      text NOT NULL UNIQUE,         -- e.g. 'nsu-kpcam-m3'
  program_name    text,                          -- display name
  admin_email     text,                          -- faculty admin email
  config          jsonb NOT NULL DEFAULT '{}',  -- { preset, overrides }
  tier            text DEFAULT 'institutional', -- 'institutional' | 'premium'
  active          boolean DEFAULT true,
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

-- Index for fast lookup by program_id
CREATE INDEX IF NOT EXISTS idx_program_configs_program_id
  ON public.program_configs (program_id);

-- RLS: Anyone can read (config is not sensitive), only auth users can write
ALTER TABLE public.program_configs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "program_configs_read_all"
  ON public.program_configs FOR SELECT
  USING (true);

CREATE POLICY "program_configs_write_auth"
  ON public.program_configs FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "program_configs_update_auth"
  ON public.program_configs FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_program_configs_updated_at ON public.program_configs;
CREATE TRIGGER trg_program_configs_updated_at
  BEFORE UPDATE ON public.program_configs
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ══════════════════════════════════════════════════════════════
-- TABLE: guided_sessions
-- Records each student's guided mode session per case
-- ══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.guided_sessions (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id      text NOT NULL,               -- user email or supabase user id
  case_id         text NOT NULL,               -- e.g. 'stemi-v1'
  program_id      text,                        -- null for non-institutional users
  setting         text,                        -- 'ed' | 'inpatient' | 'clinic' | 'icu'
  profession      text,                        -- student's profession if set

  -- Phase progression
  current_phase   integer DEFAULT 1,
  completed_phases jsonb DEFAULT '[]',         -- array of phase keys completed
  coach_done      jsonb DEFAULT '{}',          -- { phaseKey: true }

  -- DDx snapshots (critical for bias research)
  ddx_phase2      jsonb DEFAULT '[]',          -- initial DDx entries (CC only)
  ddx_phase5      jsonb DEFAULT '[]',          -- refined DDx (post H&P)
  ddx_final       jsonb DEFAULT '[]',          -- final DDx from note

  -- Cognitive bias analysis (computed on save)
  bias_detected   jsonb DEFAULT '[]',          -- array of { type, severity, evidence }
  anchoring_score float,                       -- 0.0-1.0 similarity phase2 vs phase5
  premature_closure boolean DEFAULT false,
  correct_dx_in_ddx2 boolean,                  -- was correct dx in phase 2 list?
  correct_dx_in_ddx5 boolean,                  -- was correct dx in phase 5 list?

  -- Timing
  phase_timings   jsonb DEFAULT '{}',          -- { phaseKey: seconds_spent }
  total_time_sec  integer,
  interview_turns integer DEFAULT 0,           -- number of interview Q&A exchanges
  exam_maneuvers  jsonb DEFAULT '[]',          -- maneuvers performed

  -- Submission
  note_submitted  boolean DEFAULT false,
  note_word_count integer,
  feedback_received boolean DEFAULT false,

  started_at      timestamptz DEFAULT now(),
  completed_at    timestamptz,
  updated_at      timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_guided_sessions_student_id
  ON public.guided_sessions (student_id);

CREATE INDEX IF NOT EXISTS idx_guided_sessions_case_id
  ON public.guided_sessions (case_id);

CREATE INDEX IF NOT EXISTS idx_guided_sessions_program_id
  ON public.guided_sessions (program_id);

CREATE UNIQUE INDEX IF NOT EXISTS idx_guided_sessions_student_case
  ON public.guided_sessions (student_id, case_id);

-- RLS
ALTER TABLE public.guided_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "guided_sessions_student_own"
  ON public.guided_sessions FOR ALL
  USING (student_id = auth.uid()::text OR student_id = auth.email());

CREATE POLICY "guided_sessions_faculty_read"
  ON public.guided_sessions FOR SELECT
  USING (auth.role() = 'authenticated');

-- Auto-update
DROP TRIGGER IF EXISTS trg_guided_sessions_updated_at ON public.guided_sessions;
CREATE TRIGGER trg_guided_sessions_updated_at
  BEFORE UPDATE ON public.guided_sessions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ══════════════════════════════════════════════════════════════
-- VERIFICATION
-- ══════════════════════════════════════════════════════════════

-- Check both tables exist and are accessible
SELECT 'program_configs' as table_name, count(*) as rows FROM public.program_configs
UNION ALL
SELECT 'guided_sessions', count(*) FROM public.guided_sessions;

-- ══════════════════════════════════════════════════════════════
-- SAMPLE DATA — insert test program config
-- ══════════════════════════════════════════════════════════════

INSERT INTO public.program_configs (program_id, program_name, admin_email, config, tier)
VALUES (
  'nsu-kpcam-test',
  'NSU KPCAM — Test Program',
  'lauren@reasondx.com',
  '{"preset": "clerkship", "overrides": {}}',
  'institutional'
)
ON CONFLICT (program_id) DO NOTHING;
