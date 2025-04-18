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

        {/* 🌍 SEO Title & Description */}
        <title>Checkmate Tracker – Analyze & Improve Your Chess</title>
        <meta
          name="description"
          content="Analyze your chess games, play vs Stockfish, and track your improvement – all for free on any device!"
        />

        {/* 🟢 Open Graph Meta Tags (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Checkmate Tracker" />
        <meta property="og:title" content="Checkmate Tracker – Analyze & Improve Your Chess" />
        <meta
          property="og:description"
          content="Analyze your chess games, play vs Stockfish, and track your improvement – all for free on any device!"
        />
        <meta property="og:url" content="https://www.checkmatetracker.com/" />
        <meta
          property="og:image"
          content="https://www.checkmatetracker.com/android-chrome-512x512.png"
        />

        {/* 🐦 Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Checkmate Tracker – Analyze & Improve Your Chess" />
        <meta name="twitter:description" content="Play vs Stockfish, save and analyze your chess games. All in your browser." />
        <meta
          name="twitter:image"
          content="https://www.checkmatetracker.com/android-chrome-512x512.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
