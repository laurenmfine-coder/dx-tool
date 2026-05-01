-- ============================================================
-- DIAGNOSTIC: figure out what fired the 1pm Thursday Apr 30 email
-- ============================================================
--
-- This is a READ-ONLY diagnostic. Run each block separately in the
-- Supabase SQL editor. It does not modify anything. The goal is to
-- answer three questions:
--
--   1. Are there any cron.job rows beyond the expected
--      weekly-case-email-monday and weekly-case-email-wednesday?
--   2. When did each cron job last fire, and did anything fire today?
--   3. Did pg_net log any outbound HTTP POSTs to the email function
--      around 1pm ET (17:00 UTC) today?
--
-- ============================================================


-- BLOCK 1: List all currently-scheduled cron jobs.
-- Look for ANY job that targets the weekly-case-email function or
-- any of the announcement functions. Anything beyond the two
-- weekly-case-email-* jobs is suspicious.
SELECT jobid, jobname, schedule, active, command
FROM cron.job
ORDER BY jobname;


-- BLOCK 2: When did each cron job last run, and what was the result?
-- This is the smoking-gun query. If a job ran today (Apr 30), you'll
-- see it here. The 'status' column will say 'succeeded' or 'failed'.
SELECT
  j.jobname,
  d.start_time,
  d.end_time,
  d.status,
  d.return_message
FROM cron.job_run_details d
JOIN cron.job j ON j.jobid = d.jobid
WHERE d.start_time > now() - interval '7 days'
ORDER BY d.start_time DESC
LIMIT 50;


-- BLOCK 3: Did anything fire net.http_post recently?
-- pg_net keeps a log of all HTTP requests it made. If something
-- triggered a send today via SQL (cron or otherwise), it shows up here.
-- Filter for the email function URL.
SELECT id, created, url, method, headers
FROM net.http_request_queue
WHERE url LIKE '%weekly-case-email%'
   OR url LIKE '%announcement%'
ORDER BY id DESC
LIMIT 30;


-- BLOCK 4: Same as above but for the COMPLETED requests (with response).
-- This tells you if the request succeeded and what the function returned.
-- A successful weekly send returns {"success":true,"sent":N,"failed":0,...}
SELECT
  id,
  created,
  url,
  status_code,
  content::text AS response_body
FROM net._http_response
WHERE url LIKE '%weekly-case-email%'
   OR url LIKE '%announcement%'
ORDER BY id DESC
LIMIT 30;


-- ============================================================
-- INTERPRETATION
-- ============================================================
--
-- If BLOCK 1 shows a third or fourth job pointing at
-- weekly-case-email — that's the culprit. cron.unschedule(jobname)
-- will kill it.
--
-- If BLOCK 2 shows any 'succeeded' row from today (Apr 30) for any
-- weekly-case-email job — cron fired it. Check the schedule column;
-- might be a wrong cron expression. Mon/Wed should be '0 12 * * 1'
-- and '0 12 * * 3'.
--
-- If BLOCKS 1 and 2 are clean but BLOCK 3 or 4 show a request from
-- today — something OUTSIDE pg_cron called net.http_post. That would
-- be a manual SELECT statement run during the working session, or a
-- trigger somewhere. The 'created' timestamp will tell you exactly
-- when.
--
-- If BLOCKS 1-4 are all clean — the trigger came from outside
-- Supabase entirely. Check the function logs in the Supabase
-- dashboard under Functions → weekly-case-email → Logs, filtered to
-- today around 17:00 UTC. The Logs view shows source IP, which will
-- distinguish a curl from your laptop versus pg_net from inside
-- Supabase.
--
-- ============================================================
