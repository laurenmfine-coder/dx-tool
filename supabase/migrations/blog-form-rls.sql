-- ============================================================
-- ReasonDx: RLS for the blog newsletter form
-- ============================================================
--
-- WHY THIS EXISTS
-- The blog newsletter form (blog/index.html, #rdx-blog-form) posts
-- directly from the browser to /rest/v1/external_subscribers with the
-- anon key. With RLS enabled and no policy, every submission gets a
-- 401/403 and the user sees the generic error message. We need a policy
-- that lets anonymous browsers INSERT a single row but does NOT let them
-- read, update, or delete anything from the table.
--
-- WHAT THIS DOES
--   1. Enables RLS on external_subscribers (no-op if already enabled).
--   2. Adds an INSERT-only policy for the anon role with a strict CHECK:
--      - email must be present and look like an email
--      - source must be 'blog' (clients can't impersonate Loops or other
--        sources via the public form)
--      - sensitive fields can't be set by the client
--   3. Does NOT add SELECT/UPDATE/DELETE policies for anon — those stay
--      restricted to service_role and authenticated roles via existing
--      policies (or the absence of policies, which means denied).
--
-- IDEMPOTENT
-- Safe to re-run. Drops and recreates the policy.
-- ============================================================

-- Belt and suspenders: make sure RLS is on.
ALTER TABLE external_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop the policy if it exists, so this script is idempotent.
DROP POLICY IF EXISTS blog_form_anon_insert ON external_subscribers;

-- Anon-role INSERT-only policy with strict CHECK constraints.
CREATE POLICY blog_form_anon_insert
  ON external_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Must have an email that at least looks like one.
    email IS NOT NULL
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(email) <= 320

    -- Must declare itself as coming from the blog form. This stops
    -- anyone from using the public anon key to inject rows that look
    -- like they came from Loops or another trusted source. The form
    -- in blog/index.html sends source = 'blog-newsletter'; if that
    -- string ever changes in the form, update it here too.
    AND source = 'blog-newsletter'

    -- Subscribed by default; can't pre-set unsubscribed_at to bypass
    -- anything.
    AND email_weekly_case = true
    AND unsubscribed_at IS NULL

    -- segment is optional but if set, must be a short reasonable string.
    AND (segment IS NULL OR length(segment) <= 100)
    AND (full_name IS NULL OR length(full_name) <= 200)
  );

-- Verify the policy is in place.
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies
WHERE tablename = 'external_subscribers'
ORDER BY policyname;

-- ============================================================
-- CLIENT-SIDE NOTE
-- ============================================================
-- The form in blog/index.html (function rdxBlogSubscribe) sends:
--   source: 'blog-newsletter'
--   segment: 'Blog Subscriber'
--   email_weekly_case: true
-- The CHECK clause above accepts that exact shape. If the form ever
-- changes the source string, update the policy CHECK to match.
-- ============================================================
