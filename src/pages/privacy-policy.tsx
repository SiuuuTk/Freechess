// pages/privacy-policy.tsx

import { PageTitle } from "@/components/pageTitle";
import { Box, Typography, Link as MuiLink, useTheme } from "@mui/material";

export default function PrivacyPolicy() {
  const theme = useTheme();

  const linkColor = theme.palette.mode === "dark" ? "#64B5F6" : "#4CAF50"; // bleu clair ou vert selon le mode

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 900, mx: "auto" }}>
      <PageTitle title="Privacy Policy - Checkmate Tracker" />

      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography paragraph>
        At Checkmate Tracker, we value your privacy. This policy outlines how we
        collect, use, and protect your data.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Personal Data Collection
      </Typography>
      <Typography paragraph>
        We do not collect personally identifiable information unless you
        explicitly contact us. Non-personal data such as device type, browser
        version, and approximate location may be collected to improve site
        performance.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Cookies and Tracking Technologies
      </Typography>
      <Typography paragraph>
        We use cookies to enhance your experience and provide relevant content.
        These cookies may track usage statistics or display personalized ads.
        You can disable cookies in your browser settings at any time.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Google AdSense
      </Typography>
      <Typography paragraph>
        This website uses Google AdSense, a third-party advertising service.
        Google may use cookies and web beacons to display targeted ads based on
        your visit. Learn more about how Google uses your data:{" "}
        <MuiLink
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: linkColor }}
        >
          https://policies.google.com/technologies/ads
        </MuiLink>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Data Storage
      </Typography>
      <Typography paragraph>
        Your chess games and preferences are stored locally in your browser
        (IndexedDB). We do not host or store any personal data on external
        servers.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Your Rights
      </Typography>
      <Typography paragraph>
        You have the right to access, modify, or delete your personal data. You
        may also object to its processing. To exercise your rights, please
        contact us using the email below.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      <Typography paragraph>
        For questions or requests related to this Privacy Policy, contact us at:{" "}
        <br />
        <strong>checkmatetracker.contact@gmail.com</strong>
      </Typography>
    </Box>
  );
}
