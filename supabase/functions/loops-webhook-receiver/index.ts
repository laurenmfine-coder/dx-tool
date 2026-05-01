// supabase/functions/loops-webhook-receiver/index.ts
// Receives webhook events from Loops.so and syncs new contacts to Supabase
// Specifically handles: contact.created, contact.updated, contact.unsubscribed
//
// Setup:
//   1. Deploy: supabase functions deploy loops-webhook-receiver --no-verify-jwt
//      (--no-verify-jwt is required because Loops cannot send Supabase auth headers)
//   2. Set the webhook secret in Supabase:
//      supabase secrets set LOOPS_WEBHOOK_SECRET=<your-secret-from-loops>
//   3. In Loops dashboard → Settings → Webhooks → Add webhook:
//      URL: https://lpwbiqpojisqgezycupw.supabase.co/functions/v1/loops-webhook-receiver
//      Events: contact.created, contact.updated, contact.unsubscribed (optional)
//      Copy the signing secret Loops gives you, paste into LOOPS_WEBHOOK_SECRET above
//
// Test:
//   Loops dashboard has a "Test webhook" button that fires a sample event.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') || '';
const SUPABASE_SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const LOOPS_WEBHOOK_SECRET = Deno.env.get('LOOPS_WEBHOOK_SECRET') || '';

// HMAC verification — confirms the request actually came from Loops
async function verifySignature(rawBody: string, signature: string | null): Promise<boolean> {
  if (!signature || !LOOPS_WEBHOOK_SECRET) return false;

  const encoder = new TextEncoder();
  const keyData = encoder.encode(LOOPS_WEBHOOK_SECRET);
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBytes = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(rawBody)
  );

  // Convert to hex string
  const hashArray = Array.from(new Uint8Array(signatureBytes));
  const computedSig = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Loops sends signature as "v1,<hex>" or just "<hex>" — handle both
  const cleanSig = signature.replace(/^v1,/, '').replace(/^sha256=/, '').trim();

  // Constant-time comparison
  if (cleanSig.length !== computedSig.length) return false;
  let mismatch = 0;
  for (let i = 0; i < cleanSig.length; i++) {
    mismatch |= cleanSig.charCodeAt(i) ^ computedSig.charCodeAt(i);
  }
  return mismatch === 0;
}

Deno.serve(async (req) => {
  // Only accept POST
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  // Read the raw body for signature verification
  const rawBody = await req.text();

  // Verify signature (skip if no secret configured — for initial setup/testing)
  // TODO: once LOOPS_WEBHOOK_SECRET is reliably set in Supabase secrets,
  // change this to fail-closed: reject the request if the secret is
  // missing instead of accepting unsigned webhooks. As of Apr 30 2026
  // the secret is still pending per the handoff doc, so unsecured-fallback
  // is intentional for now.
  if (LOOPS_WEBHOOK_SECRET) {
    const signature = req.headers.get('loops-signature') || req.headers.get('x-loops-signature');
    const isValid = await verifySignature(rawBody, signature);
    if (!isValid) {
      console.error('Invalid signature');
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    console.warn('LOOPS_WEBHOOK_SECRET not set — skipping signature verification (insecure)');
  }

  // Parse the body
  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const eventName = payload?.eventName || payload?.event || payload?.type;
  const contact = payload?.contact || payload?.subscriber || payload?.data || payload;
  // Loops payloads have shifted shape across versions. Email can live at
  // any of these paths. Pull from the first one that's a non-empty string.
  const email = (
    contact?.email
    || payload?.contactIdentity?.email
    || payload?.email
    || payload?.data?.email
    || payload?.subscriber?.email
  );

  if (!email) {
    return new Response(JSON.stringify({ error: 'No email in payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  // Build full name from firstName + lastName (handle nulls)
  const firstName = contact?.firstName || '';
  const lastName = contact?.lastName || '';
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim() || null;

  // Map Loops userGroup to our segment
  const segment = contact?.userGroup || 'Loops Subscriber';

  // Normalize the event name. Loops has used several over the years:
  // - contact.created, contact.updated  (modern)
  // - contact.mailingList.subscribed   (modern)
  // - mailingList.contactSubscribed    (older form, still fired in some flows)
  // - subscriber.created, subscriber.added  (older, still seen on form-submit triggers)
  // - contact.unsubscribed, contact.deleted
  const ev = (eventName || '').toLowerCase();
  const isSubscribe = (
    ev === 'contact.created'
    || ev === 'contact.updated'
    || ev === 'contact.mailinglist.subscribed'
    || ev === 'mailinglist.contactsubscribed'
    || ev === 'subscriber.created'
    || ev === 'subscriber.added'
    || ev === 'subscriber.subscribed'
  );
  const isUnsubscribe = (
    ev === 'contact.unsubscribed'
    || ev === 'contact.deleted'
    || ev === 'subscriber.unsubscribed'
    || ev === 'mailinglist.contactunsubscribed'
  );

  try {
    if (isSubscribe) {
      // Insert or update — uses ON CONFLICT to handle re-subscribes
      const { error } = await supabase
        .from('external_subscribers')
        .upsert({
          email: email.toLowerCase().trim(),
          full_name: fullName,
          source: 'loops',
          segment: segment,
          email_weekly_case: true,
          unsubscribed_at: null,
          notes: contact?.source ? `Loops source: ${contact.source}` : null
        }, {
          onConflict: 'email',
          ignoreDuplicates: false
        });

      if (error) {
        console.error('Supabase upsert failed:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      console.log(`Synced ${email} from Loops (${eventName})`);
      return new Response(JSON.stringify({ success: true, action: 'upserted', email }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } else if (isUnsubscribe) {
      // Mark as unsubscribed (don't delete — preserves history)
      const { error } = await supabase
        .from('external_subscribers')
        .update({
          email_weekly_case: false,
          unsubscribed_at: new Date().toISOString()
        })
        .eq('email', email.toLowerCase().trim());

      if (error) {
        console.error('Supabase unsubscribe failed:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      console.log(`Unsubscribed ${email} from Loops (${eventName})`);
      return new Response(JSON.stringify({ success: true, action: 'unsubscribed', email }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } else {
      // Unrecognized event with a valid email. Three known signups
      // (nanakusi06, evettelarry, gkuttner) had to be added manually
      // tonight, almost certainly because Loops fired an event whose
      // name didn't match the previous if/else chain — and the old
      // handler silently returned 200 without writing anything.
      //
      // New behavior: any payload that has an email and that isn't an
      // explicit unsubscribe is treated as a subscribe attempt. We log
      // the unrecognized event name loudly so we can extend the match
      // list above, and we still capture the contact so they don't get
      // dropped.
      console.warn(
        `Unrecognized Loops event "${eventName}" with email ${email}. ` +
        `Treating as subscribe to avoid losing the contact. ` +
        `Add this event name to the isSubscribe match list if it should be handled explicitly.`
      );

      const { error } = await supabase
        .from('external_subscribers')
        .upsert({
          email: email.toLowerCase().trim(),
          full_name: fullName,
          source: 'loops',
          segment: segment,
          email_weekly_case: true,
          unsubscribed_at: null,
          notes: `Loops fallback path. Event: ${eventName || 'unknown'}`
        }, {
          onConflict: 'email',
          ignoreDuplicates: false
        });

      if (error) {
        console.error('Supabase fallback upsert failed:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(
        JSON.stringify({ success: true, action: 'upserted_via_fallback', email, eventName }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (e) {
    console.error('Webhook processing error:', e);
    return new Response(JSON.stringify({ error: String(e?.message || e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
});
