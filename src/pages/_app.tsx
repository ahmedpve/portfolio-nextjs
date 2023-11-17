import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { appConfig } from "../config";
import useNprogress from "../hooks/use-nprogress";
import { theme } from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  useNprogress();

  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
