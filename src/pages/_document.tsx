import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Meta techniques (pas de SEO ici) */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="google-site-verification"
          content="Si2mjupcyKtrWvHw1NTgxzMJNbtCY-cJaucGHkwXtDA"
        />

        {/* ✅ Global Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6723796338953960"
          crossOrigin="anonymous"
        ></script>

        {/* ✅ Favicon & Icons */}
        <link
          rel="apple-touch-icon"
          sizes="270x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
