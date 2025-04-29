// src/pages/404.tsx
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="404 - Page Not Found | Checkmate Tracker"
        description="Oops! The page you're looking for doesn't exist. Return to Checkmate Tracker homepage."
        canonical="https://www.checkmatetracker.com/404"
        openGraph={{
          url: "https://www.checkmatetracker.com/404",
          title: "404 - Page Not Found | Checkmate Tracker",
          description:
            "Oops! The page you're looking for doesn't exist. Return to Checkmate Tracker homepage.",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <Box
        textAlign="center"
        sx={{ py: 10, px: 4, maxWidth: 600, margin: "auto" }}
      >
        <Typography variant="h3" gutterBottom>
          404 – Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sorry, we couldn’t find the page you were looking for.
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" sx={{ mt: 4 }}>
            Go Home
          </Button>
        </Link>
      </Box>
    </>
  );
}
