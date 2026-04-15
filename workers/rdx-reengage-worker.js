/**
 * rdx-reengage-worker.js
 * Daily cron worker that identifies lapsed users and sends re-engagement emails
 * Runs daily at 10am ET, targets users inactive 5, 10, or 30 days
 * Deploy: wrangler deploy --config wrangler-reengage.toml
 * Schedule: 0 15 * * * (15:00 UTC = 10am ET daily)
 */

const SUPABASE_URL = 'https://lpwbiqpojisqgezycupw.supabase.co';
const FROM_EMAIL = 'ReasonDx <cases@reasondx.com>';

// Re-engagement messages by days inactive
const MESSAGES = {
  5: {
    subject: "A quick case to get back in the groove 🩺",
    headline: "It's been 5 days — here's a case to ease back in",
    body: "Clinical reasoning is a skill that needs practice to stay sharp. This one takes about 10 minutes.",
    cta: "Pick Up Where You Left Off",
    emoji: "🔥",
  },
  10: {
    subject: "Your reasoning skills miss you",
    headline: "10 days is a long time in clinical medicine",
    body: "The best clinicians practice consistently. Even one case a week keeps your diagnostic thinking sharp. Here's one waiting for you.",
    cta: "Start a Case Now",
    emoji: "💡",
  },
  30: {
    subject: "We saved your spot on ReasonDx",
    headline: "It's been a while — come back and practice",
    body: "ReasonDx has added new cases, reasoning frameworks, and profession-specific content since you last visited. Everything is still free.",
    cta: "See What's New",
    emoji: "✨",
  },
};

// Rotating re-engagement cases
const REENGAGEMENT_CASES = [
  { title: "The Diagnostic Pivot", url: "https://reasondx.com/browse.html?mode=simulate&tag=cardiology&utm_source=email&utm_medium=reengage" },
  { title: "The Lab That Doesn't Fit", url: "https://reasondx.com/browse.html?mode=simulate&tag=endocrinology&utm_source=email&utm_medium=reengage" },
  { title: "The Atypical Presentation", url: "https://reasondx.com/browse.html?mode=simulate&tag=internal-medicine&utm_source=email&utm_medium=reengage" },
  { title: "The Vital Sign You Almost Missed", url: "https://reasondx.com/browse.html?mode=simulate&tag=surgery&utm_source=email&utm_medium=reengage" },
  { title: "The Silent History", url: "https://reasondx.com/browse.html?mode=simulate&tag=emergency&utm_source=email&utm_medium=reengage" },
];

function getReengagementCase() {
  const day = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  return REENGAGEMENT_CASES[day % REENGAGEMENT_CASES.length];
}

function buildReengagementEmail(user, daysInactive) {
  const msg = MESSAGES[daysInactive] || MESSAGES[5];
  const firstName = user.full_name?.split(' ')[0] || 'Doctor';
  const reCase = getReengagementCase();
  const streakNote = user.streak_days > 1
    ? `<p style="font-size:13px;color:#64748b;margin:0 0 20px">You had a <strong>${user.streak_days}-day streak</strong> going — pick it back up today.</p>`
    : user.total_cases_completed > 0
    ? `<p style="font-size:13px;color:#64748b;margin:0 0 20px">You've completed <strong>${user.total_cases_completed} cases</strong> on ReasonDx.</p>`
    : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Helvetica,Arial,sans-serif">
<div style="max-width:520px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden">

  <div style="background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:28px 36px;text-align:center">
    <div style="font-size:36px;margin-bottom:4px">${msg.emoji}</div>
    <div style="font-family:Georgia,serif;font-size:20px;color:#fff;font-weight:400">ReasonDx</div>
  </div>

  <div style="padding:32px 36px">
    <p style="font-size:16px;color:#1e293b;margin:0 0 6px">Hi ${firstName},</p>
    ${streakNote}

    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:24px">
      <div style="font-family:Georgia,serif;font-size:18px;color:#0f172a;margin-bottom:10px;line-height:1.3">${msg.headline}</div>
      <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 16px">${msg.body}</p>
      <div style="font-size:12px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#2874a6;margin-bottom:4px">Suggested Case</div>
      <div style="font-size:15px;font-weight:600;color:#1e293b">${reCase.title}</div>
    </div>

    <div style="text-align:center;margin-bottom:28px">
      <a href="${reCase.url}" style="display:inline-block;background:#2874a6;color:#fff;padding:13px 28px;border-radius:10px;font-weight:700;font-size:15px;text-decoration:none">${msg.cta} →</a>
    </div>

    <div style="border-top:1px solid #f1f5f9;padding-top:16px;text-align:center">
      <p style="font-size:12px;color:#94a3b8;margin:0 0 4px">ReasonDx — Free for all health professions students</p>
      <p style="font-size:11px;color:#cbd5e1;margin:0">
        <a href="https://reasondx.com/dashboard.html?unsubscribe=reengage" style="color:#94a3b8">Unsubscribe from re-engagement emails</a>
      </p>
    </div>
  </div>
</div>
</body>
</html>`;
}

async function sendEmail(to, subject, html, resendKey) {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM_EMAIL, to, subject, html })
    });
    const data = await res.json();
    if (!res.ok) { console.error(`Failed to ${to}:`, data); return false; }
    return true;
  } catch(e) { console.error(`Error for ${to}:`, e); return false; }
}

async function getLapsedUsers(supabaseKey, daysInactive) {
  const from = new Date(Date.now() - (daysInactive + 1) * 24 * 60 * 60 * 1000).toISOString();
  const to = new Date(Date.now() - daysInactive * 24 * 60 * 60 * 1000).toISOString();

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/weekly_email_eligible?last_active_at=gte.${from}&last_active_at=lte.${to}&select=*`,
      { headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` } }
    );
    return await res.json() || [];
  } catch(e) { return []; }
}

export default {
  // Cron trigger
  async scheduled(event, env, ctx) {
    ctx.waitUntil(runReengagement(env));
  },

  // HTTP trigger for testing
  async fetch(request, env) {
    if (request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      if (body.test_email) {
        const html = buildReengagementEmail(
          { full_name: 'Test User', streak_days: 3, total_cases_completed: 8 },
          5
        );
        const success = await sendEmail(body.test_email, MESSAGES[5].subject, html, env.RESEND_API_KEY);
        return new Response(JSON.stringify({ success }), { headers: { 'Content-Type': 'application/json' } });
      }
    }
    await runReengagement(env);
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
  }
};

async function runReengagement(env) {
  const SUPABASE_KEY = env.SUPABASE_ANON_KEY;
  const RESEND_KEY = env.RESEND_API_KEY;

  let sent = 0;
  let failed = 0;

  // Process each lapse window
  for (const days of [5, 10, 30]) {
    const users = await getLapsedUsers(SUPABASE_KEY, days);
    console.log(`Day ${days} lapsed users: ${users.length}`);

    for (const user of users) {
      const html = buildReengagementEmail(user, days);
      const subject = MESSAGES[days].subject;
      const success = await sendEmail(user.email, subject, html, RESEND_KEY);
      if (success) sent++; else failed++;
      await new Promise(r => setTimeout(r, 100));
    }
  }

  console.log(`Re-engagement: sent=${sent}, failed=${failed}`);
}
