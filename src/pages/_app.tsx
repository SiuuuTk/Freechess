import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config"; // <- ajuste le chemin si besoin

import Layout from "@/sections/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
