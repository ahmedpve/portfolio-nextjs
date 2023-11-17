import Head from "next/head";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home/home";
import Portfolio from "../components/portfolio/portfolio";
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
      <Portfolio />
      <Contact />
    </>
  );
}
