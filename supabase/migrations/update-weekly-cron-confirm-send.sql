-- ============================================================
-- ReasonDx: Update weekly-case-email cron to pass confirm_send
-- ============================================================
--
-- WHY THIS EXISTS
-- The weekly-case-email function now refuses to send unless the
-- request body carries confirm_send: true. The previous cron schedule
-- sent a bare {} body. After deploying the new function code, the
-- existing cron jobs would 400 and no email would go out on Mon/Wed.
--
-- This migration replaces the two scheduled jobs with new bodies
-- that pass confirm_send: true.
--
-- IDEMPOTENT
-- Safe to re-run. Unschedules the old jobs first, then schedules the
-- new ones with the same names.
--
-- DEPLOY ORDER
-- Deploy the function code FIRST, then run this SQL. If you run this
-- before the function is deployed, the legacy function will receive
-- {confirm_send:true} as a no-op flag (it ignored unknown body keys)
-- and will keep sending normally — so you can run them in either
-- order, but function-first is the cleaner sequence.
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Remove existing schedules
SELECT cron.unschedule('weekly-case-email-monday')
  WHERE EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-case-email-monday');

SELECT cron.unschedule('weekly-case-email-wednesday')
  WHERE EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-case-email-wednesday');

-- Re-schedule Monday send (7am ET = 12:00 UTC) with confirm_send flag
SELECT cron.schedule(
  'weekly-case-email-monday',
  '0 12 * * 1',
  $$
  SELECT net.http_post(
    url    := 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/weekly-case-email',
    headers := jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0'
    ),
    body   := '{"confirm_send": true}'::jsonb
  );
  $$
);

-- Re-schedule Wednesday send (7am ET = 12:00 UTC) with confirm_send flag
SELECT cron.schedule(
  'weekly-case-email-wednesday',
  '0 12 * * 3',
  $$
  SELECT net.http_post(
    url    := 'https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/weekly-case-email',
    headers := jsonb_build_object(
      'Content-Type',  'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JpcXBvamlzcWdlenljdXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjIzMTMsImV4cCI6MjA4NTg5ODMxM30.wxf6gMaPxqB3gX8JmKBdbviCAu5RjWelfOIcUff8Js0'
    ),
    body   := '{"confirm_send": true}'::jsonb
  );
  $$
);

-- Verify the schedules are registered with the new bodies
SELECT jobid, jobname, schedule, active, command
FROM cron.job
WHERE jobname LIKE 'weekly-case-email%'
ORDER BY jobname;
