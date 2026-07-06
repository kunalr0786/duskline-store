# Duskline — starter store

A production-ready storefront for fancy lights, mobile accessories, and PC/monitor
gear, with real Stripe checkout. "Duskline" is a placeholder name — see
**Rebranding** below to change it.

## What's included

- Homepage with hero, category browsing, and a full product grid (18 sample products
  across 3 categories in `data/products.js`)
- Client-side cart (persisted in the browser) with a slide-out drawer
- A real checkout flow: clicking "Checkout with Stripe" creates a Stripe Checkout
  Session on the server and redirects to Stripe's hosted payment page
- Success and cancel pages after checkout
- A dark, warm/cool "seam of light" visual identity (see `styles/globals.css`)

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) (18 or newer) installed.

```bash
npm install
cp .env.example .env.local
```

Open `.env.local` and add your Stripe **test** secret key (see step 2), then:

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 2. Get Stripe keys

1. Create a free account at [stripe.com](https://stripe.com).
2. In the Dashboard, make sure you're in **Test mode** (toggle top right).
3. Go to **Developers → API keys** and copy the **Secret key** (starts with `sk_test_`).
4. Paste it into `.env.local` as `STRIPE_SECRET_KEY`.
5. Test a purchase using Stripe's test card: `4242 4242 4242 4242`, any future
   expiry date, any CVC, any ZIP.

You don't need to create products inside Stripe — this site builds the checkout
line items dynamically from `data/products.js`, so pricing always stays in sync
with what's on your site.

## 3. Go live

1. In Stripe, finish **Activate your account** (business details, bank account).
2. Toggle off Test mode and copy your **live** secret key (starts with `sk_live_`).
3. Update the `STRIPE_SECRET_KEY` environment variable with the live key wherever
   you've deployed the site (see below) — never commit real keys to git.

## 4. Deploy

The easiest path is [Vercel](https://vercel.com) (made by the creators of Next.js,
free tier is enough to start):

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New Project** → import that repository.
3. In the project's **Environment Variables**, add:
   - `STRIPE_SECRET_KEY` — your Stripe secret key
   - `NEXT_PUBLIC_SITE_URL` — your deployed URL, e.g. `https://your-store.vercel.app`
     (or your custom domain once you attach one)
4. Click **Deploy**. Vercel gives you a live URL immediately, and you can attach
   your own domain under Project → Settings → Domains.

Any host that supports Next.js (Netlify, Render, your own server) works the same
way — install dependencies, set the two environment variables, run `npm run build`
then `npm run start`.

## 5. Edit your catalog

Everything product-related lives in `data/products.js`:

- Add, remove, or edit products and prices (`price` is in cents, e.g. `1899` = $18.99)
- Categories are defined at the top of the same file
- Product photos currently use placeholder images from picsum.photos — replace
  `getProductImage()` or add real image URLs per product once you have photos

## 6. Rebranding

Replace "Duskline" in:
- `components/Header.js` (logo text)
- `components/Footer.js` (copyright line)
- `pages/index.js` and other pages (`<title>` tags)

The color palette and fonts live at the top of `styles/globals.css` as CSS
variables (`--warm`, `--cool`, `--ink`, etc.) if you'd like to adjust the look.

## Before you launch for real

A few things worth adding once you're ready to accept real orders, which aren't
included in this starter:
- A returns/refund policy and terms of service page
- Shipping rate rules (this starter collects an address but doesn't calculate
  shipping cost — you can add `shipping_options` to the Stripe session, or set
  up Stripe Tax/Shipping in the Dashboard)
- Order/inventory tracking (Stripe's Dashboard shows every payment, but there's
  no admin panel here for stock levels)
- A privacy policy, since you'll be collecting customer emails and addresses

Happy to help build any of these next.
