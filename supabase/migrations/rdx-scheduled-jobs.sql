-- ============================================================
-- ReasonDx: Scheduled Jobs via pg_cron + Supabase Edge Functions
-- Run in Supabase SQL Editor
-- ============================================================

-- Step 1: Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Step 2: Schedule nightly reengagement (midnight UTC every day)
SELECT cron.schedule(
  'rdx-nightly-reengagement',
  '0 0 * * *',
  $$
  SELECT net.http_post(
    url    := 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/rdx-scheduled-jobs',
    headers := jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0'
    ),
    body   := '{"job":"reengagement"}'::jsonb
  );
  $$
);

-- Step 3: Schedule weekly faculty digest (Monday 7am UTC)
SELECT cron.schedule(
  'rdx-weekly-faculty-digest',
  '0 7 * * 1',
  $$
  SELECT net.http_post(
    url    := 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/rdx-scheduled-jobs',
    headers := jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0'
    ),
    body   := '{"job":"faculty_digest"}'::jsonb
  );
  $$
);

-- Step 4: Verify schedules are registered
SELECT jobid, jobname, schedule, command
FROM cron.job
WHERE jobname LIKE 'rdx-%';

-- ── TO TEST MANUALLY ────────────────────────────────────────────────────────
-- Test reengagement now:
-- SELECT net.http_post(
--   url    := 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/rdx-scheduled-jobs',
--   headers := jsonb_build_object('Content-Type','application/json','Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0'),
--   body   := '{"job":"reengagement"}'::jsonb
-- );

-- ── TO REMOVE SCHEDULES ──────────────────────────────────────────────────────
-- SELECT cron.unschedule('rdx-nightly-reengagement');
-- SELECT cron.unschedule('rdx-weekly-faculty-digest');
