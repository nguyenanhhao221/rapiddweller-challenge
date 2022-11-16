import { type NextPage } from "next";
import Head from "next/head";
import { FunctionSection } from "../components/FunctionSection";
import { Header } from "../components/Headers/Header";
import { Hero } from "../components/Hero/Hero";
import { Shop } from "../components/Shop/Shop";
import { SubscribeNews } from "../components/SubscribeNews";
import { UISection } from "../components/UISection";

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
        <link
          rel="icon"
          href="https://www.benerator.de/wp-content/uploads/2022/09/android-chrome-192x192-1-150x150.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          href="https://www.benerator.de/wp-content/uploads/2022/09/android-chrome-192x192-1.png"
          sizes="192x192"
        ></link>
        <link
          rel="apple-touch-icon"
          href="https://www.benerator.de/wp-content/uploads/2022/09/android-chrome-192x192-1.png"
        ></link>
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
        <section id="subscribe-news">
          <SubscribeNews />
        </section>
        <section id="ui">
          <UISection />
        </section>
        <section id="shop">
          <Shop />
        </section>
      </main>
    </>
  );
};

export default Home;
