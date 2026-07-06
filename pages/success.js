import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { useCart } from '../context/CartContext';

export default function Success() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Order confirmed — Duskline</title>
      </Head>
      <Header />
      <div className="status-page">
        <h1>Order confirmed</h1>
        <p>Thanks for your order. A receipt is on its way to your email from Stripe.</p>
        <a href="/" className="btn btn-warm">Continue shopping</a>
      </div>
      <Footer />
      <CartDrawer />
    </>
  );
}
