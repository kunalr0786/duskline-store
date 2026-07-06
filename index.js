import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import { CATEGORIES, getProductsByCategory } from '../data/products';

export default function Home() {
  return (
    <>
      <Head>
        <title>Duskline — Fancy Lights, Mobile &amp; PC Accessories</title>
      </Head>

      <Header />

      <section className="hero">
        <div className="seam-glow-bg" aria-hidden="true" />
        <div className="wrap hero-inner">
          <span className="eyebrow">Ambient lighting · mobile · desk setups</span>
          <h1>
            Light for your room, <em>and</em> your screen.
          </h1>
          <p className="sub">
            Duskline carries ambient lighting, mobile accessories, and PC &amp; monitor gear —
            the everyday things that quietly make a space feel considered.
          </p>
          <div className="hero-ctas">
            <a href="#lights" className="btn btn-warm">Shop Lights</a>
            <a href="#pc-monitor" className="btn btn-cool">Shop Tech</a>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="category-strip">
          {CATEGORIES.map((cat) => (
            <a href={`#${cat.slug}`} className="category-card" key={cat.slug}>
              <span className={`tag tag-${cat.accent}`}>{cat.accent === 'warm' ? 'Ambient' : 'Tech'}</span>
              <h3>{cat.name}</h3>
              <p>{cat.tagline}</p>
            </a>
          ))}
        </div>

        {CATEGORIES.map((cat) => (
          <div key={cat.slug} id={cat.slug}>
            <div className="section-heading">
              <h2>{cat.name}</h2>
              <span>{getProductsByCategory(cat.slug).length} items</span>
            </div>
            <div className="product-grid">
              {getProductsByCategory(cat.slug).map((product) => (
                <ProductCard product={product} accent={cat.accent} key={product.id} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
      <CartDrawer />
    </>
  );
}
