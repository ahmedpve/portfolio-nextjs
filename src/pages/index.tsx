import Head from "next/head";
import About from "../components/about/about";
import Home from "../components/home/home";
import Skills from "../components/skills/skills";
import { appConfig } from "../config";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{`${appConfig.title} - Professional Web Developer`}</title>
      </Head>

      <Home />
      <About />
      <Skills />
    </>
  );
}
