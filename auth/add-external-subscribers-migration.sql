-- =====================================================================
-- Migration: Add external_subscribers table and update weekly_email_eligible view
-- Purpose: Support email subscribers who signed up via Substack/external forms
--          without requiring them to create Supabase auth accounts
-- =====================================================================

-- 1. Create the external subscribers table
CREATE TABLE IF NOT EXISTS external_subscribers (
  id          uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  email       text          NOT NULL UNIQUE,
  full_name   text,
  source      text,                         -- e.g., 'substack', 'beta_waitlist'
  segment     text,                         -- e.g., 'Beta Testers', 'Waitlist-General'
  email_weekly_case  boolean DEFAULT TRUE,  -- opt-in for twice-weekly cases
  subscribed_at      timestamptz DEFAULT now(),
  unsubscribed_at    timestamptz,
  notes       text
);

CREATE INDEX IF NOT EXISTS idx_ext_subs_email_active
  ON external_subscribers(email)
  WHERE email_weekly_case = TRUE AND unsubscribed_at IS NULL;

-- 2. Update the weekly_email_eligible view to UNION both sources
DROP VIEW IF EXISTS weekly_email_eligible;

CREATE VIEW weekly_email_eligible AS
-- Internal users (signed up on platform)
SELECT
  p.id::text                    AS id,
  u.email                       AS email,
  p.full_name                   AS full_name,
  p.streak_days                 AS streak_days,
  p.total_cases_completed       AS total_cases_completed,
  p.last_active_at              AS last_active_at,
  CASE
    WHEN p.last_active_at < now() - interval '5 days' THEN 'lapsed'
    ELSE 'active'
  END                           AS engagement_status,
  'platform'::text              AS source
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.email_weekly_case = TRUE
  AND u.email IS NOT NULL
  AND (p.last_active_at > now() - interval '90 days' OR p.total_cases_completed = 0)

UNION ALL

-- External subscribers (Substack/waitlist)
SELECT
  e.id::text                    AS id,
  e.email                       AS email,
  e.full_name                   AS full_name,
  0                             AS streak_days,
  0                             AS total_cases_completed,
  e.subscribed_at               AS last_active_at,
  'active'::text                AS engagement_status,
  COALESCE(e.source, 'external')::text  AS source
FROM external_subscribers e
WHERE e.email_weekly_case = TRUE
  AND e.unsubscribed_at IS NULL;

-- 3. Insert the Substack subscribers
-- (run this once; ON CONFLICT prevents duplicates if re-run)
INSERT INTO external_subscribers (email, full_name, source, segment) VALUES
  ('mynvuu@gmail.com',                    'Mynvuu',                'substack', 'Waitlist-General'),
  ('elizabeth.prabhakar@brunel.ac.uk',    'Elizabeth Prabhakar',   'substack', 'Waitlist-General'),
  ('azharud2@msu.edu',                    'Osman Azharudin',       'substack', 'Waitlist-General'),
  ('chayab580@gmail.com',                 'Chaya',                 'substack', 'Waitlist-General'),
  ('mccartney.holeman01@utrgv.edu',       'McCartney Holeman',     'substack', 'Beta Applicants'),
  ('eluozodaniella@gmail.com',            'Daniella Eluozo',       'substack', 'Beta Applicants'),
  ('laurenbrick1209@gmail.com',           'Lauren Brick',          'substack', 'Beta Testers'),
  ('kishaninjmu2023@gmail.com',           'Kishani Ketheeswaran',  'substack', 'Waitlist-General'),
  ('patriciamadel@yahoo.com',             'Patricia Madel',        'substack', 'Beta Applicants'),
  ('janeharrington1@gmail.com',           'Jane Harrington',       'substack', 'Beta Applicants'),
  ('leah.bush@pennmedicine.upenn.edu',    'Leah Bush',             'substack', 'Beta Testers'),
  ('michaeladpas@gmail.com',              'Michaela',              'substack', 'Beta Applicants'),
  ('afitzgerald@ksu.edu',                 'Amy Fitzgerald',        'substack', 'Beta Applicants'),
  ('mm4229@nova.edu',                     'Mariapia',              'substack', 'Beta Applicants'),
  ('mromer31@jhu.edu',                    'Marysol Romero',        'substack', 'Beta Applicants'),
  ('okechukwuvictor5567@gmail.com',       'Victor Chukwuebuka',    'substack', 'Beta Applicants'),
  ('hp616@mynsu.nova.edu',                'Hrishi',                'substack', 'Beta Testers'),
  ('alanpatrus@yahoo.com',                'Alan Patrus',           'substack', 'Beta Applicants'),
  ('chiomaemeka97@gmail.com',             'Chioma Emeka',          'substack', 'Beta Applicants'),
  ('laurenmfine@gmail.com',               'Lauren',                'substack', 'Beta Applicants'),
  ('macberry2@gmail.com',                 'Andi',                  'substack', 'Beta Applicants'),
  ('kmotazedian@tulane.edu',              'Khashaiar Motazedian',  'substack', 'Beta Applicants'),
  ('tina.on.earth@gmail.com',             'Tina Nguyen',           'substack', 'Beta Applicants'),
  ('suzanneriskin@yahoo.com',             'Suzanne Riskin',        'substack', 'Beta Applicants'),
  ('lawade523@gmail.com',                 'Lauren Wade',           'substack', 'Beta Applicants'),
  ('as.dasher@outlook.com',               'Angel Dasher',          'substack', 'Beta Applicants'),
  ('em.morganyoung@gmail.com',            'Emily Morgan-Young',    'substack', 'Beta Applicants'),
  ('jalpacp@gmail.com',                   'Jalpa',                 'substack', 'Beta Applicants')
ON CONFLICT (email) DO NOTHING;

-- 4. Verify (optional — uncomment to check counts)
-- SELECT source, COUNT(*) FROM weekly_email_eligible GROUP BY source;
-- SELECT * FROM external_subscribers ORDER BY subscribed_at DESC;
