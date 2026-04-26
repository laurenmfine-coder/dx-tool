-- ============================================================
-- Allow anonymous INSERTs to external_subscribers
-- ============================================================
--
-- WHY: The blog newsletter form (and any future public signup forms) needs
-- to be able to add new subscribers. Without this, the form gets a 401 error.
--
-- SECURITY MODEL:
--   - Anonymous users can INSERT new subscribers (sign up)
--   - Anonymous users CANNOT SELECT (read the list — privacy)
--   - Anonymous users CANNOT UPDATE/DELETE existing rows
--   - Service role still has full access for edge functions
--
-- This is the standard pattern for public newsletter signup forms.
-- ============================================================

-- Drop the blanket-deny policy so we can replace it with more precise rules
DROP POLICY IF EXISTS "No anon access to external_subscribers" ON external_subscribers;

-- Allow anon and authenticated to INSERT new subscribers (signup forms)
DROP POLICY IF EXISTS "Public can subscribe" ON external_subscribers;
CREATE POLICY "Public can subscribe"
  ON external_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Block anon/authenticated from reading the subscriber list (privacy)
DROP POLICY IF EXISTS "No anon read" ON external_subscribers;
CREATE POLICY "No anon read"
  ON external_subscribers
  FOR SELECT
  TO anon, authenticated
  USING (false);

-- Block anon/authenticated from modifying existing subscriber rows
DROP POLICY IF EXISTS "No anon update" ON external_subscribers;
CREATE POLICY "No anon update"
  ON external_subscribers
  FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Block anon/authenticated from deleting subscribers
DROP POLICY IF EXISTS "No anon delete" ON external_subscribers;
CREATE POLICY "No anon delete"
  ON external_subscribers
  FOR DELETE
  TO anon, authenticated
  USING (false);

-- Service role bypasses all RLS, so the edge functions and direct DB access
-- continue to work without changes.

-- ============================================================
-- Verify the policies
-- ============================================================
-- SELECT policyname, cmd, roles
-- FROM pg_policies
-- WHERE tablename = 'external_subscribers'
-- ORDER BY cmd;
