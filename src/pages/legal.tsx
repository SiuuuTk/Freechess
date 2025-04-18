import Head from "next/head";
import { Container, Typography, Box } from "@mui/material";

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Legal Notice - Checkmate Tracker</title>
        <meta name="description" content="Legal Notice and Terms of Use for Checkmate Tracker." />
      </Head>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Legal Notice & Terms of Use
        </Typography>

        <Box mt={4}>
          <Typography variant="h6">1. Site Identification</Typography>
          <Typography paragraph>
            <strong>Website:</strong> Checkmate Tracker (https://checkmatetracker.com)
            <br />
            <strong>Owner:</strong> Checkmate Tracker Team
            <br />
            <strong>Contact:</strong> checkmatetracker.contact@gmail.com
          </Typography>

          <Typography variant="h6" mt={4}>
            2. Hosting Provider
          </Typography>
          <Typography paragraph>
            <strong>Host:</strong> Hostinger International Ltd.
            <br />
            <strong>Website:</strong> https://www.hostinger.com
          </Typography>

          <Typography variant="h6" mt={4}>
            3. Intellectual Property
          </Typography>
          <Typography paragraph>
            All content on Checkmate Tracker (text, images, logos, etc.) is the property of the site owner unless otherwise stated. Unauthorized use or reproduction is prohibited.
          </Typography>

          <Typography variant="h6" mt={4}>
            4. Liability
          </Typography>
          <Typography paragraph>
            The site owner shall not be held responsible for any direct or indirect damages resulting from the use of this site.
          </Typography>

          <Typography variant="h6" mt={4}>
            5. Governing Law
          </Typography>
          <Typography paragraph>
            These terms are governed by applicable laws. Any disputes will be subject to the jurisdiction of the relevant courts.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
