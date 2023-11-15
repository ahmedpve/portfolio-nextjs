import Head from "next/head";
import Home from "../components/home/home";
import { appConfig } from "../config";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
      </Head>

      <Home />
    </>
  );
}
