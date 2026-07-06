Let's recreate that one too, same way:

Add file → Create new file
Name it: components/CartDrawer.js
Paste this:

javascriptimport { useState } from 'react';
import { useCart } from '../context/CartContext';
import { getProductImage } from '../data/products';

export default function CartDrawer() {
  const { items, updateQty, removeItem, subtotal, isOpen, setIsOpen } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items })
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Could not start checkout.');
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="seam-line" />
        <div className="cart-header">
          <h3>Your cart</h3>
          <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close cart">
            ×
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 && <p className="cart-empty">Your cart is empty.</p>}

          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={getProductImage(item, 120)} alt={item.name} />
              <div className="cart-item-info">
                <h5>{item.name}</h5>
                <span className="price">${((item.price * item.qty) / 100).toFixed(2)}</span>
                <div className="qty-row">
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">
                    +
                  </button>
                  <span className="remove-link" onClick={() => removeItem(item.id)}>
                    Remove
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="subtotal-row">
            <span>Subtotal</span>
            <span>${(subtotal / 100).toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout} disabled={items.length === 0 || loading}>
            {loading ? 'Redirecting to checkout…' : 'Checkout with Stripe'}
          </button>
          {error && <p className="checkout-note" style={{ color: '#ff8f8f' }}>{error}</p>}
          <p className="checkout-note">Shipping and tax are calculated at checkout.</p>
        </div>
      </aside>
    </>
  );
}
