import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 🔍 Balise de vérification Google */}
        <meta
          name="google-site-verification"
          content="Si2mjupcyKtrWvHw1NTgxzMJNbtCY-cJaucGHkwXtDA"
        />

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
        <meta
          name="description"
          content="Analyze your chess games for free on any device with Stockfish !"
        />

        {/* Balises OG (Facebook & Twitter) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Checkmate Tracker.web.app" />
        <meta property="og:url" content="https://checkmatetracker.web.app/" />
        <meta
          property="og:image"
          content="https://checkmatetracker.web.app/android-chrome-512x512.png"
        />
        <meta
          property="og:description"
          content="Analyze your chess games for free on any device with Stockfish !"
        />

        {/* Balise Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
