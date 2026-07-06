// Placeholder catalog. Swap image URLs for real product photos and adjust
// prices/descriptions freely — everything on the site reads from this file.
// price is in the smallest currency unit (cents) for Stripe.

export const CATEGORIES = [
  {
    slug: 'lights',
    name: 'Fancy Lights',
    accent: 'warm',
    tagline: 'Ambient glow for rooms, desks, and everything between.'
  },
  {
    slug: 'mobile',
    name: 'Mobile Accessories',
    accent: 'cool',
    tagline: 'Chargers, mounts, and cases built for daily carry.'
  },
  {
    slug: 'pc-monitor',
    name: 'PC & Monitor',
    accent: 'cool',
    tagline: 'Light and gear that upgrades your setup, not just your screen.'
  }
];

export const PRODUCTS = [
  // ---- Fancy Lights ----
  {
    id: 'lt-001',
    category: 'lights',
    name: 'Aurora LED Strip, 5m',
    price: 1899,
    blurb: '16 million colors, app + voice control, cut-to-size.',
    seed: 'aurora-strip'
  },
  {
    id: 'lt-002',
    category: 'lights',
    name: 'Halo Smart Table Lamp',
    price: 3499,
    blurb: 'Warm-to-cool dimmable lamp with a soft-touch base.',
    seed: 'halo-lamp'
  },
  {
    id: 'lt-003',
    category: 'lights',
    name: 'Nebula Star Projector',
    price: 2699,
    blurb: 'Rotating galaxy projection with ambient nebula clouds.',
    seed: 'nebula-projector'
  },
  {
    id: 'lt-004',
    category: 'lights',
    name: 'Filament Neon Sign — "GLOW"',
    price: 4299,
    blurb: 'Flexible LED neon on a walnut backboard, USB powered.',
    seed: 'neon-glow'
  },
  {
    id: 'lt-005',
    category: 'lights',
    name: 'Ember Smart Bulb, 2-Pack',
    price: 2199,
    blurb: 'E27 fitting, tunable white, works with most smart hubs.',
    seed: 'ember-bulb'
  },
  {
    id: 'lt-006',
    category: 'lights',
    name: 'Corner Arc Ambient Lamp',
    price: 5499,
    blurb: 'Floor-standing arc lamp with a diffused fabric shade.',
    seed: 'corner-arc-lamp'
  },

  // ---- Mobile Accessories ----
  {
    id: 'mb-001',
    category: 'mobile',
    name: 'Snap Wireless Charger, 15W',
    price: 2499,
    blurb: 'Magnetic alignment, fast charge, slim travel-ready puck.',
    seed: 'snap-charger'
  },
  {
    id: 'mb-002',
    category: 'mobile',
    name: 'Fold Ring Stand + Grip',
    price: 999,
    blurb: 'Low-profile ring holder that folds into a kickstand.',
    seed: 'fold-ring'
  },
  {
    id: 'mb-003',
    category: 'mobile',
    name: 'Armor Glass Screen Protector',
    price: 799,
    blurb: '9H tempered glass, edge-to-edge, bubble-free install kit.',
    seed: 'armor-glass'
  },
  {
    id: 'mb-004',
    category: 'mobile',
    name: 'Braid USB-C Cable, 2m',
    price: 1299,
    blurb: 'Reinforced nylon braid rated for 20,000+ bends.',
    seed: 'braid-cable'
  },
  {
    id: 'mb-005',
    category: 'mobile',
    name: 'Orbit Vent Car Mount',
    price: 1599,
    blurb: 'One-hand release, 360° rotation, vibration-dampened clip.',
    seed: 'orbit-mount'
  },
  {
    id: 'mb-006',
    category: 'mobile',
    name: 'Reserve 10K Power Bank',
    price: 2999,
    blurb: 'Pocketable 10,000mAh with pass-through charging.',
    seed: 'reserve-powerbank'
  },

  // ---- PC & Monitor ----
  {
    id: 'pc-001',
    category: 'pc-monitor',
    name: 'Beam Monitor Light Bar',
    price: 3299,
    blurb: 'Glare-free screen lighting, clips on with no drilling.',
    seed: 'beam-lightbar'
  },
  {
    id: 'pc-002',
    category: 'pc-monitor',
    name: 'Underglow Desk Lamp',
    price: 2799,
    blurb: 'Slim under-monitor bar with warm/cool ambient modes.',
    seed: 'underglow-lamp'
  },
  {
    id: 'pc-003',
    category: 'pc-monitor',
    name: 'Spectrum RGB Case Fans, 3-Pack',
    price: 3999,
    blurb: 'Addressable RGB, daisy-chain hub included.',
    seed: 'spectrum-fans'
  },
  {
    id: 'pc-004',
    category: 'pc-monitor',
    name: 'Halo Ring Webcam, 1080p',
    price: 3599,
    blurb: 'Built-in ring light with adjustable color temperature.',
    seed: 'halo-webcam'
  },
  {
    id: 'pc-005',
    category: 'pc-monitor',
    name: 'Riser Monitor Stand + Storage',
    price: 4499,
    blurb: 'Elevates your screen and tucks accessories underneath.',
    seed: 'riser-stand'
  },
  {
    id: 'pc-006',
    category: 'pc-monitor',
    name: 'Keystroke Mechanical Keyboard',
    price: 5999,
    blurb: 'Hot-swappable switches with per-key RGB.',
    seed: 'keystroke-keyboard'
  }
];

export function getProductsByCategory(slug) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getProductImage(product, size = 600) {
  return `https://picsum.photos/seed/${product.seed}/${size}/${size}`;
}
