# announcement-concept-map-beta

One-time announcement email: ReasonDx concept map beta (4 domains live).
Modeled on `announcement-whats-new-apr30` with the same Resend transport
and the same recipient cohort (`weekly_email_eligible` view).

## Deploy

```bash
supabase functions deploy announcement-concept-map-beta
```

## Send sequence

The function refuses to send unless the request body explicitly opts in.
This is intentional: on Apr 30 a malformed PowerShell body parsed as `{}`
and triggered an unintended live send. Always run the steps below in
order.

### 1. Dry run (preview recipient count, no send)

```bash
curl -X POST https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/announcement-concept-map-beta \
  -H "Authorization: Bearer <SUPABASE_ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"dry_run": true}'
```

Response shows `would_send` count and a sample of recipient emails.
Confirm the count looks right before going further.

### 2. Test send to yourself

```bash
curl -X POST https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/announcement-concept-map-beta \
  -H "Authorization: Bearer <SUPABASE_ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"test_email": "ReasonDxeducation@gmail.com"}'
```

Check the email arrives, the links work, the rendering looks right on
both desktop and mobile, the Reply-To resolves to the right address.

### 3. Live send

```bash
curl -X POST https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/announcement-concept-map-beta \
  -H "Authorization: Bearer <SUPABASE_ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"confirm_send": true}'
```

Response shows `sent`, `failed`, `total`. Spot-check Resend's dashboard
for delivery status if any failures.

## Optional: extra recipients

The `extra_emails` array adds recipients beyond `weekly_email_eligible`.
Useful for adding KPCAM students or specific colleagues who aren't on
the regular newsletter list:

```bash
-d '{"confirm_send": true, "extra_emails": [{"email": "student@nova.edu", "full_name": "Student Name"}, "colleague@example.com"]}'
```

Strings are accepted as shorthand for `{email: "..."}`. Duplicates with
the existing recipient set are de-duplicated automatically.

## Safety contract

- Bare `{}` body or empty body → 400 error, no send.
- Body that fails to parse as JSON → 400 error, no send.
- `dry_run:true` → no send, returns count.
- `test_email:"..."` → sends to one address only.
- `confirm_send:true` → sends to full cohort.
- These are mutually exclusive paths in the handler. Set exactly one.

## Recipient source

The `weekly_email_eligible` view in Supabase. Synced from Loops via the
`loops-webhook-receiver` edge function on subscribe/unsubscribe events.
As of late April 2026 the cohort was 77 subscribers; check current
count via dry run before sending.
