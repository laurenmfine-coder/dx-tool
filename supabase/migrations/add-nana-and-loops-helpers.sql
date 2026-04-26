-- ============================================================
-- Add new Loops subscriber to Supabase (one-off)
-- ============================================================

INSERT INTO external_subscribers (email, full_name, source, segment) VALUES
  ('nanakusi06@gmail.com', 'Nana Kusi', 'loops', 'Beta Applicants')
ON CONFLICT (email) DO NOTHING;

-- Verify
SELECT email, full_name, source, segment, subscribed_at
FROM external_subscribers
WHERE email = 'nanakusi06@gmail.com';

-- ============================================================
-- Useful queries for managing your subscriber list going forward
-- ============================================================

-- Count by source (lets you see how many came from each platform)
-- SELECT source, COUNT(*) FROM external_subscribers
--   WHERE email_weekly_case = TRUE AND unsubscribed_at IS NULL
--   GROUP BY source;

-- Find a specific subscriber
-- SELECT * FROM external_subscribers WHERE email = 'someone@example.com';

-- Manually unsubscribe someone (sets flags, doesn't delete)
-- UPDATE external_subscribers
--   SET email_weekly_case = FALSE, unsubscribed_at = now()
--   WHERE email = 'someone@example.com';

-- Re-subscribe someone who previously unsubscribed
-- UPDATE external_subscribers
--   SET email_weekly_case = TRUE, unsubscribed_at = NULL
--   WHERE email = 'someone@example.com';

-- Bulk add multiple emails (replace the rows below with your own)
-- INSERT INTO external_subscribers (email, full_name, source, segment) VALUES
--   ('email1@example.com', 'Name One',   'loops', 'Beta Applicants'),
--   ('email2@example.com', 'Name Two',   'loops', 'Waitlist-General'),
--   ('email3@example.com', 'Name Three', 'loops', 'Beta Testers')
-- ON CONFLICT (email) DO NOTHING;

-- View total count of active subscribers across all sources
-- SELECT COUNT(*) FROM weekly_email_eligible;
