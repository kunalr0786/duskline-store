import Stripe from 'stripe';
import { PRODUCTS } from '../../data/products';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to your environment.' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Your cart is empty.' });
    }

    // Re-derive price and name from the server-side catalog rather than trusting
    // the client, so nobody can tamper with prices from the browser.
    const line_items = items.map((cartItem) => {
      const product = PRODUCTS.find((p) => p.id === cartItem.id);
      if (!product) {
        throw new Error(`Unknown product: ${cartItem.id}`);
      }
      const qty = Math.max(1, Math.min(99, Number(cartItem.qty) || 1));

      return {
        quantity: qty,
        price_data: {
          currency: 'usd',
          unit_amount: product.price,
          product_data: {
            name: product.name,
            description: product.blurb
          }
        }
      };
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `${req.headers.origin || 'http://localhost:3000'}`;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB', 'AU', 'IN'] },
      automatic_tax: { enabled: false },
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/cancel`
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout session error:', err);
    return res.status(500).json({ error: err.message || 'Something went wrong creating checkout.' });
  }
}
