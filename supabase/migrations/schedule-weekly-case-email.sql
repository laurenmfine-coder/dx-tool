-- ============================================================
-- ReasonDx: Schedule weekly-case-email twice weekly
-- Mondays and Wednesdays at 7:00 AM ET (12:00 UTC during EST, 11:00 UTC during EDT)
-- We use 12:00 UTC to match the existing "0 12 * * 1" pattern.
-- This means 7am ET in winter, 8am ET in summer (acceptable drift).
-- ============================================================

-- Make sure required extensions are enabled (idempotent — safe to re-run)
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Remove any old schedule that may exist for this function
SELECT cron.unschedule('weekly-case-email-monday')
  WHERE EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-case-email-monday');

SELECT cron.unschedule('weekly-case-email-wednesday')
  WHERE EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-case-email-wednesday');

-- Also clean up any single-day schedule that may have been there before
SELECT cron.unschedule('weekly-case-email')
  WHERE EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'weekly-case-email');

-- Schedule Monday send (7am ET = 12:00 UTC)
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
    body   := '{}'::jsonb
  );
  $$
);

-- Schedule Wednesday send (7am ET = 12:00 UTC)
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
    body   := '{}'::jsonb
  );
  $$
);

-- Verify schedules are registered
SELECT jobid, jobname, schedule, active
FROM cron.job
WHERE jobname LIKE 'weekly-case-email%'
ORDER BY jobname;

-- ── TO REMOVE SCHEDULES (if needed later) ──
-- SELECT cron.unschedule('weekly-case-email-monday');
-- SELECT cron.unschedule('weekly-case-email-wednesday');
