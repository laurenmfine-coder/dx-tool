// supabase/functions/announcement-concept-map-beta/index.ts
//
// One-time announcement: ReasonDx concept map beta is live.
// Asks subscribers to test the new graph-based navigation across
// four domains (cardiology, neurology, infectious disease,
// endocrinology) and reply with feedback.
//
// Modeled on announcement-whats-new-apr30. Same safety rails,
// same recipient cohort (weekly_email_eligible), same Resend
// transport. The body content and subject are the only changes.
//
// Deploy:
//   supabase functions deploy announcement-concept-map-beta
//
// Always run dry-run first:
//   curl -X POST https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/announcement-concept-map-beta \
//     -H "Authorization: Bearer <anon_key>" \
//     -H "Content-Type: application/json" \
//     -d '{"dry_run": true}'
//
// Test send to yourself before live:
//   curl ... -d '{"test_email": "ReasonDxeducation@gmail.com"}'
//
// Live send to all weekly_email_eligible — REQUIRES explicit flag:
//   curl ... -d '{"confirm_send": true}'
//
// A bare {} body, an empty body, or any body that fails to parse as
// valid JSON will be REJECTED with 400. This is intentional. On Apr 30
// a malformed PowerShell body parsed as {}, fell through to live send,
// and 77 subscribers received the email without a dry-run preview.
// The safety rails below prevent that exact failure mode.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || '';
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const FROM_EMAIL = 'Lauren Fine, MD <cases@reasondx.com>';
const REPLY_TO = 'ReasonDxeducation@gmail.com';

function buildHtml(user: any): string {
  const firstName = user.full_name?.split(" ")[0] || "there";
  const utm = (medium: string) =>
    `utm_source=email&utm_medium=${medium}&utm_campaign=concept_map_beta`;

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Help me test a new ReasonDx feature</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Helvetica,Arial,sans-serif">
<div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;overflow:hidden">

  <div style="background:linear-gradient(135deg,#1f5f8b,#2874a6);padding:32px 40px;text-align:center">
    <div style="font-family:Georgia,serif;font-size:22px;color:#fff;font-weight:400">ReasonDx</div>
    <div style="font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:1px;text-transform:uppercase;margin-top:4px">A short note from Lauren</div>
  </div>

  <div style="padding:40px 40px 36px">

    <p style="font-size:16px;color:#1e293b;margin:0 0 20px;line-height:1.6">Hi ${firstName},</p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      I'm asking for your help with something new on ReasonDx.
    </p>

    <p style="font-size:15px;color:#334155;line-height:1.75;margin:0 0 18px">
      For the past few weeks I've been building a concept map: a navigable graph that connects the puzzles and branched cases you already use, organized by relationship rather than by topic list. The hypothesis is that browsing by relationship makes related content easier to find. I'd like your help testing whether it actually does.
    </p>

    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:22px 24px;margin:24px 0 18px">
      <div style="font-family:Georgia,serif;font-size:17px;color:#0f172a;font-weight:600;margin-bottom:14px">Two ways to start, pick whichever you prefer</div>
      <div style="margin-bottom:14px">
        <a href="https://www.reasondx.com/concept-map.html?${utm('top')}" style="display:inline-block;background:#2874a6;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none">Browse from the top &rarr;</a>
      </div>
      <div>
        <a href="https://www.reasondx.com/concept-map.html?domain=cardiology&node=endocarditis&${utm('endocarditis')}" style="display:inline-block;background:#fff;color:#2874a6;border:1.5px solid #2874a6;padding:10px 22px;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none">Land on a specific concept (endocarditis) &rarr;</a>
        <div style="font-size:12px;color:#64748b;margin-top:8px">Endocarditis is a good demo of cross-domain edges. It sits in cardiology and reaches across to neurology (septic emboli to the brain) and back to infectious disease (bacteremia and valve seeding).</div>
      </div>
    </div>

    <p style="font-size:14px;color:#475569;line-height:1.75;margin:0 0 18px">
      Four domains are live in beta: cardiology, neurology, infectious disease, endocrinology. The graph shows hubs (acute chest pain, acute headache, sepsis), concepts that cluster around them, and edges labeled with the discriminating findings or shared mechanisms that connect them. Cross-domain edges are dashed; clicking them takes you to the connected domain.
    </p>

    <p style="font-size:14px;color:#475569;line-height:1.75;margin:0 0 14px">
      <strong style="color:#1e293b">What would help me most:</strong> spend ten or fifteen minutes with it, then reply with answers to whatever subset of these questions you have time for.
    </p>

    <ul style="font-size:14px;color:#475569;line-height:1.75;margin:0 0 18px;padding-left:20px">
      <li style="margin-bottom:6px">Did you reach a piece of content faster than you would have through the regular browse?</li>
      <li style="margin-bottom:6px">Did any of the connections teach you something the list view wouldn't have surfaced?</li>
      <li style="margin-bottom:6px">What broke down? What were you looking for that wasn't there?</li>
      <li>Would you use it again next week?</li>
    </ul>

    <p style="font-size:14px;color:#475569;line-height:1.75;margin:0 0 18px">
      Reply to this email or use the feedback button on the bottom right of any page.
    </p>

    <p style="font-size:14px;color:#475569;line-height:1.75;margin:0 0 28px">
      This is a real beta and the goal is to learn whether the format is worth investing in further. Honest reactions, including "this didn't help me," are exactly what I need.
    </p>

    <table cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px">
      <tr>
        <td style="vertical-align:middle;padding-right:14px">
          <img src="https://www.reasondx.com/email-assets/lauren-headshot.jpg" alt="Lauren Fine" width="64" height="64" style="display:block;width:64px;height:64px;border-radius:32px;border:2px solid #e2e8f0">
        </td>
        <td style="vertical-align:middle">
          <div style="font-size:14px;color:#475569;line-height:1.5">Thanks,</div>
          <div style="font-size:18px;color:#1F5C82;line-height:1.4;font-weight:600;font-family:Georgia, 'Times New Roman', serif">Lauren</div>
        </td>
      </tr>
    </table>

    <div style="border-top:1px solid #e2e8f0;padding-top:18px;font-size:12px;color:#94a3b8;line-height:1.6">
      Lauren Fine, MD &middot; Founder, ReasonDx<br>
      Reply to this email anytime. I read every one.
      <div style="margin-top:10px;font-size:12px;color:#94a3b8">
        More from me:
        <a href="https://laurenfine.com" style="color:#64748b;text-decoration:none;border-bottom:1px solid #cbd5e1">laurenfine.com</a>
        &nbsp;&middot;&nbsp;
        <a href="https://substack.com/@permissiontochange/posts" style="color:#64748b;text-decoration:none;border-bottom:1px solid #cbd5e1">Substack</a>
        &nbsp;&middot;&nbsp;
        <a href="https://www.linkedin.com/in/lauren-fine-md/" style="color:#64748b;text-decoration:none;border-bottom:1px solid #cbd5e1">LinkedIn</a>
        &nbsp;&middot;&nbsp;
        <a href="https://www.youtube.com/watch?v=sLYEH6-Mshw" style="color:#64748b;text-decoration:none;border-bottom:1px solid #cbd5e1">TEDx talk</a>
      </div>
    </div>

  </div>
</div>
</body></html>`;
}

async function sendEmail(to: string, subject: string, html: string, scheduledAt: string | null = null): Promise<boolean> {
  try {
    const body: any = {
      from: FROM_EMAIL,
      to: [to],
      reply_to: REPLY_TO,
      subject,
      html
    };
    // Resend accepts scheduled_at as either ISO 8601 timestamp or natural
    // language ("in 1 hour", "tomorrow at 9am ET"). Pass through as-is;
    // Resend will reject malformed values and we'll see the error.
    if (scheduledAt) body.scheduled_at = scheduledAt;
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error(`Send failed for ${to}: ${res.status} ${errText}`);
      return false;
    }
    const data = await res.json();
    console.log(`Sent to ${to}: ${data.id}${scheduledAt ? ' (scheduled: ' + scheduledAt + ')' : ''}`);
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
  let scheduledAt: string | null = null;
  let extraEmails: Array<{email: string, full_name?: string}> = [];
  let parseFailed = false;

  if (req.method === "POST") {
    try {
      const b = await req.json();
      testEmail = b?.test_email || null;
      dryRun = b?.dry_run === true;
      confirmSend = b?.confirm_send === true;
      // scheduled_at: ISO 8601 timestamp ("2026-05-02T13:00:00Z") or
      // natural language ("tomorrow at 9am ET"). Resend handles both.
      // When set, the Resend API queues the message instead of sending
      // immediately. The function still runs synchronously now and you
      // get back the schedule confirmation per recipient.
      scheduledAt = b?.scheduled_at || null;
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

  const subject = "Help me test a new ReasonDx feature (concept map beta)";

  let sent = 0, failed = 0;
  for (const user of users) {
    const success = await sendEmail(user.email, subject, buildHtml(user), scheduledAt);
    if (success) sent++; else failed++;
    await new Promise(r => setTimeout(r, 100));
  }

  return new Response(
    JSON.stringify({
      success: true,
      sent, failed, total: users.length,
      scheduled_at: scheduledAt || null,
      note: scheduledAt
        ? "Messages queued at Resend for delivery at the scheduled time. Manage or cancel from the Resend dashboard."
        : "Messages sent immediately."
    }),
    { headers: { "Content-Type": "application/json" } }
  );
});
