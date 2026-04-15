// supabase/functions/weekly-case-email/index.ts
// Weekly case email for ReasonDx users
// Deploy: supabase functions deploy weekly-case-email
// Schedule: 0 12 * * 1 (every Monday 12:00 UTC = 7:00 AM ET)

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || '';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const FROM_EMAIL = 'ReasonDx <cases@reasondx.com>';

// Weekly cases — rotate through these
const WEEKLY_CASES = [
  {
    title: "The Diagnostic Pivot",
    scenario: "A 52-year-old woman with known anxiety presents with palpitations and 'just not feeling right' for 3 weeks. Her primary care physician reassured her twice. Today she's in the ED with a heart rate of 140.",
    challenge: "What are you most worried about, and what's the one test that changes everything?",
    tag: "cardiology",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=cardiology"
  },
  {
    title: "The Silent History",
    scenario: "A 34-year-old male presents with 3 days of severe abdominal pain. He rates it 9/10 but is lying completely still and speaking calmly. His abdomen is rigid. Labs are pending.",
    challenge: "What does his behavior tell you that his words don't? What's your immediate next step?",
    tag: "emergency",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=emergency"
  },
  {
    title: "The Atypical Presentation",
    scenario: "An 80-year-old woman with diabetes is brought in by her daughter for 'acting confused' since this morning. No chest pain, no fever. Blood pressure is 90/60.",
    challenge: "In elderly diabetic patients, what diagnoses present atypically? Where do you start?",
    tag: "internal-medicine",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=internal-medicine"
  },
  {
    title: "The Lab That Doesn't Fit",
    scenario: "A 28-year-old type 1 diabetic presents with vomiting and malaise. Glucose is 210 mg/dL — 'not that high.' pH is 7.18. The intern says it can't be DKA.",
    challenge: "What's the trap here, and what does the pH tell you that the glucose doesn't?",
    tag: "endocrinology",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=endocrinology"
  },
  {
    title: "The Drug That Didn't Work",
    scenario: "A 45-year-old with community-acquired pneumonia was started on azithromycin 3 days ago. He's worse — fever 39.5°C, O2 sat 88% on room air, now requiring 4L O2.",
    challenge: "What does failure to respond tell you about your initial diagnosis? What are you reconsidering?",
    tag: "pulmonology",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=pulmonology"
  },
  {
    title: "The Vital Sign You Almost Missed",
    scenario: "A 67-year-old post-op day 2 after elective hip replacement. Nurse calls because he 'seems off.' Vital signs: HR 104, RR 22, BP 118/76, O2 sat 94%, temp 37.2°C.",
    challenge: "Which vital sign concerns you most and why? What's on your differential for post-op deterioration?",
    tag: "surgery",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=surgery"
  },
  {
    title: "The Patient Who Knows Their Diagnosis",
    scenario: "A 31-year-old woman with 'chronic Lyme disease' presents with fatigue, joint pain, and brain fog for 2 years. She brings a folder of tests. She's been on multiple antibiotics.",
    challenge: "How do you approach a patient with a self-diagnosis? What might you be missing — and what cognitive bias is at play?",
    tag: "infectious-disease",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=infectious-disease"
  },
  {
    title: "The Transfer Patient",
    scenario: "You receive a patient transferred from an outside hospital with the diagnosis of 'COPD exacerbation.' He's on BiPAP. The outside records say he smoked for 40 years. He's 43 years old.",
    challenge: "What should make you pause before accepting the diagnosis at transfer? What's your first move?",
    tag: "pulmonology",
    url: "https://reasondx.com/browse.html?mode=simulate&tag=pulmonology"
  }
];

function getWeeklyCase(): typeof WEEKLY_CASES[0] {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  return WEEKLY_CASES[weekNumber % WEEKLY_CASES.length];
}

function buildEmailHtml(user: {
  full_name: string;
  email: string;
  streak_days: number;
  total_cases_completed: number;
  engagement_status: string;
}, weeklyCase: typeof WEEKLY_CASES[0]): string {
  const firstName = user.full_name?.split(' ')[0] || 'Doctor';
  const isLapsed = user.engagement_status === 'lapsed';
  const streakText = user.streak_days > 1
    ? `🔥 ${user.streak_days}-day streak — keep it going!`
    : user.total_cases_completed > 0
    ? `You've completed ${user.total_cases_completed} case${user.total_cases_completed !== 1 ? 's' : ''} so far.`
    : `Ready for your first case?`;

  const reEngageNote = isLapsed
    ? `<p style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:12px 16px;font-size:14px;color:#9a3412;margin:0 0 24px">
        We've missed you! It's been a few days — this week's case is a great one to jump back in with.
       </p>`
    : '';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Weekly Reasoning Case — ReasonDx</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:32px 40px;text-align:center">
      <div style="font-size:32px;margin-bottom:8px">🩺</div>
      <div style="font-family:Georgia,serif;font-size:24px;color:#ffffff;font-weight:400;margin-bottom:4px">ReasonDx</div>
      <div style="font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:1px;text-transform:uppercase">Weekly Reasoning Case</div>
    </div>

    <!-- Body -->
    <div style="padding:36px 40px">

      <p style="font-size:16px;color:#1e293b;margin:0 0 8px">Hi ${firstName},</p>
      <p style="font-size:14px;color:#64748b;margin:0 0 28px">${streakText}</p>

      ${reEngageNote}

      <!-- Case card -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:28px">
        <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#2874a6;margin-bottom:8px">This Week's Case</div>
        <div style="font-family:Georgia,serif;font-size:20px;color:#0f172a;margin-bottom:16px;line-height:1.3">${weeklyCase.title}</div>
        <p style="font-size:15px;color:#334155;line-height:1.7;margin:0 0 20px">${weeklyCase.scenario}</p>
        <div style="background:#fff;border-left:3px solid #2874a6;padding:12px 16px;border-radius:0 8px 8px 0">
          <div style="font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#2874a6;margin-bottom:4px">Your Challenge</div>
          <p style="font-size:14px;color:#475569;margin:0;line-height:1.6">${weeklyCase.challenge}</p>
        </div>
      </div>

      <!-- CTA -->
      <div style="text-align:center;margin-bottom:32px">
        <a href="${weeklyCase.url}?utm_source=email&utm_medium=weekly_case&utm_campaign=retention"
           style="display:inline-block;background:#2874a6;color:#ffffff;padding:14px 32px;border-radius:10px;font-weight:700;font-size:15px;text-decoration:none">
          Work Through This Case →
        </a>
      </div>

      <p style="font-size:13px;color:#94a3b8;text-align:center;margin:0 0 8px">
        ReasonDx — Clinical Reasoning Education Platform
      </p>
      <p style="font-size:12px;color:#cbd5e1;text-align:center;margin:0">
        <a href="https://reasondx.com/dashboard.html?unsubscribe=weekly" style="color:#94a3b8">Unsubscribe from weekly cases</a>
      </p>

    </div>
  </div>
</body>
</html>`;
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from: FROM_EMAIL, to, subject, html })
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(`Email failed to ${to}:`, data);
      return false;
    }
    console.log(`Email sent to ${to}: ${data.id}`);
    return true;
  } catch(e) {
    console.error(`Email error for ${to}:`, e);
    return false;
  }
}

Deno.serve(async (req) => {
  // Allow manual test trigger with specific email
  let testEmail: string | null = null;
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      testEmail = body?.test_email || null;
    } catch(e) {}
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
  const weeklyCase = getWeeklyCase();

  let users: any[] = [];

  if (testEmail) {
    // Test mode — send to specific email only
    users = [{ 
      email: testEmail,
      full_name: 'Test User',
      streak_days: 5,
      total_cases_completed: 12,
      engagement_status: 'active'
    }];
  } else {
    // Production mode — query eligible users
    const { data, error } = await supabase
      .from('weekly_email_eligible')
      .select('*');

    if (error) {
      console.error('Query error:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
    users = data || [];
  }

  console.log(`Sending weekly case "${weeklyCase.title}" to ${users.length} users`);

  let sent = 0;
  let failed = 0;

  for (const user of users) {
    const subject = `Your Weekly Case: ${weeklyCase.title} — ReasonDx`;
    const html = buildEmailHtml(user, weeklyCase);
    const success = await sendEmail(user.email, subject, html);
    if (success) sent++; else failed++;
    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }

  return new Response(
    JSON.stringify({ 
      success: true,
      case: weeklyCase.title,
      sent,
      failed,
      total: users.length
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
});
