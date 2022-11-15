import { type NextPage } from "next";
import Head from "next/head";
import { FunctionSection } from "../components/FunctionSection";
import { Header } from "../components/Headers/Header";
import { Hero } from "../components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Benerator is the smart way to generate, migrate, obfuscate (anonymize / pseudonymize) data for testing based on easy to maintain datamodels."
        ></meta>
        <meta
          property="og:description"
          content="Benerator is the smart way to generate, migrate, obfuscate (anonymize / pseudonymize) data for testing based on easy to maintain datamodels."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.benerator.de/" />
        <title>
          Benerator | Generate, obfuscate &amp; migrate test data smart | Faker
        </title>
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="functions">
          <FunctionSection />
        </section>
      </main>
    </>
  );
};

export default Home;
