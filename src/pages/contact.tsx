// src/pages/contact.tsx
import { Box, Typography, Link as MuiLink, useTheme } from "@mui/material";
import Head from "next/head";

export default function ContactPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <Head>
        <title>Contact | Checkmate Tracker</title>
        <meta name="description" content="Contact Checkmate Tracker support" />
      </Head>

      <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 900, mx: "auto" }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Typography component="p">
          We'd love to hear from you! Whether you have feedback, suggestions, or
          encounter any issues while using Checkmate Tracker, feel free to reach
          out.
        </Typography>

        <Typography component="p">Email us at:</Typography>

        <MuiLink
          href="mailto:checkmatetracker.contact@gmail.com"
          underline="hover"
          sx={{
            color: isDark ? "#80bfff" : "primary.main", // 💡 bleu clair en mode sombre
          }}
        >
          checkmatetracker.contact@gmail.com
        </MuiLink>

        <Typography component="p" sx={{ mt: 2 }}>
          We usually respond within 24-48 hours. Thank you for using Checkmate
          Tracker!
        </Typography>
      </Box>
    </>
  );
}
