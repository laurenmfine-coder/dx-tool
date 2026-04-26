// supabase/functions/announcement-platform-overview/index.ts
// One-time announcement email — explains what ReasonDx offers
// Sent in response to user feedback that students were unaware of full platform scope
// Deploy: supabase functions deploy announcement-platform-overview
// Trigger manually via curl with no cron schedule

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || '';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const FROM_EMAIL = 'Lauren Fine, MD <cases@reasondx.com>';
const REPLY_TO = 'ReasonDxeducation@gmail.com';

function buildAnnouncementHtml(user: any): string {
  const firstName = user.full_name?.split(" ")[0] || "there";
  const utm = (medium: string) => `utm_source=email&utm_medium=${medium}&utm_campaign=platform_overview_announcement`;

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>A note from Lauren — ReasonDx</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Helvetica,Arial,sans-serif">
<div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden">

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:32px 40px;text-align:center">
    <div style="font-family:Georgia,serif;font-size:22px;color:#fff;font-weight:400">ReasonDx</div>
    <div style="font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:1px;text-transform:uppercase;margin-top:4px">A Note From Lauren</div>
  </div>

  <div style="padding:40px 40px 36px">

    <p style="font-size:16px;color:#1e293b;margin:0 0 20px;line-height:1.6">Hi ${firstName},</p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      I want to share something that came out of recent feedback. I noticed that many of you have been engaging with the weekly case I send out — which is great — but most of you haven't explored the rest of the platform.
    </p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      That's on me. The weekly email never told you what else was there.
    </p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 28px">
      So here's a quick tour of what ReasonDx actually offers — all of it free, all of it accessible without an account.
    </p>

    <!-- FOUR OFFERINGS — full descriptions -->

    <!-- CASES -->
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin-bottom:14px">
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px">
        <span style="font-size:20px">📋</span>
        <span style="font-family:Georgia,serif;font-size:18px;color:#0f172a;font-weight:600">Cases</span>
        <span style="font-size:11px;color:#94a3b8;margin-left:auto">5–15 min each</span>
      </div>
      <p style="font-size:14px;color:#475569;line-height:1.65;margin:0 0 12px">
        Over 500 full clinical simulations across every specialty — cardiology, neurology, pediatrics, surgery, psychiatry, and more. Each case unfolds in stages: you get the chief complaint, then build your differential, then order tests, then make decisions. The platform talks back as a virtual attending while you reason.
      </p>
      <a href="https://reasondx.com/browse.html?${utm('cases')}" style="display:inline-block;color:#2874a6;font-weight:600;font-size:14px;text-decoration:none">Browse all cases →</a>
    </div>

    <!-- PUZZLES -->
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin-bottom:14px">
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px">
        <span style="font-size:20px">🧩</span>
        <span style="font-family:Georgia,serif;font-size:18px;color:#0f172a;font-weight:600">Puzzles</span>
        <span style="font-size:11px;color:#94a3b8;margin-left:auto">2 min each</span>
      </div>
      <p style="font-size:14px;color:#475569;line-height:1.65;margin:0 0 12px">
        51 quick reasoning challenges. One finding, one prompt, one decision. These are designed for the moments between things — waiting for rounds, on the bus, before bed. Perfect when you don't have time for a full case but want to keep your reasoning sharp.
      </p>
      <a href="https://reasondx.com/puzzles.html?${utm('puzzles')}" style="display:inline-block;color:#2874a6;font-weight:600;font-size:14px;text-decoration:none">Try a puzzle →</a>
    </div>

    <!-- MODULES -->
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin-bottom:14px">
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px">
        <span style="font-size:20px">🔬</span>
        <span style="font-family:Georgia,serif;font-size:18px;color:#0f172a;font-weight:600">Mechanism Modules</span>
        <span style="font-size:11px;color:#94a3b8;margin-left:auto">10 min each</span>
      </div>
      <p style="font-size:14px;color:#475569;line-height:1.65;margin:0 0 12px">
        50 deep dives into the <em>why</em> behind clinical decisions. ACS, AKI, anaphylaxis, sepsis, stroke, COPD, and more. Each module connects pathophysiology to bedside reasoning, so when you see a presentation in clinic, you understand the mechanism — not just the algorithm.
      </p>
      <a href="https://reasondx.com/mechanism/index.html?${utm('modules')}" style="display:inline-block;color:#2874a6;font-weight:600;font-size:14px;text-decoration:none">Open the module library →</a>
    </div>

    <!-- COACHDX -->
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin-bottom:32px">
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:8px">
        <span style="font-size:20px">🧑‍⚕️</span>
        <span style="font-family:Georgia,serif;font-size:18px;color:#0f172a;font-weight:600">CoachDx</span>
        <span style="font-size:11px;color:#94a3b8;margin-left:auto">Open-ended</span>
      </div>
      <p style="font-size:14px;color:#475569;line-height:1.65;margin:0 0 12px">
        A Socratic AI attending. Bring any case from clinic, any concept from class, or any clinical question — and CoachDx will challenge your reasoning instead of just giving you the answer. This is the tool for the moment when you have a real patient and need to think through what to do, with a coach who pushes back.
      </p>
      <a href="https://reasondx.com/CoachDx/mentor-chat.html?${utm('coachdx')}" style="display:inline-block;color:#2874a6;font-weight:600;font-size:14px;text-decoration:none">Talk to CoachDx →</a>
    </div>

    <!-- THE WHY -->
    <div style="background:#fefce8;border-left:3px solid #eab308;padding:18px 20px;margin-bottom:32px;border-radius:0 8px 8px 0">
      <p style="font-size:14px;color:#713f12;line-height:1.65;margin:0">
        <strong>One thing worth saying explicitly:</strong> ReasonDx is not a question bank. It's a clinical reasoning training platform. The goal isn't to test whether you know the answer — it's to help you build the thinking process that gets you to the answer. That's why the experience feels different from UWorld or AMBOSS. It's meant to.
      </p>
    </div>

    <!-- INVITE FEEDBACK -->
    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      If you've been using the platform and have thoughts on what's working, what's confusing, or what you wish existed — I genuinely want to hear it. Just hit reply to this email. Every message comes directly to me.
    </p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 28px">
      Thanks for being part of this.
    </p>

    <!-- SIGNATURE -->
    <p style="font-size:15px;color:#1e293b;line-height:1.5;margin:0">
      Lauren Fine, MD<br>
      <span style="font-size:13px;color:#64748b">Founder, ReasonDx</span>
    </p>

    <!-- FOOTER -->
    <div style="border-top:1px solid #e2e8f0;margin-top:32px;padding-top:20px">
      <p style="font-size:12px;color:#94a3b8;text-align:center;margin:0 0 6px">ReasonDx — Clinical Reasoning Education Platform</p>
      <p style="font-size:12px;color:#cbd5e1;text-align:center;margin:0">
        <a href="https://reasondx.com/dashboard.html?unsubscribe=weekly" style="color:#94a3b8">Unsubscribe</a>
      </p>
    </div>
  </div>
</div>
</body></html>`;
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        reply_to: REPLY_TO,
        to,
        subject,
        html
      })
    });
    const data = await res.json();
    if (!res.ok) { console.error(`Email failed to ${to}:`, data); return false; }
    console.log(`Sent to ${to}: ${data.id}`);
    return true;
  } catch (e) {
    console.error(`Error for ${to}:`, e);
    return false;
  }
}

Deno.serve(async (req) => {
  let testEmail = null;
  let dryRun = false;
  let extraEmails: Array<{email: string, full_name?: string}> = [];

  if (req.method === "POST") {
    try {
      const b = await req.json();
      testEmail = b?.test_email || null;
      dryRun = b?.dry_run === true;
      // extra_emails: array of {email, full_name?} OR array of strings
      if (Array.isArray(b?.extra_emails)) {
        extraEmails = b.extra_emails.map((e: any) =>
          typeof e === 'string' ? { email: e } : e
        );
      }
    } catch(e) {}
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  let users: any[] = [];
  if (testEmail) {
    users = [{ email: testEmail, full_name: "Test User" }];
  } else {
    // Pull from weekly_email_eligible view
    const { data, error } = await supabase.from("weekly_email_eligible").select("*");
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    users = data || [];

    // Append extra emails (e.g., Substack subscribers not yet in Supabase)
    // Deduplicate by email (case-insensitive)
    const existingEmails = new Set(users.map(u => u.email?.toLowerCase()));
    for (const extra of extraEmails) {
      if (extra.email && !existingEmails.has(extra.email.toLowerCase())) {
        users.push({
          email: extra.email,
          full_name: extra.full_name || extra.email.split('@')[0]
        });
        existingEmails.add(extra.email.toLowerCase());
      }
    }
  }

  if (dryRun) {
    return new Response(
      JSON.stringify({
        dryRun: true,
        would_send: users.length,
        from_supabase: users.length - extraEmails.filter(e => e.email).length,
        from_extra: extraEmails.length,
        sample_recipients: users.slice(0, 8).map(u => u.email)
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  const subject = "A note from Lauren — what ReasonDx actually offers";

  let sent = 0, failed = 0;
  for (const user of users) {
    const success = await sendEmail(user.email, subject, buildAnnouncementHtml(user));
    if (success) sent++; else failed++;
    await new Promise(r => setTimeout(r, 100));
  }

  return new Response(
    JSON.stringify({ success: true, sent, failed, total: users.length }),
    { headers: { "Content-Type": "application/json" } }
  );
});
