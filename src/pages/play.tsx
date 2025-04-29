import { PageTitle } from "@/components/pageTitle";
import Board from "@/sections/play/board";
import GameInProgress from "@/sections/play/gameInProgress";
import GameRecap from "@/sections/play/gameRecap";
import GameSettingsButton from "@/sections/play/gameSettings/gameSettingsButton";
import { isGameInProgressAtom } from "@/sections/play/states";
import { Grid2 as Grid } from "@mui/material";
import { useAtomValue } from "jotai";
import Head from "next/head";

export default function Play() {
  const isGameInProgress = useAtomValue(isGameInProgressAtom);

  return (
    <>
      <Head>
        <title>Play Chess vs Stockfish | Checkmate Tracker</title>
        <meta
          name="description"
          content="Play chess against Stockfish directly in your browser. No registration needed, customizable settings, and instant game analysis."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Play Chess vs Stockfish | Checkmate Tracker" />
        <meta
          property="og:description"
          content="Play chess against Stockfish directly in your browser. No registration needed, customizable settings, and instant game analysis."
        />
        <meta property="og:url" content="https://www.checkmatetracker.com/play" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Play Chess vs Stockfish | Checkmate Tracker" />
        <meta
          name="twitter:description"
          content="Play chess against Stockfish directly in your browser. No registration needed, customizable settings, and instant game analysis."
        />
        <meta name="twitter:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />
      </Head>

      <Grid container gap={4} justifyContent="space-evenly" alignItems="start">
        <PageTitle title="Checkmate Tracker Play vs Stockfish" />

        <Board />

        <Grid
          container
          marginTop={{ xs: 0, md: "2.5em" }}
          justifyContent="center"
          alignItems="center"
          borderRadius={2}
          border={1}
          borderColor={"secondary.main"}
          size={{
            xs: 12,
            md: "grow",
          }}
          sx={{
            backgroundColor: "secondary.main",
            borderColor: "primary.main",
            borderWidth: 2,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
          padding={3}
          rowGap={3}
          style={{
            maxWidth: "400px",
          }}
        >
          <GameInProgress />
          {!isGameInProgress && <GameSettingsButton />}
          <GameRecap />
        </Grid>
      </Grid>
    </>
  );
}
