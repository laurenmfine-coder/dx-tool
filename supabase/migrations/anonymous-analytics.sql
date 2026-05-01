-- ============================================================
-- Anonymous analytics tracking on analytics_events
-- ============================================================
--
-- WHY THIS EXISTS
-- The platform's primary acquisition path ("Try Instantly. No Signup
-- Required" on the landing page) sends visitors directly into the
-- virtual EMR without an account. Today, those sessions generate zero
-- analytics_events because the table has user_id NOT NULL and the
-- client trackEvent() returns early when there is no logged-in user.
-- That makes the entire anonymous-to-registered conversion funnel
-- invisible — exactly the funnel that matters most for engagement.
--
-- WHAT THIS DOES
--   1. Adds anonymous_session_id (per browser tab session) and
--      anonymous_visitor_id (per browser, persistent across sessions)
--      to analytics_events, both UUID NULL.
--   2. Drops the NOT NULL constraint on user_id.
--   3. Adds a CHECK constraint enforcing that EXACTLY ONE of
--      (user_id, anonymous_session_id) is set on every row. This
--      prevents nonsense rows where both or neither are populated.
--   4. Adds an INSERT-only RLS policy for the anon role with strict
--      hardening: only specific event_type values are allowed, only
--      anonymous_session_id-keyed rows (no impersonating user_id),
--      event_data size capped to defend against amplification abuse
--      using the publicly-visible anon key.
--   5. Adds indexes on the new columns.
--
-- IDEMPOTENT
-- Safe to re-run. Uses IF NOT EXISTS / DROP POLICY IF EXISTS / DO blocks.
-- ============================================================

-- Step 1: add the new columns (idempotent).
ALTER TABLE analytics_events
  ADD COLUMN IF NOT EXISTS anonymous_session_id UUID,
  ADD COLUMN IF NOT EXISTS anonymous_visitor_id UUID;

-- Step 2: drop NOT NULL on user_id so anonymous rows can be inserted.
-- Idempotent: this is a no-op if user_id is already nullable.
ALTER TABLE analytics_events
  ALTER COLUMN user_id DROP NOT NULL;

-- Step 3: enforce exactly-one of (user_id, anonymous_session_id).
-- A row with neither makes no sense. A row with both is ambiguous —
-- if a previously-anonymous user signs up, future rows should carry
-- user_id and the prior anonymous rows can be reattributed via a
-- separate join on anonymous_visitor_id at query time.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'analytics_events_identity_check'
      AND conrelid = 'analytics_events'::regclass
  ) THEN
    ALTER TABLE analytics_events
      ADD CONSTRAINT analytics_events_identity_check
      CHECK (
        (user_id IS NOT NULL AND anonymous_session_id IS NULL)
        OR (user_id IS NULL AND anonymous_session_id IS NOT NULL)
      );
  END IF;
END $$;

-- Step 4: indexes on the new columns. Anonymous funnel queries will
-- group by anonymous_session_id, so this index is the load-bearing one.
CREATE INDEX IF NOT EXISTS idx_events_anon_session
  ON analytics_events (anonymous_session_id)
  WHERE anonymous_session_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_events_anon_visitor
  ON analytics_events (anonymous_visitor_id)
  WHERE anonymous_visitor_id IS NOT NULL;

-- Step 5: RLS policy for anonymous inserts, with hardening.
-- The anon key is in every browser bundle, which means anyone can
-- attempt to write to this table. The CHECK clause limits the damage:
--   - Only specific event_type values, no arbitrary strings
--   - user_id must be NULL (no impersonating real users)
--   - anonymous_session_id required and must look like a v4 UUID
--   - event_data size capped at 4KB to prevent amplification
-- INSERT-only. No anon SELECT, no anon UPDATE, no anon DELETE.

DROP POLICY IF EXISTS anon_event_insert ON analytics_events;

CREATE POLICY anon_event_insert
  ON analytics_events
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Cannot impersonate a real user. user_id must be NULL.
    user_id IS NULL

    -- Must carry an anonymous_session_id.
    AND anonymous_session_id IS NOT NULL

    -- Allowlist of event_type values clients may write. Add to this
    -- list when adding new tracker events. Anything outside the list
    -- is rejected by the CHECK and the insert fails.
    AND event_type IN (
      'page_view',
      'session_end',
      'case_start',
      'case_complete',
      'chart_tab_view',
      'crt_stage_complete',
      'crt_answer_submit',
      'consult_start',
      'consult_message',
      'consult_complete',
      'procedure_start',
      'procedure_complete',
      'pathway_step',
      'ed_patient_selected',
      'ed_disposition',
      'mission_control_open',
      'mission_control_task_complete',
      'cta_click'
    )

    -- attempt_id must be NULL for anonymous events. There's no
    -- meaningful case_attempts row tied to an anonymous browser yet.
    AND attempt_id IS NULL

    -- Size cap on event_data. Defends against someone using the public
    -- anon key to write large rows in a loop.
    AND octet_length(event_data::text) <= 4096
  );

-- Step 6: verify the new structure.
SELECT
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'analytics_events'
ORDER BY ordinal_position;

SELECT policyname, cmd, roles
FROM pg_policies
WHERE tablename = 'analytics_events'
ORDER BY policyname;
