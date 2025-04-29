import Head from "next/head";
import { Container, Typography, Box } from "@mui/material";

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Legal Notice & Terms | Checkmate Tracker</title>
        <meta
          name="description"
          content="Read the legal notice, terms of use, and hosting information for Checkmate Tracker. Learn more about site ownership and legal responsibilities."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Legal Notice & Terms | Checkmate Tracker"
        />
        <meta
          property="og:description"
          content="Read the legal notice, terms of use, and hosting information for Checkmate Tracker. Learn more about site ownership and legal responsibilities."
        />
        <meta
          property="og:url"
          content="https://www.checkmatetracker.com/legal"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.checkmatetracker.com/android-chrome-512x512.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Legal Notice & Terms | Checkmate Tracker"
        />
        <meta
          name="twitter:description"
          content="Read the legal notice, terms of use, and hosting information for Checkmate Tracker. Learn more about site ownership and legal responsibilities."
        />
        <meta
          name="twitter:image"
          content="https://www.checkmatetracker.com/android-chrome-512x512.png"
        />
      </Head>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Legal Notice & Terms of Use
        </Typography>

        <Box mt={4}>
          <Typography variant="h6">1. Site Identification</Typography>
          <Typography component="p">
            <strong>Website:</strong> Checkmate Tracker
            (https://checkmatetracker.com)
            <br />
            <strong>Owner:</strong> Checkmate Tracker Team
            <br />
            <strong>Contact:</strong>{" "}
            <a
              href="mailto:checkmatetracker.contact@gmail.com"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              checkmatetracker.contact@gmail.com
            </a>
          </Typography>

          <Typography variant="h6" mt={4}>
            2. Hosting Provider
          </Typography>
          <Typography component="p">
            <strong>Host:</strong> Google LLC (Firebase)
            <br />
            <strong>Website:</strong>{" "}
            <a
              href="https://firebase.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              https://firebase.google.com
            </a>
          </Typography>

          <Typography variant="h6" mt={4}>
            3. Intellectual Property
          </Typography>
          <Typography component="p">
            All content on Checkmate Tracker (text, images, logos, etc.) is the
            property of the site owner unless otherwise stated. Unauthorized use
            or reproduction is prohibited.
          </Typography>

          <Typography variant="h6" mt={4}>
            4. Liability
          </Typography>
          <Typography component="p">
            The site owner shall not be held responsible for any direct or
            indirect damages resulting from the use of this site.
          </Typography>

          <Typography variant="h6" mt={4}>
            5. Governing Law
          </Typography>
          <Typography component="p">
            These terms are governed by applicable laws. Any disputes will be
            subject to the jurisdiction of the relevant courts.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
