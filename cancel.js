import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';

export default function Cancel() {
  return (
    <>
      <Head>
        <title>Checkout cancelled — Duskline</title>
      </Head>
      <Header />
      <div className="status-page">
        <h1>Checkout cancelled</h1>
        <p>No charge was made. Your cart is still saved if you'd like to try again.</p>
        <a href="/" className="btn btn-warm">Back to shop</a>
      </div>
      <Footer />
      <CartDrawer />
    </>
  );
}
