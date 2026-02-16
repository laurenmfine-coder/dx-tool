/**
 * ReasonDx Referral & Coupon System — Stripe Integration
 * 
 * This module handles the referral program's backend logic:
 * - Generating unique referral codes per user
 * - Validating referral codes at signup
 * - Creating Stripe promotion codes and coupons
 * - Applying credits to referrer subscriptions
 * - Tracking referral counts and tier rewards
 * 
 * ARCHITECTURE:
 * ┌──────────┐    ┌──────────────┐    ┌──────────────┐
 * │ Frontend │───▶│ Google Apps  │───▶│ Stripe API   │
 * │ register │    │ Script (GAS) │    │ (coupons,    │
 * │ .html    │    │ or Edge Fn   │    │  promos,     │
 * └──────────┘    └──────────────┘    │  credits)    │
 *                                      └──────────────┘
 * 
 * SETUP STEPS:
 * 1. Create Stripe products/prices for Pro and Beta tiers
 * 2. Deploy the server-side functions (GAS or Supabase Edge)
 * 3. Set STRIPE_SECRET_KEY in your server environment
 * 4. Configure webhook endpoint for subscription events
 * 5. Update CONFIG below with your Stripe Price IDs
 */

// ============================================
// CONFIGURATION
// ============================================
const REFERRAL_CONFIG = {
    // Stripe Price IDs — replace with your actual IDs from Stripe Dashboard
    STRIPE_PRICES: {
        pro_monthly:  'price_pro_monthly_placeholder',
        pro_annual:   'price_pro_annual_placeholder',
        beta_monthly: 'price_beta_monthly_placeholder',
        beta_annual:  'price_beta_annual_placeholder'
    },

    // Referral reward tiers
    // Key = number of successful referrals, Value = free months awarded
    REWARD_TIERS: {
        1: 1,    // 1 referral  → 1 free month for referrer
        3: 4,    // 3 referrals → 4 free months (semester)
        5: 12    // 5 referrals → 12 free months (full year)
    },

    // New user bonus when they sign up with a valid referral code
    NEW_USER_BONUS_MONTHS: 1,

    // Referral code format: REF-{2 initials}{4 digits}
    CODE_PATTERN: /^REF-[A-Z]{2}\d{4}$/,

    // Backend endpoint (Google Apps Script or Edge Function)
    BACKEND_URL: 'YOUR_BACKEND_URL_HERE'
};


// ============================================
// REFERRAL CODE MANAGEMENT
// ============================================

/**
 * Generate a unique referral code for a new user
 * Format: REF-{FirstInitial}{LastInitial}{4 random digits}
 * Example: REF-JD7842
 */
function generateReferralCode(firstName, lastName) {
    const initials = (firstName[0] + lastName[0]).toUpperCase();
    const digits = Math.floor(1000 + Math.random() * 9000);
    return `REF-${initials}${digits}`;
}

/**
 * Validate referral code format
 */
function isValidReferralCode(code) {
    return REFERRAL_CONFIG.CODE_PATTERN.test(code);
}

/**
 * Check if a referral code exists and is active
 * Calls backend to verify against the user database
 */
async function validateReferralCode(code) {
    try {
        const response = await fetch(`${REFERRAL_CONFIG.BACKEND_URL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'validate_referral',
                referralCode: code.toUpperCase()
            })
        });
        const data = await response.json();
        return { valid: data.valid, referrerEmail: data.referrerEmail || null };
    } catch (error) {
        console.error('Referral validation error:', error);
        return { valid: false, referrerEmail: null };
    }
}


// ============================================
// STRIPE COUPON & PROMOTION CODE CREATION
// ============================================

/**
 * SERVER-SIDE FUNCTION (deploy to GAS or Supabase Edge)
 * 
 * Creates a Stripe coupon for the referral reward.
 * This is called from your backend, NOT the browser.
 * 
 * Example Google Apps Script implementation:
 * 
 * function createReferralCoupon(freeMonths, referrerEmail) {
 *     const stripe = StripeAPI.init('sk_live_xxxxx');
 *     
 *     // Create a coupon: 100% off for N months
 *     const coupon = stripe.coupons.create({
 *         percent_off: 100,
 *         duration: 'repeating',
 *         duration_in_months: freeMonths,
 *         metadata: {
 *             type: 'referral_reward',
 *             referrer_email: referrerEmail
 *         }
 *     });
 *     
 *     return coupon.id;
 * }
 */

/**
 * SERVER-SIDE: Apply referral reward to referrer's subscription
 * 
 * When a new user signs up with a referral code, the backend:
 * 1. Looks up the referrer's Stripe customer ID
 * 2. Increments their referral count
 * 3. Checks if they've hit a reward tier
 * 4. Creates and applies the appropriate Stripe coupon
 * 
 * Stripe API calls needed:
 * 
 * // 1. Find referrer's subscription
 * const subscriptions = await stripe.subscriptions.list({
 *     customer: referrerStripeCustomerId,
 *     status: 'active',
 *     limit: 1
 * });
 * 
 * // 2. Create a coupon for the reward
 * const coupon = await stripe.coupons.create({
 *     percent_off: 100,
 *     duration: 'repeating',
 *     duration_in_months: rewardMonths,
 *     name: `Referral Reward: ${rewardMonths} free month(s)`
 * });
 * 
 * // 3. Apply coupon to the referrer's subscription
 * await stripe.subscriptions.update(subscriptions.data[0].id, {
 *     coupon: coupon.id
 * });
 * 
 * // 4. Also apply new-user bonus to the new subscriber
 * const newUserCoupon = await stripe.coupons.create({
 *     percent_off: 100,
 *     duration: 'repeating',
 *     duration_in_months: 1,
 *     name: 'Referral Welcome: 1 free month'
 * });
 */


// ============================================
// REFERRAL TRACKING (Google Sheets Ledger)
// ============================================

/**
 * Log a referral event to Google Sheets
 * This creates an auditable trail of all referral activity
 * 
 * Sheet columns:
 * | Timestamp | Referrer Code | Referrer Email | New User Email | 
 * | New User Plan | Reward Applied | Stripe Coupon ID | Status |
 */
async function logReferral(data) {
    try {
        await fetch(REFERRAL_CONFIG.BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'log_referral',
                timestamp: new Date().toISOString(),
                referrerCode: data.referrerCode,
                referrerEmail: data.referrerEmail,
                newUserEmail: data.newUserEmail,
                newUserPlan: data.newUserPlan,
                rewardApplied: data.rewardMonths || 0,
                stripeCouponId: data.stripeCouponId || 'pending',
                status: data.status || 'completed'
            })
        });
    } catch (error) {
        console.error('Referral logging error:', error);
    }
}

/**
 * Get referral stats for a user (for their dashboard)
 */
async function getReferralStats(userEmail) {
    try {
        const response = await fetch(REFERRAL_CONFIG.BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'get_referral_stats',
                email: userEmail
            })
        });
        const data = await response.json();
        return {
            referralCode: data.referralCode,
            totalReferrals: data.totalReferrals || 0,
            freeMonthsEarned: data.freeMonthsEarned || 0,
            freeMonthsUsed: data.freeMonthsUsed || 0,
            nextTier: getNextRewardTier(data.totalReferrals || 0),
            referrals: data.referrals || []
        };
    } catch (error) {
        console.error('Stats error:', error);
        return { totalReferrals: 0, freeMonthsEarned: 0, nextTier: null };
    }
}

/**
 * Calculate the next reward tier a user is approaching
 */
function getNextRewardTier(currentReferrals) {
    const tiers = Object.entries(REFERRAL_CONFIG.REWARD_TIERS)
        .map(([count, months]) => ({ count: parseInt(count), months }))
        .sort((a, b) => a.count - b.count);
    
    for (const tier of tiers) {
        if (currentReferrals < tier.count) {
            return {
                referralsNeeded: tier.count - currentReferrals,
                totalRequired: tier.count,
                rewardMonths: tier.months,
                label: tier.months === 1 ? '1 free month' :
                       tier.months <= 6 ? `${tier.months} free months` :
                       'Free year'
            };
        }
    }
    return null; // User has hit the highest tier
}

/**
 * Calculate total reward for a given referral count
 * Rewards are cumulative: 1st referral = 1mo, 3rd = +4mo, 5th = +12mo
 */
function calculateTotalReward(referralCount) {
    let totalMonths = 0;
    const tiers = Object.entries(REFERRAL_CONFIG.REWARD_TIERS)
        .map(([count, months]) => ({ count: parseInt(count), months }))
        .sort((a, b) => a.count - b.count);
    
    for (const tier of tiers) {
        if (referralCount >= tier.count) {
            totalMonths = tier.months; // Replace, not add (tiers are cumulative)
        }
    }
    return totalMonths;
}


// ============================================
// GOOGLE APPS SCRIPT — SERVER DEPLOYMENT
// ============================================

/**
 * DEPLOY THIS TO GOOGLE APPS SCRIPT
 * This handles the server-side referral processing
 * 
 * To deploy:
 * 1. Go to script.google.com
 * 2. Create new project
 * 3. Paste this function
 * 4. Deploy as web app (Execute as: Me, Access: Anyone)
 * 5. Copy the web app URL to REFERRAL_CONFIG.BACKEND_URL
 * 
 * Required: Stripe Apps Script library or manual HTTP calls
 */

/*
// ---- PASTE INTO GOOGLE APPS SCRIPT ----

const STRIPE_SECRET = PropertiesService.getScriptProperties().getProperty('STRIPE_SECRET_KEY');
const SHEET_ID = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

function doPost(e) {
    const data = JSON.parse(e.postData.contents);
    
    switch (data.action) {
        case 'validate_referral':
            return ContentService.createTextOutput(JSON.stringify(
                validateReferral(data.referralCode)
            )).setMimeType(ContentService.MimeType.JSON);
            
        case 'log_referral':
            return ContentService.createTextOutput(JSON.stringify(
                logReferralToSheet(data)
            )).setMimeType(ContentService.MimeType.JSON);
            
        case 'process_referral_reward':
            return ContentService.createTextOutput(JSON.stringify(
                processReferralReward(data)
            )).setMimeType(ContentService.MimeType.JSON);
            
        case 'get_referral_stats':
            return ContentService.createTextOutput(JSON.stringify(
                getReferralStatsFromSheet(data.email)
            )).setMimeType(ContentService.MimeType.JSON);
            
        default:
            return ContentService.createTextOutput(JSON.stringify(
                { error: 'Unknown action' }
            )).setMimeType(ContentService.MimeType.JSON);
    }
}

function validateReferral(code) {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Users');
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const codeCol = headers.indexOf('referralCode');
    const emailCol = headers.indexOf('email');
    
    for (let i = 1; i < data.length; i++) {
        if (data[i][codeCol] === code) {
            return { valid: true, referrerEmail: data[i][emailCol] };
        }
    }
    return { valid: false };
}

function logReferralToSheet(data) {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Referrals');
    if (!sheet) {
        const ss = SpreadsheetApp.openById(SHEET_ID);
        const newSheet = ss.insertSheet('Referrals');
        newSheet.appendRow([
            'Timestamp', 'Referrer Code', 'Referrer Email', 'New User Email',
            'New User Plan', 'Reward Months', 'Stripe Coupon ID', 'Status'
        ]);
    }
    
    const refSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Referrals');
    refSheet.appendRow([
        data.timestamp, data.referrerCode, data.referrerEmail,
        data.newUserEmail, data.newUserPlan, data.rewardApplied,
        data.stripeCouponId, data.status
    ]);
    
    return { success: true };
}

function processReferralReward(data) {
    // Count total referrals for this referrer
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Referrals');
    const allData = sheet.getDataRange().getValues();
    const referralCount = allData.filter(row => 
        row[1] === data.referrerCode && row[7] === 'completed'
    ).length;
    
    // Determine reward tier
    const TIERS = { 1: 1, 3: 4, 5: 12 };
    let rewardMonths = 0;
    for (const [threshold, months] of Object.entries(TIERS)) {
        if (referralCount >= parseInt(threshold)) {
            rewardMonths = months;
        }
    }
    
    if (rewardMonths === 0) return { success: true, reward: 0 };
    
    // Create Stripe coupon via HTTP
    const couponResponse = UrlFetchApp.fetch('https://api.stripe.com/v1/coupons', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + STRIPE_SECRET,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        payload: {
            'percent_off': 100,
            'duration': 'repeating',
            'duration_in_months': rewardMonths,
            'name': 'Referral Reward: ' + rewardMonths + ' free month(s)',
            'metadata[referrer_code]': data.referrerCode,
            'metadata[type]': 'referral_reward'
        }
    });
    
    const coupon = JSON.parse(couponResponse.getContentText());
    
    // Apply to referrer's subscription
    // First, find their Stripe customer ID from Users sheet
    const usersSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Users');
    const users = usersSheet.getDataRange().getValues();
    const headers = users[0];
    const emailCol = headers.indexOf('email');
    const stripeCol = headers.indexOf('stripeCustomerId');
    
    let referrerStripeId = null;
    for (let i = 1; i < users.length; i++) {
        if (users[i][emailCol] === data.referrerEmail) {
            referrerStripeId = users[i][stripeCol];
            break;
        }
    }
    
    if (referrerStripeId) {
        // Get active subscription
        const subsResponse = UrlFetchApp.fetch(
            'https://api.stripe.com/v1/subscriptions?customer=' + referrerStripeId + '&status=active&limit=1',
            { headers: { 'Authorization': 'Bearer ' + STRIPE_SECRET } }
        );
        const subs = JSON.parse(subsResponse.getContentText());
        
        if (subs.data.length > 0) {
            // Apply coupon to subscription
            UrlFetchApp.fetch('https://api.stripe.com/v1/subscriptions/' + subs.data[0].id, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + STRIPE_SECRET,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                payload: { 'coupon': coupon.id }
            });
        }
    }
    
    // Also create welcome coupon for new user (1 free month)
    const welcomeCouponResponse = UrlFetchApp.fetch('https://api.stripe.com/v1/coupons', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + STRIPE_SECRET,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        payload: {
            'percent_off': 100,
            'duration': 'repeating',
            'duration_in_months': 1,
            'name': 'Referral Welcome: 1 free month',
            'metadata[type]': 'referral_welcome',
            'metadata[referred_by]': data.referrerCode
        }
    });
    
    const welcomeCoupon = JSON.parse(welcomeCouponResponse.getContentText());
    
    return {
        success: true,
        reward: rewardMonths,
        couponId: coupon.id,
        welcomeCouponId: welcomeCoupon.id
    };
}

function getReferralStatsFromSheet(email) {
    const usersSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Users');
    const users = usersSheet.getDataRange().getValues();
    const headers = users[0];
    const emailCol = headers.indexOf('email');
    const codeCol = headers.indexOf('referralCode');
    
    let referralCode = null;
    for (let i = 1; i < users.length; i++) {
        if (users[i][emailCol] === email) {
            referralCode = users[i][codeCol];
            break;
        }
    }
    
    if (!referralCode) return { totalReferrals: 0, freeMonthsEarned: 0 };
    
    const refSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Referrals');
    if (!refSheet) return { referralCode, totalReferrals: 0, freeMonthsEarned: 0 };
    
    const refData = refSheet.getDataRange().getValues();
    const referrals = refData.filter(row => row[1] === referralCode && row[7] === 'completed');
    
    const TIERS = { 1: 1, 3: 4, 5: 12 };
    let freeMonthsEarned = 0;
    for (const [threshold, months] of Object.entries(TIERS)) {
        if (referrals.length >= parseInt(threshold)) {
            freeMonthsEarned = months;
        }
    }
    
    return {
        referralCode,
        totalReferrals: referrals.length,
        freeMonthsEarned,
        referrals: referrals.map(row => ({
            date: row[0],
            newUserEmail: row[3],
            plan: row[4]
        }))
    };
}

// ---- END GOOGLE APPS SCRIPT ----
*/


// ============================================
// STRIPE WEBHOOK HANDLER (for Edge Functions)
// ============================================

/**
 * DEPLOY AS SUPABASE EDGE FUNCTION OR EXPRESS ROUTE
 * 
 * Webhook events to listen for:
 * - checkout.session.completed → New subscriber, check for referral
 * - customer.subscription.deleted → Track churn
 * - invoice.paid → Confirm payment went through
 * 
 * Setup in Stripe Dashboard:
 * 1. Go to Developers → Webhooks
 * 2. Add endpoint: https://your-domain.com/api/stripe-webhook
 * 3. Select events: checkout.session.completed, invoice.paid
 * 4. Copy signing secret to STRIPE_WEBHOOK_SECRET
 */

/*
// ---- EDGE FUNCTION / EXPRESS ROUTE ----

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function handleWebhook(req) {
    const sig = req.headers['stripe-signature'];
    let event;
    
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }
    
    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object;
            const referralCode = session.metadata?.referral_code;
            
            if (referralCode) {
                // A referred user just subscribed — process the reward
                await processReferralAfterCheckout(session, referralCode);
            }
            break;
        }
        
        case 'invoice.paid': {
            const invoice = event.data.object;
            // Track successful payments for referral verification
            console.log(`Invoice paid: ${invoice.id} for customer ${invoice.customer}`);
            break;
        }
    }
    
    return new Response(JSON.stringify({ received: true }), { status: 200 });
}

async function processReferralAfterCheckout(session, referralCode) {
    // 1. Find the referrer by their code
    // (query your database/sheets for the referrer's Stripe customer ID)
    
    // 2. Count their total referrals
    
    // 3. Create and apply the appropriate coupon
    // (see processReferralReward in the GAS section above)
    
    // 4. Apply welcome coupon to the new subscriber
    const welcomeCoupon = await stripe.coupons.create({
        percent_off: 100,
        duration: 'repeating',
        duration_in_months: 1,
        name: 'Referral Welcome Bonus',
        metadata: { type: 'referral_welcome', referred_by: referralCode }
    });
    
    await stripe.subscriptions.update(session.subscription, {
        coupon: welcomeCoupon.id
    });
    
    // 5. Log to your tracking system
    console.log(`Referral processed: ${referralCode} → ${session.customer_email}`);
}

// ---- END EDGE FUNCTION ----
*/


// ============================================
// FRONTEND INTEGRATION
// ============================================

/**
 * Process referral during checkout
 * Called from register.html when creating a Stripe checkout session
 * Passes the referral code as metadata so the webhook can process it
 */
async function createCheckoutWithReferral(priceKey, referralCode = null) {
    const priceId = REFERRAL_CONFIG.STRIPE_PRICES[priceKey];
    if (!priceId) throw new Error('Invalid price key');

    const checkoutData = {
        priceId,
        successUrl: `${window.location.origin}/auth/account.html?session_id={CHECKOUT_SESSION_ID}&ref_applied=true`,
        cancelUrl: `${window.location.origin}/pricing.html?canceled=true`
    };

    // Pass referral code as checkout session metadata
    if (referralCode && isValidReferralCode(referralCode)) {
        checkoutData.metadata = {
            referral_code: referralCode
        };
        // Server-side: stripe.checkout.sessions.create({
        //   ...checkoutData,
        //   subscription_data: {
        //     metadata: { referral_code: referralCode }
        //   }
        // });
    }

    // In production, this calls your backend to create the checkout session
    // The backend passes metadata through to Stripe
    try {
        const response = await fetch(REFERRAL_CONFIG.BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'create_checkout',
                ...checkoutData
            })
        });
        const { sessionId } = await response.json();
        
        // Redirect to Stripe Checkout
        const stripe = await loadStripe();
        await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
        console.error('Checkout error:', error);
    }
}


// ============================================
// EXPORT
// ============================================
window.DxReferral = {
    generateReferralCode,
    isValidReferralCode,
    validateReferralCode,
    logReferral,
    getReferralStats,
    getNextRewardTier,
    calculateTotalReward,
    createCheckoutWithReferral,
    CONFIG: REFERRAL_CONFIG
};
