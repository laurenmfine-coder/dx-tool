const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, customerEmail, successUrl, cancelUrl } = req.body;

    if (!priceId || !customerEmail) {
      return res.status(400).json({ error: 'Missing priceId or customerEmail' });
    }

    // Validate price ID against known prices
    const validPrices = [
      'price_1SvpACDEGaZdouAQ6l2xx5D4', // Monthly $14.99
      'price_1SynQRDEGaZdouAQ4ggXuvpj'  // Annual $99.00
    ];

    if (!validPrices.includes(priceId)) {
      return res.status(400).json({ error: 'Invalid price ID' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || 'https://dx-tool.vercel.app/auth/register.html?checkout=success&session_id={CHECKOUT_SESSION_ID}',
      cancel_url: cancelUrl || 'https://dx-tool.vercel.app/auth/register.html?checkout=cancelled',
      subscription_data: {
        metadata: {
          customerEmail: customerEmail,
        },
      },
      allow_promotion_codes: true,
    });

    return res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return res.status(500).json({ error: error.message });
  }
}
