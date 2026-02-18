/**
 * ReasonDx Stripe Payment Integration
 * 
 * This file handles payment processing with Stripe.
 * It uses Stripe Checkout for a secure, hosted payment page.
 * 
 * SETUP:
 * 1. Create a Stripe account at stripe.com
 * 2. Create Products and Prices in Stripe Dashboard
 * 3. Replace the PRICE_IDs below with your actual Stripe Price IDs
 * 4. Deploy the Edge Function (see stripe-webhook.js) to Supabase
 * 5. Set up webhooks in Stripe Dashboard
 */

// ============================================
// CONFIGURATION - Replace with your values
// ============================================

// Your Stripe publishable key (safe to expose in frontend)
const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_publishable_key_here';

// Stripe Price IDs (get these from Stripe Dashboard → Products)
const STRIPE_PRICES = {
    premium_monthly: 'price_xxxxxxxxxxxxx', // $9.99/month
    premium_annual: 'price_xxxxxxxxxxxxx',   // $79.99/year
    team_monthly: 'price_xxxxxxxxxxxxx',     // $6.99/user/month
    team_annual: 'price_xxxxxxxxxxxxx'       // $4.99/user/month (annual)
};

// Your backend endpoint for creating checkout sessions
// If using Supabase Edge Functions:
const CHECKOUT_ENDPOINT = 'https://your-project.supabase.co/functions/v1/create-checkout';
// If using your own server:
// const CHECKOUT_ENDPOINT = 'https://your-api.com/create-checkout';

// ============================================
// STRIPE INITIALIZATION
// ============================================

let stripe = null;

// Load Stripe.js
function loadStripe() {
    return new Promise((resolve, reject) => {
        if (window.Stripe) {
            stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
            resolve(stripe);
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/';
        script.onload = () => {
            stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
            resolve(stripe);
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ============================================
// CHECKOUT FUNCTIONS
// ============================================

/**
 * Start a checkout session for a subscription
 * @param {string} priceKey - One of: 'premium_monthly', 'premium_annual', 'team_monthly', 'team_annual'
 * @param {number} quantity - Number of seats (for team plans)
 * @returns {Promise<void>}
 */
async function startCheckout(priceKey, quantity = 1) {
    try {
        // Ensure Stripe is loaded
        if (!stripe) {
            await loadStripe();
        }
        
        // Ensure user is logged in
        if (!DxAuth.isLoggedIn()) {
            // Save intended purchase and redirect to login
            sessionStorage.setItem('reasondx-pending-checkout', JSON.stringify({ priceKey, quantity }));
            window.location.href = '/auth/login.html';
            return;
        }
        
        // Get the price ID
        const priceId = STRIPE_PRICES[priceKey];
        if (!priceId) {
            throw new Error('Invalid price key: ' + priceKey);
        }
        
        // Create checkout session via your backend
        const response = await fetch(CHECKOUT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session.access_token}`
            },
            body: JSON.stringify({
                priceId,
                quantity,
                userId: DxAuth.user.id,
                userEmail: DxAuth.user.email,
                successUrl: `${window.location.origin}/auth/account.html?session_id={CHECKOUT_SESSION_ID}`,
                cancelUrl: `${window.location.origin}/pricing.html?canceled=true`
            })
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create checkout session');
        }
        
        const { sessionId } = await response.json();
        
        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({ sessionId });
        
        if (error) {
            throw error;
        }
    } catch (error) {
        console.error('Checkout error:', error);
        alert('Unable to start checkout. Please try again or contact support.');
    }
}

/**
 * Open the Stripe Customer Portal for managing subscriptions
 * @returns {Promise<void>}
 */
async function openCustomerPortal() {
    try {
        if (!DxAuth.isLoggedIn()) {
            window.location.href = '/auth/login.html';
            return;
        }
        
        const response = await fetch(`${CHECKOUT_ENDPOINT.replace('create-checkout', 'customer-portal')}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session.access_token}`
            },
            body: JSON.stringify({
                userId: DxAuth.user.id,
                returnUrl: `${window.location.origin}/auth/account.html`
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to create portal session');
        }
        
        const { url } = await response.json();
        window.location.href = url;
    } catch (error) {
        console.error('Customer portal error:', error);
        alert('Unable to open billing portal. Please try again.');
    }
}

// ============================================
// CHECK FOR PENDING CHECKOUT AFTER LOGIN
// ============================================

// After login, check if user was trying to checkout
window.addEventListener('reasondx-auth-change', async (e) => {
    if (e.detail.event === 'SIGNED_IN') {
        const pendingCheckout = sessionStorage.getItem('reasondx-pending-checkout');
        if (pendingCheckout) {
            sessionStorage.removeItem('reasondx-pending-checkout');
            const { priceKey, quantity } = JSON.parse(pendingCheckout);
            await startCheckout(priceKey, quantity);
        }
    }
});

// ============================================
// HANDLE CHECKOUT SUCCESS/CANCEL
// ============================================

// Check URL params on page load
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    
    if (params.get('session_id')) {
        // Checkout was successful
        showSuccessMessage();
    }
    
    if (params.get('canceled') === 'true') {
        // Checkout was canceled
        showCanceledMessage();
    }
});

function showSuccessMessage() {
    // You can customize this
    const banner = document.createElement('div');
    banner.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; padding: 16px; background: #ccfbf1; color: #166534; text-align: center; z-index: 9999;">
            🎉 Welcome to Premium! Your subscription is now active.
            <button onclick="this.parentElement.remove()" style="margin-left: 16px; background: none; border: none; cursor: pointer; font-size: 18px;">×</button>
        </div>
    `;
    document.body.appendChild(banner);
}

function showCanceledMessage() {
    const banner = document.createElement('div');
    banner.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; padding: 16px; background: #fef3c7; color: #92400e; text-align: center; z-index: 9999;">
            Checkout canceled. No charges were made. <a href="/pricing.html" style="color: #92400e; text-decoration: underline;">Try again</a>
            <button onclick="this.parentElement.remove()" style="margin-left: 16px; background: none; border: none; cursor: pointer; font-size: 18px;">×</button>
        </div>
    `;
    document.body.appendChild(banner);
}

// ============================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ============================================

window.DxPayments = {
    startCheckout,
    openCustomerPortal,
    loadStripe,
    STRIPE_PRICES
};
