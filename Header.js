import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { count, setIsOpen } = useCart();

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true" />
          Duskline
        </Link>

        <nav className="main-nav">
          <a href="/#lights">Lights</a>
          <a href="/#mobile">Mobile</a>
          <a href="/#pc-monitor">PC &amp; Monitor</a>
        </nav>

        <button className="cart-button" onClick={() => setIsOpen(true)} aria-label="Open cart">
          Cart · {count}
        </button>
      </div>
      <div className="seam-line" />
    </header>
  );
}
