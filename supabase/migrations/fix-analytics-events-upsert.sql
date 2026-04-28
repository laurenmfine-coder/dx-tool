-- ═══════════════════════════════════════════════════════════════
-- Fix analytics_events upsert: add unique constraint
-- ═══════════════════════════════════════════════════════════════
--
-- WHY THIS MIGRATION EXISTS
-- The client (js/rdx-supabase.js trackEvent) calls:
--   supabase.from('analytics_events').upsert({...}, {
--     onConflict: 'user_id,attempt_id,event_type',
--     ignoreDuplicates: true
--   })
-- Postgres requires a UNIQUE constraint or unique index on those exact
-- columns to back ON CONFLICT. Without it, every upsert returns 400.
-- That 400 was the source of the multi-line "Failed to load resource"
-- errors in the browser console on every page-view tracking call.
--
-- WHAT THIS DOES
-- 1. Cleans up any duplicate rows that built up while the upsert was
--    silently failing (so the unique constraint can be added).
-- 2. Adds a unique index on (user_id, attempt_id, event_type).
--    Using a partial index pattern — NULL attempt_id is treated as a
--    distinct value via COALESCE so events without an attempt still
--    dedupe correctly.
--
-- IDEMPOTENT
-- Safe to re-run. Uses IF NOT EXISTS / DO blocks.
-- ═══════════════════════════════════════════════════════════════

-- Step 1: Deduplicate existing rows so the unique index can be added.
-- Keep the earliest row for each (user_id, attempt_id, event_type) tuple.
WITH ranked AS (
  SELECT id,
         ROW_NUMBER() OVER (
           PARTITION BY user_id, COALESCE(attempt_id, '00000000-0000-0000-0000-000000000000'::uuid), event_type
           ORDER BY created_at ASC, id ASC
         ) AS rn
  FROM analytics_events
)
DELETE FROM analytics_events
WHERE id IN (SELECT id FROM ranked WHERE rn > 1);

-- Step 2: Add the unique index that backs ON CONFLICT.
-- COALESCE-based index: NULL attempt_id becomes a constant UUID so
-- (user_id, NULL, event_type) tuples still deduplicate.
CREATE UNIQUE INDEX IF NOT EXISTS idx_events_dedupe
  ON analytics_events (
    user_id,
    COALESCE(attempt_id, '00000000-0000-0000-0000-000000000000'::uuid),
    event_type
  );

-- Step 3: Verify the index landed.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_indexes
    WHERE tablename = 'analytics_events' AND indexname = 'idx_events_dedupe'
  ) THEN
    RAISE EXCEPTION 'idx_events_dedupe was not created — check for blocking duplicates';
  END IF;
END $$;
