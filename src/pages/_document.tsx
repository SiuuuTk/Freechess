import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 🔍 Google Site Verification */}
        <meta
          name="google-site-verification"
          content="Si2mjupcyKtrWvHw1NTgxzMJNbtCY-cJaucGHkwXtDA"
        />

        {/* ✅ Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6723796338953960"
          crossOrigin="anonymous"
        ></script>

        {/* Favicon & Icons */}
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

        {/* SEO Description */}
        <meta
          name="description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />

        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Checkmate Tracker" />
        <meta property="og:url" content="https://www.checkmatetracker.com/" />
        <meta
          property="og:image"
          content="https://www.checkmatetracker.com/android-chrome-512x512.png"
        />
        <meta
          property="og:description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
