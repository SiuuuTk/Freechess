// pages/privacy-policy.tsx

import { Box, Typography, Link as MuiLink, useTheme } from "@mui/material";
import { PageTitle } from "@/components/pageTitle";
import Head from "next/head";

export default function PrivacyPolicy() {
  const theme = useTheme();
  const linkColor = theme.palette.mode === "dark" ? "#64B5F6" : "#4CAF50";

  return (
    <>
      <Head>
        <title>Privacy Policy | Checkmate Tracker</title>
        <meta
          name="description"
          content="Review how Checkmate Tracker collects, uses, and protects your personal data. Learn about your privacy rights and data security."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Checkmate Tracker" />
        <meta
          property="og:description"
          content="Review how Checkmate Tracker collects, uses, and protects your personal data. Learn about your privacy rights and data security."
        />
        <meta property="og:url" content="https://www.checkmatetracker.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Checkmate Tracker" />
        <meta
          name="twitter:description"
          content="Review how Checkmate Tracker collects, uses, and protects your personal data. Learn about your privacy rights and data security."
        />
        <meta name="twitter:image" content="https://www.checkmatetracker.com/android-chrome-512x512.png" />
      </Head>

      <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 900, mx: "auto" }}>
        <PageTitle title="Privacy Policy - Checkmate Tracker" />

        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography gutterBottom>Last updated: April 20, 2025</Typography>

        <Typography component="p" gutterBottom>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law protects
          You.
        </Typography>

        <Typography component="p" gutterBottom>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the{" "}
          <MuiLink
            href="https://www.termsfeed.com/privacy-policy-generator/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: linkColor }}
          >
            Privacy Policy Generator
          </MuiLink>
          .
        </Typography>

        <Typography variant="h5" gutterBottom>
          Interpretation and Definitions
        </Typography>

        <Typography variant="h6">Interpretation</Typography>
        <Typography component="p" gutterBottom>
          The words with capitalized initial letters have meanings defined under
          the following conditions. These definitions apply regardless of singular
          or plural usage.
        </Typography>

        <Typography variant="h6">Definitions</Typography>
        <Typography component="p" gutterBottom>
          For the purposes of this Privacy Policy:
        </Typography>

        <ul>
          <li>
            <Typography>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Company</strong> refers to Checkmate Tracker.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Cookies</strong> are small files placed on Your device by a
              website, containing browsing history and other data.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Country</strong> refers to: Belgium
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Device</strong> means any device that can access the Service
              such as a computer, smartphone, or tablet.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Personal Data</strong> is any information that relates to an
              identified or identifiable individual.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Service</strong> refers to the Website.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Website</strong> refers to Checkmate Tracker, accessible
              from{" "}
              <MuiLink
                href="https://checkmatetracker.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: linkColor }}
              >
                https://checkmatetracker.com
              </MuiLink>
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>You</strong> means the individual accessing or using the
              Service.
            </Typography>
          </li>
        </ul>

        <Typography variant="h5" gutterBottom>
          Collecting and Using Your Personal Data
        </Typography>

        <Typography variant="h6" gutterBottom>
          Types of Data Collected
        </Typography>

        <Typography variant="subtitle1">
          <strong>Personal Data</strong>
        </Typography>
        <Typography component="p" gutterBottom>
          While using Our Service, We may ask You to provide certain personally
          identifiable information. This may include but is not limited to Usage
          Data.
        </Typography>

        <Typography variant="subtitle1">
          <strong>Usage Data</strong>
        </Typography>
        <Typography component="p" gutterBottom>
          Usage Data is collected automatically and may include IP address,
          browser type, pages visited, and other diagnostic data.
        </Typography>

        <Typography variant="subtitle1">
          <strong>Tracking Technologies and Cookies</strong>
        </Typography>
        <Typography component="p" gutterBottom>
          We use Cookies and similar technologies like beacons and scripts to
          improve and analyze Our Service. You can refuse cookies through your
          browser settings.
        </Typography>

        <Typography component="p" gutterBottom>
          Learn more on the{" "}
          <MuiLink
            href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: linkColor }}
          >
            TermsFeed Cookies article
          </MuiLink>
          .
        </Typography>

        <Typography variant="h6" gutterBottom>
          Use of Your Personal Data
        </Typography>
        <Typography component="p" gutterBottom>
          The Company may use Personal Data to provide and maintain the Service,
          to manage your account, to communicate with you, and for other business
          purposes such as analytics and improvement.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Retention & Security of Your Personal Data
        </Typography>
        <Typography component="p" gutterBottom>
          We retain your personal data only as long as needed for the stated
          purposes and comply with applicable legal obligations. We use reasonable
          security methods but cannot guarantee 100% security.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Children's Privacy
        </Typography>
        <Typography component="p" gutterBottom>
          We do not knowingly collect information from children under 13. If you
          become aware of such data, please contact us for removal.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Links to Other Websites
        </Typography>
        <Typography component="p" gutterBottom>
          Our Service may contain links to external websites. We have no control
          over and are not responsible for their privacy practices.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Changes to this Privacy Policy
        </Typography>
        <Typography component="p" gutterBottom>
          We may update this Privacy Policy. Changes are effective when posted on
          this page. We will notify users of significant changes.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography component="p" gutterBottom>
          If you have any questions, you can reach us at:
        </Typography>
        <ul>
          <li>
            <Typography>
              Email:{" "}
              <strong>
                <MuiLink
                  href="mailto:checkmatetracker.contact@gmail.com"
                  sx={{ color: linkColor }}
                >
                  checkmatetracker.contact@gmail.com
                </MuiLink>
              </strong>
            </Typography>
          </li>
          <li>
            <Typography>
              Contact Page:{" "}
              <MuiLink
                href="https://checkmatetracker.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: linkColor }}
              >
                https://checkmatetracker.com/contact
              </MuiLink>
            </Typography>
          </li>
        </ul>
      </Box>
    </>
  );
}
