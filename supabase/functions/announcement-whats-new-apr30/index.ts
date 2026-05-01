// supabase/functions/announcement-whats-new-apr30/index.ts
//
// One-time announcement email sent April 30 2026.
// Two updates: the new puzzle browse surface (+ progress tracking)
// and the daily picks hero on browse. Off-cycle from the regular
// Mon/Wed scheduled sends.
//
// Deploy:
//   supabase functions deploy announcement-whats-new-apr30
//
// Trigger (dry run first to confirm recipient count):
//   curl -X POST https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/announcement-whats-new-apr30 \
//     -H "Authorization: Bearer <anon_key>" \
//     -H "Content-Type: application/json" \
//     -d '{"dry_run": true}'
//
// Test send (recommend before live send):
//   curl ... -d '{"test_email": "your@email.com"}'
//
// Live send to all weekly_email_eligible — REQUIRES explicit flag:
//   curl ... -d '{"confirm_send": true}'
//
// A bare {} body (or any body without one of the three flags above)
// will be REJECTED with 400. This is intentional. On Apr 30 a malformed
// PowerShell body parsed as {}, fell through to live send, and 77
// subscribers got the email without a dry-run preview first.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || '';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const FROM_EMAIL = 'Lauren Fine, MD <cases@reasondx.com>';
const REPLY_TO = 'ReasonDxeducation@gmail.com';

function buildHtml(user: any): string {
  const firstName = user.full_name?.split(" ")[0] || "there";
  const utm = (medium: string) => `utm_source=email&utm_medium=${medium}&utm_campaign=whats_new_apr30`;

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>What's new on ReasonDx</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Helvetica,Arial,sans-serif">
<div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden">

  <div style="background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:32px 40px;text-align:center">
    <div style="font-family:Georgia,serif;font-size:22px;color:#fff;font-weight:400">ReasonDx</div>
    <div style="font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:1px;text-transform:uppercase;margin-top:4px">A short note from Lauren</div>
  </div>

  <div style="padding:40px 40px 36px">

    <p style="font-size:16px;color:#1e293b;margin:0 0 20px;line-height:1.6">Hi ${firstName},</p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      Two things changed on ReasonDx this week that I want you to know about. Both came from watching how people actually use the platform.
    </p>

    <!-- PUZZLES -->
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin:24px 0 14px">
      <div style="font-family:Georgia,serif;font-size:17px;color:#0f172a;font-weight:600;margin-bottom:10px">You can now browse the full puzzle library</div>
      <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 14px">
        Until now, you got one daily reasoning puzzle and that was it. The full library was hidden behind a daily rotation. That's been bothering me, because some of you want to drill a specific cognitive skill (anchoring, source check, lab shifts) rather than wait for it to come up.
      </p>
      <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 14px">
        All 114 puzzles are now searchable on the puzzles page. Filter by reasoning type, by specialty, or just by keyword. Every puzzle now also points you to a related case to practice and a mechanism module to review, so the answer isn't the end of the road.
      </p>
      <a href="https://reasondx.com/puzzles.html?${utm('puzzles')}" style="display:inline-block;background:#2874a6;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none">Browse the puzzles →</a>
    </div>

    <!-- DAILY PICKS -->
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin:0 0 28px">
      <div style="font-family:Georgia,serif;font-size:17px;color:#0f172a;font-weight:600;margin-bottom:10px">Three cases waiting for you, every day</div>
      <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 14px">
        The browse page now opens with three personalized cases at the top: a quick warm-up, a featured pick, and a tougher case if you're up for it. Refreshed daily. The card layout across the catalog also got cleaner so you can tell at a glance what each case is about.
      </p>
      <a href="https://reasondx.com/browse.html?${utm('daily_picks')}" style="display:inline-block;background:#2874a6;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none">See today's picks →</a>
    </div>

    <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 18px">
      One thing I'd ask: if you finish a case, stay through the end. The reasoning fingerprint and post-case feedback are where the platform's actual value lives, and a lot of users abandon before they see them. Five extra minutes is worth it.
    </p>

    <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 4px">
      Thank you for the feedback that shaped both of these. Keep it coming.
    </p>

    <p style="font-size:14px;color:#475569;line-height:1.7;margin:0 0 28px">
      Lauren
    </p>

    <div style="border-top:1px solid #e2e8f0;padding-top:18px;font-size:12px;color:#94a3b8;line-height:1.6">
      Lauren Fine, MD &middot; Founder, ReasonDx<br>
      Reply to this email anytime. I read every one.
    </div>

  </div>
</div>
</body></html>`;
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [to],
        reply_to: REPLY_TO,
        subject,
        html
      })
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error(`Send failed for ${to}: ${res.status} ${errText}`);
      return false;
    }
    const data = await res.json();
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
  let confirmSend = false;
  let extraEmails: Array<{email: string, full_name?: string}> = [];
  let parseFailed = false;

  if (req.method === "POST") {
    try {
      const b = await req.json();
      testEmail = b?.test_email || null;
      dryRun = b?.dry_run === true;
      confirmSend = b?.confirm_send === true;
      if (Array.isArray(b?.extra_emails)) {
        extraEmails = b.extra_emails.map((e: any) =>
          typeof e === 'string' ? { email: e } : e
        );
      }
    } catch(e) {
      // The Apr 30 incident: PowerShell mangled the JSON body, the parse
      // threw, the catch was empty, and the function fell through to a
      // live send to all 77 subscribers. We now treat any parse failure
      // as a hard abort. If you want to send live, the body has to parse
      // AND carry confirm_send: true.
      parseFailed = true;
    }
  }

  if (parseFailed) {
    return new Response(
      JSON.stringify({
        error: "Could not parse request body as JSON. Aborting to avoid an unintended live send. Pass a valid JSON body, e.g. {\"dry_run\": true} or {\"test_email\": \"you@example.com\"} or {\"confirm_send\": true} for a real send."
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Hard gate: no test_email, no dry_run, no confirm_send → abort.
  // This is the load-bearing safety. A bare {} or empty body used to
  // trigger a live send to everyone; now it returns an error.
  if (!testEmail && !dryRun && !confirmSend) {
    return new Response(
      JSON.stringify({
        error: "Refusing to send. Pass one of: dry_run:true (preview), test_email:'...' (single recipient), or confirm_send:true (live send to all weekly_email_eligible)."
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  let users: any[] = [];
  if (testEmail) {
    users = [{ email: testEmail, full_name: "Test User" }];
  } else {
    const { data, error } = await supabase.from("weekly_email_eligible").select("*");
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    users = data || [];

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
        sample_recipients: users.slice(0, 8).map(u => u.email)
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  const subject = "Two new things on ReasonDx";

  let sent = 0, failed = 0;
  for (const user of users) {
    const success = await sendEmail(user.email, subject, buildHtml(user));
    if (success) sent++; else failed++;
    await new Promise(r => setTimeout(r, 100));
  }

  return new Response(
    JSON.stringify({ success: true, sent, failed, total: users.length }),
    { headers: { "Content-Type": "application/json" } }
  );
});
