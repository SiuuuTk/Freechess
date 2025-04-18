import { Typography, Container } from "@mui/material";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Checkmate Tracker</title>
        <meta
          name="description"
          content="Learn more about Checkmate Tracker – your go-to platform for analyzing, saving, and improving your chess games."
        />
      </Head>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          About Checkmate Tracker
        </Typography>

        <Typography variant="body1" component="p">
          Checkmate Tracker is a free web application designed to help chess
          players of all levels analyze their games, play against Stockfish, and
          store their most important matches.
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
