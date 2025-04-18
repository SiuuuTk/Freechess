import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Checkmate Tracker</title>
        <meta
          name="description"
          content="Get in touch with the Checkmate Tracker team. We value your feedback and questions."
        />
      </Head>
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have feedback, suggestions,
          or encounter any issues while using Checkmate Tracker, feel free to
          reach out.
        </p>

        <p>Email us at:</p>
        <p>
          <a href="mailto:checkmatetracker.contact@gmail.com">
            checkmatetracker.contact@gmail.com
          </a>
        </p>

        <p>
          We usually respond within 24-48 hours. Thank you for using Checkmate Tracker!
        </p>
      </main>
    </>
  );
}
