export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <span>© {new Date().getFullYear()} Duskline. Placeholder name — swap this in data/products.js and components/Header.js.</span>
        <div className="footer-links">
          <a href="mailto:hello@example.com">Contact</a>
          <a href="/#lights">Lights</a>
          <a href="/#mobile">Mobile</a>
          <a href="/#pc-monitor">PC &amp; Monitor</a>
        </div>
      </div>
    </footer>
  );
}
