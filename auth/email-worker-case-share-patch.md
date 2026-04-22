# Cloudflare Email Worker — case_share Event Type Patch

The `rdx-email` Cloudflare Worker at `rdx-email.laurenmfine.workers.dev`
needs a new `eventType` handler for `'case_share'`. This is what's sent
when a user uses the "Email a colleague" button on the post-case share panel.

## Payload shape your worker will receive

```json
{
  "eventType": "case_share",
  "email": "recipient@example.com",
  "firstName": "recipient",
  "data": {
    "caseSlug": "stemi-v1",
    "caseTitle": "A 56-year-old woman with chest pain",
    "caseUrl": "https://reasondx.com/?c=0238-e580&src=email_share",
    "senderEmail": "sender@example.com or null",
    "senderName": "sender or null",
    "note": "optional short message from sender, <=500 chars",
    "timestamp": "ISO8601"
  }
}
```

## What the worker should do

Send a plain, human-sounding email **to `data.email`** (the recipient)
with content roughly like this. Keep it short — the point is to deliver
the case link, not to market.

```
Subject: {senderName or "A colleague"} shared a clinical reasoning case with you

Hi,

{senderName or "A colleague"} thought you might find this ReasonDx case interesting:

{caseTitle}

{If note: "They added a note: \"{note}\"\n\n"}

You can work through the case here — no signup required:
{caseUrl}

ReasonDx is a free clinical reasoning education platform for medical,
nursing, pharmacy, PT, OT, dentistry, and optometry students.

— The ReasonDx team
reasondx.com
```

## Minimal worker diff

If your worker uses a `switch (eventType)` block, just add a case. If it
forwards to Loops with template IDs, create a new Loops template for
`case_share` and add the mapping.

Pseudocode (adapt to your actual worker):

```javascript
case 'case_share': {
  const { caseTitle, caseUrl, senderEmail, senderName, note } = data;
  const fromLabel = senderName || 'A colleague';
  const subject = `${fromLabel} shared a clinical reasoning case with you`;
  const noteBlock = note ? `\n\nThey added a note: "${note}"\n` : '';

  const body = [
    `Hi,`,
    ``,
    `${fromLabel} thought you might find this ReasonDx case interesting:`,
    ``,
    caseTitle || 'A ReasonDx case',
    noteBlock,
    `You can work through the case here — no signup required:`,
    caseUrl,
    ``,
    `ReasonDx is a free clinical reasoning education platform for medical,`,
    `nursing, pharmacy, PT, OT, dentistry, and optometry students.`,
    ``,
    `— The ReasonDx team`,
    `reasondx.com`,
  ].join('\n');

  // Replace with your actual email delivery mechanism
  // (Resend, Postmark, SendGrid, Loops, Mailchannels, etc.)
  return await sendEmail({
    to: email,
    replyTo: senderEmail || undefined,
    subject,
    text: body,
  });
}
```

## Security considerations

- **Rate limit by IP** — malicious actors could try to use this endpoint
  for spam. Cap at 5 case-share sends per hour per IP.
- **Validate the caseUrl** — ensure it starts with `https://reasondx.com/`
  or your canonical domain. Reject anything else.
- **Strip HTML from `note`** — never inject user-provided content into
  HTML emails without escaping. If sending plain text only, this is
  already safe.
- **Don't honor `senderEmail` as the actual From address** — always send
  from your own authenticated domain (e.g., `noreply@reasondx.com` or
  `hello@reasondx.com`). You can put the sender's email in `Reply-To`
  so recipient replies go to the right person.
- **Log recipient email?** Currently the `case_shares` Supabase table
  does NOT store recipient emails (privacy-preserving). Keep that
  discipline unless you need it.

## Testing

Once deployed, test by going to a case in the simulation engine, finishing
the debrief, clicking "Email a colleague," and entering your own email as
recipient. You should receive the case-share email within a minute.

You can also test manually with curl:

```bash
curl -X POST https://rdx-email.laurenmfine.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "eventType": "case_share",
    "email": "YOUR_TEST_EMAIL",
    "firstName": "test",
    "data": {
      "caseSlug": "stemi-v1",
      "caseTitle": "STEMI — 56yo F with chest pain",
      "caseUrl": "https://reasondx.com/?c=0238-e580",
      "senderEmail": "test@reasondx.com",
      "senderName": "Lauren",
      "note": "Worth 10 minutes.",
      "timestamp": "2026-04-22T12:00:00Z"
    }
  }'
```
