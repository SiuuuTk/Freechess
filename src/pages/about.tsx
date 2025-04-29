import { Typography, Container } from "@mui/material";
import { NextSeo } from "next-seo";

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="About Checkmate Tracker | Improve Your Chess"
        description="Discover the mission behind Checkmate Tracker, a free platform to analyze, store, and enhance your chess games."
        canonical="https://www.checkmatetracker.com/about"
        openGraph={{
          url: "https://www.checkmatetracker.com/about",
          title: "About Checkmate Tracker | Improve Your Chess",
          description:
            "Discover the mission behind Checkmate Tracker, a free platform to analyze, store, and enhance your chess games.",
          type: "website",
          images: [
            {
              url: "https://www.checkmatetracker.com/android-chrome-512x512.png",
              width: 512,
              height: 512,
              alt: "Checkmate Tracker Logo",
            },
          ],
          siteName: "Checkmate Tracker",
        }}
        twitter={{
          handle: "@CheckmateTracker",
          site: "@CheckmateTracker",
          cardType: "summary_large_image",
        }}
      />

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          About Checkmate Tracker
        </Typography>

        <Typography variant="body1" component="p">
          Checkmate Tracker is a free web application designed to help chess
          players of all levels analyze their games, play against Stockfish, and
          store their most important matches. Our new Live Mode also lets you
          convert games played on a physical chessboard into PGN format, ready
          for instant analysis with our built-in tools.
        </Typography>

        <Typography variant="body1" component="p">
          Whether you're a casual player or a competitive enthusiast, our tools
          are built to make your chess journey smarter and more effective. With
          powerful features like engine-based analysis, move classification, and
          game storage, Checkmate Tracker helps you improve with every game.
        </Typography>

        <Typography variant="body1" component="p">
          This project is independent and not affiliated with any major chess
          platform. We aim to keep everything fast, intuitive, and accessible –
          completely free of charge.
        </Typography>

        <Typography variant="body1" component="p">
          Enjoy the game and reach your full potential!
        </Typography>
      </Container>
    </>
  );
}
