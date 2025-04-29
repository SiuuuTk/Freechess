import { Typography, Container } from "@mui/material";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Checkmate Tracker | Improve Your Chess</title>
        <meta
          name="description"
          content="Discover the mission behind Checkmate Tracker, a free platform to analyze, store, and enhance your chess games."
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Checkmate Tracker | Improve Your Chess" />
        <meta
          property="og:description"
          content="Discover the mission behind Checkmate Tracker, a free platform to analyze, store, and enhance your chess games."
        />
        <meta property="og:url" content="https://www.checkmatetracker.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Checkmate Tracker | Improve Your Chess" />
        <meta
          name="twitter:description"
          content="Discover the mission behind Checkmate Tracker, a free platform to analyze, store, and enhance your chess games."
        />
        <meta name="twitter:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />
      </Head>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          About Checkmate Tracker
        </Typography>

        <Typography variant="body1" component="p">
          Checkmate Tracker is a free web application designed to help chess players of all levels analyze their games, play against Stockfish, and store their most important matches. Our new Live Mode also lets you convert games played on a physical chessboard into PGN format, ready for instant analysis with our built-in tools.
        </Typography>

        <Typography variant="body1" component="p">
          Whether you're a casual player or a competitive enthusiast, our tools are built to make your chess journey smarter and more effective. With powerful features like engine-based analysis, move classification, and game storage, Checkmate Tracker helps you improve with every game.
        </Typography>

        <Typography variant="body1" component="p">
          This project is independent and not affiliated with any major chess platform. We aim to keep everything fast, intuitive, and accessible – completely free of charge.
        </Typography>

        <Typography variant="body1" component="p">
          Enjoy the game and reach your full potential!
        </Typography>
      </Container>
    </>
  );
}
