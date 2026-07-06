import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="description" content="Fancy ambient lighting, mobile accessories, and PC & monitor gear." />
        <meta name="theme-color" content="#0d1015" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
