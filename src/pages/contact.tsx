import { Box, Typography, Link as MuiLink, useTheme } from "@mui/material";
import { NextSeo } from "next-seo";

export default function ContactPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <NextSeo
        title="Contact Us | Checkmate Tracker Support"
        description="Need help or want to share feedback? Contact the Checkmate Tracker team via email. We're here to assist you with anything related to your chess analysis experience."
        canonical="https://www.checkmatetracker.com/contact"
        openGraph={{
          url: "https://www.checkmatetracker.com/contact",
          title: "Contact Us | Checkmate Tracker Support",
          description:
            "Need help or want to share feedback? Contact the Checkmate Tracker team via email. We're here to assist you with anything related to your chess analysis experience.",
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
            color: isDark ? "#80bfff" : "primary.main",
          }}
        >
          checkmatetracker.contact@gmail.com
        </MuiLink>

        <Typography component="p" sx={{ mt: 2 }}>
          We usually respond within 24–48 hours. Thank you for using Checkmate
          Tracker!
        </Typography>
      </Box>
    </>
  );
}
