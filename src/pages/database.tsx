import { Grid2 as Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import {
  DataGrid,
  GridColDef,
  GridLocaleText,
  GRID_DEFAULT_LOCALE_TEXT,
  GridActionsCellItem,
  GridRowId,
} from "@mui/x-data-grid";
import { useCallback, useMemo } from "react";
import { blue, red } from "@mui/material/colors";
import LoadGameButton from "@/sections/loadGame/loadGameButton";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { useRouter } from "next/router";
import { PageTitle } from "@/components/pageTitle";
import Head from "next/head";

const gridLocaleText: GridLocaleText = {
  ...GRID_DEFAULT_LOCALE_TEXT,
  noRowsLabel: "No games found",
};

export default function GameDatabase() {
  const { games, deleteGame } = useGameDatabase(true);
  const router = useRouter();

  const handleDeleteGameRow = useCallback(
    (id: GridRowId) => async () => {
      if (typeof id !== "number") {
        throw new Error("Unable to remove game");
      }
      await deleteGame(id);
    },
    [deleteGame]
  );

  const handleCopyGameRow = useCallback(
    (id: GridRowId) => async () => {
      if (typeof id !== "number") {
        throw new Error("Unable to copy game");
      }
      await navigator.clipboard.writeText(games[id - 1].pgn);
    },
    [games]
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "event",
        headerName: "Event",
        width: 150,
      },
      {
        field: "site",
        headerName: "Site",
        width: 150,
      },
      {
        field: "date",
        headerName: "Date",
        width: 150,
      },
      {
        field: "round",
        headerName: "Round",
        headerAlign: "center",
        align: "center",
        width: 150,
      },
      {
        field: "whiteLabel",
        headerName: "White",
        width: 200,
        headerAlign: "center",
        align: "center",
        valueGetter: (_, row) =>
          `${row.white.name ?? "Unknown"} (${row.white.rating ?? "?"})`,
      },
      {
        field: "result",
        headerName: "Result",
        headerAlign: "center",
        align: "center",
        width: 100,
      },
      {
        field: "blackLabel",
        headerName: "Black",
        width: 200,
        headerAlign: "center",
        align: "center",
        valueGetter: (_, row) =>
          `${row.black.name ?? "Unknown"} (${row.black.rating ?? "?"})`,
      },
      {
        field: "eval",
        headerName: "Evaluation",
        type: "boolean",
        headerAlign: "center",
        align: "center",
        width: 100,
        valueGetter: (_, row) => !!row.eval,
      },
      {
        field: "openEvaluation",
        type: "actions",
        headerName: "Analyze",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => [
          <GridActionsCellItem
            icon={
              <Icon icon="streamline:magnifying-glass-solid" width="20px" />
            }
            label="Open Evaluation"
            onClick={() =>
              router.push({ pathname: "/", query: { gameId: id } })
            }
            color="inherit"
            key={`${id}-open-eval-button`}
          />,
        ],
      },
      {
        field: "delete",
        type: "actions",
        headerName: "Delete",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => [
          <GridActionsCellItem
            icon={
              <Icon icon="mdi:delete-outline" color={red[400]} width="20px" />
            }
            label="Delete"
            onClick={handleDeleteGameRow(id)}
            color="inherit"
            key={`${id}-delete-button`}
          />,
        ],
      },
      {
        field: "copy pgn",
        type: "actions",
        headerName: "Copy pgn",
        width: 100,
        cellClassName: "actions",
        getActions: ({ id }) => [
          <GridActionsCellItem
            icon={
              <Icon icon="ri:clipboard-line" color={blue[400]} width="20px" />
            }
            label="Copy pgn"
            onClick={handleCopyGameRow(id)}
            color="inherit"
            key={`${id}-copy-button`}
          />,
        ],
      },
    ],
    [handleDeleteGameRow, handleCopyGameRow, router]
  );

  return (
    <>
      <Head>
        <title>Game Database | Checkmate Tracker</title>
        <meta
          name="description"
          content="Browse and manage your saved chess games in Checkmate Tracker's personal game database. Load, analyze, copy, or delete PGNs with ease."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Game Database | Checkmate Tracker" />
        <meta
          property="og:description"
          content="Browse and manage your saved chess games in Checkmate Tracker's personal game database. Load, analyze, copy, or delete PGNs with ease."
        />
        <meta property="og:url" content="https://www.checkmatetracker.com/database" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Game Database | Checkmate Tracker" />
        <meta
          name="twitter:description"
          content="Browse and manage your saved chess games in Checkmate Tracker's personal game database. Load, analyze, copy, or delete PGNs with ease."
        />
        <meta name="twitter:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />
      </Head>

      <Grid container justifyContent="center" alignItems="center" gap={4} marginTop={6}>
        <PageTitle title="Checkmate Tracker Game Database" />

        <Grid container justifyContent="center" alignItems="center" size={12}>
          <LoadGameButton />
        </Grid>

        <Grid container justifyContent="center" alignItems="center" size={12}>
          <Typography variant="subtitle2">
            You have {games.length} game{games.length !== 1 && "s"} in your
            database
          </Typography>
        </Grid>

        <Grid maxWidth="100%" minWidth="50px">
          <DataGrid
            aria-label="Games list"
            rows={games}
            columns={columns}
            disableColumnMenu
            hideFooter={true}
            localeText={gridLocaleText}
            initialState={{
              sorting: {
                sortModel: [
                  {
                    field: "date",
                    sort: "desc",
                  },
                ],
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
