/**
 * Supabase Edge Function: create-checkout
 * 
 * This function creates a Stripe Checkout Session.
 * Deploy this to Supabase Edge Functions.
 * 
 * DEPLOYMENT:
 * 1. Install Supabase CLI: npm install -g supabase
 * 2. Login: supabase login
 * 3. Link project: supabase link --project-ref your-project-id
 * 4. Create function: supabase functions new create-checkout
 * 5. Copy this code to supabase/functions/create-checkout/index.ts
 * 6. Set secrets: 
 *    supabase secrets set STRIPE_SECRET_KEY=sk_live_xxxxx
 *    supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_xxxxx
 * 7. Deploy: supabase functions deploy create-checkout
 * 
 * FILE: supabase/functions/create-checkout/index.ts
 */

// @ts-ignore
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
// @ts-ignore
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
    apiVersion: '2023-10-16',
    httpClient: Stripe.createFetchHttpClient(),
})

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { priceId, quantity, userId, userEmail, successUrl, cancelUrl } = await req.json()

        // Validate inputs
        if (!priceId || !userId || !userEmail) {
            throw new Error('Missing required fields')
        }

        // Check if customer already exists in Stripe
        const existingCustomers = await stripe.customers.list({
            email: userEmail,
            limit: 1
        })

        let customerId: string
        if (existingCustomers.data.length > 0) {
            customerId = existingCustomers.data[0].id
        } else {
            // Create new customer
            const customer = await stripe.customers.create({
                email: userEmail,
                metadata: {
                    supabase_user_id: userId
                }
            })
            customerId = customer.id
        }

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            line_items: [
                {
                    price: priceId,
                    quantity: quantity || 1,
                },
            ],
            mode: 'subscription',
            success_url: successUrl,
            cancel_url: cancelUrl,
            subscription_data: {
                metadata: {
                    supabase_user_id: userId
                },
                trial_period_days: 7 // 7-day free trial
            },
            allow_promotion_codes: true,
            billing_address_collection: 'auto',
        })

        return new Response(
            JSON.stringify({ sessionId: session.id }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200,
            }
        )
    } catch (error) {
        console.error('Error:', error)
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 400,
            }
        )
    }
})


/**
 * Supabase Edge Function: stripe-webhook
 * 
 * This function handles Stripe webhooks to update subscription status.
 * Deploy this to Supabase Edge Functions.
 * 
 * SETUP IN STRIPE:
 * 1. Go to Stripe Dashboard → Webhooks
 * 2. Add endpoint: https://your-project.supabase.co/functions/v1/stripe-webhook
 * 3. Select events:
 *    - checkout.session.completed
 *    - customer.subscription.created
 *    - customer.subscription.updated
 *    - customer.subscription.deleted
 *    - invoice.payment_succeeded
 *    - invoice.payment_failed
 * 4. Copy the webhook signing secret and set it in Supabase secrets
 * 
 * FILE: supabase/functions/stripe-webhook/index.ts
 */

/*
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
    apiVersion: '2023-10-16',
    httpClient: Stripe.createFetchHttpClient(),
})

const supabase = createClient(
    Deno.env.get('SUPABASE_URL') as string,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string
)

serve(async (req: Request) => {
    const signature = req.headers.get('stripe-signature')
    const body = await req.text()

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature!,
            Deno.env.get('STRIPE_WEBHOOK_SECRET') as string
        )
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message)
        return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400 })
    }

    console.log('Received webhook:', event.type)

    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session
                const userId = session.metadata?.supabase_user_id || 
                              session.subscription_data?.metadata?.supabase_user_id

                if (userId) {
                    await supabase
                        .from('profiles')
                        .update({
                            subscription_tier: 'premium',
                            stripe_customer_id: session.customer as string,
                            subscription_status: 'active'
                        })
                        .eq('id', userId)
                }
                break
            }

            case 'customer.subscription.updated': {
                const subscription = event.data.object as Stripe.Subscription
                const customerId = subscription.customer as string

                // Get user by Stripe customer ID
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('id')
                    .eq('stripe_customer_id', customerId)
                    .single()

                if (profile) {
                    const tier = subscription.status === 'active' ? 'premium' : 'free'
                    await supabase
                        .from('profiles')
                        .update({
                            subscription_tier: tier,
                            subscription_status: subscription.status
                        })
                        .eq('id', profile.id)
                }
                break
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription
                const customerId = subscription.customer as string

                await supabase
                    .from('profiles')
                    .update({
                        subscription_tier: 'free',
                        subscription_status: 'canceled'
                    })
                    .eq('stripe_customer_id', customerId)
                break
            }

            case 'invoice.payment_failed': {
                const invoice = event.data.object as Stripe.Invoice
                const customerId = invoice.customer as string

                // You might want to send an email notification here
                console.log('Payment failed for customer:', customerId)
                break
            }
        }

        return new Response(JSON.stringify({ received: true }), { status: 200 })
    } catch (err) {
        console.error('Webhook handler error:', err)
        return new Response(JSON.stringify({ error: 'Webhook handler failed' }), { status: 500 })
    }
})
*/


/**
 * Supabase Edge Function: customer-portal
 * 
 * Creates a Stripe Customer Portal session for managing subscriptions.
 * 
 * FILE: supabase/functions/customer-portal/index.ts
 */

/*
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@12.0.0?target=deno'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') as string, {
    apiVersion: '2023-10-16',
    httpClient: Stripe.createFetchHttpClient(),
})

const supabase = createClient(
    Deno.env.get('SUPABASE_URL') as string,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string
)

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { userId, returnUrl } = await req.json()

        // Get user's Stripe customer ID
        const { data: profile, error } = await supabase
            .from('profiles')
            .select('stripe_customer_id')
            .eq('id', userId)
            .single()

        if (error || !profile?.stripe_customer_id) {
            throw new Error('No subscription found')
        }

        // Create portal session
        const session = await stripe.billingPortal.sessions.create({
            customer: profile.stripe_customer_id,
            return_url: returnUrl,
        })

        return new Response(
            JSON.stringify({ url: session.url }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200,
            }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 400,
            }
        )
    }
})
*/
