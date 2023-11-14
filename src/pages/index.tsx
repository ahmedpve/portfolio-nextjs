import Head from "next/head";
import { appConfig } from "../config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
      </Head>

      <div></div>
    </>
  );
}
