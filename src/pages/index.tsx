import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer/Footer";
import { FunctionSection } from "../components/FunctionSection";
import { Header } from "../components/Headers/Header";
import { Hero } from "../components/Hero/Hero";
import { IntroduceMoreSection } from "../components/IntroduceMoreSection";
import { Shop } from "../components/Shop";
import { SubscribeNews } from "../components/SubscribeNews";
import { Testimonial } from "../components/Testimonial";
import { UISection } from "../components/UISection";

// Need to be dynamically import and set server-side rendering to false to make sure this component only render on the Client side and NextJS don't pre-render this component, since the value of the component live update it might cause error on the server side if we allow NextJS to pre-render
const DateClock = dynamic(() => import("../components/DateClock"), {
  ssr: false,
});

const Location = dynamic(() => import("../components/Location"), {
  ssr: false,
});

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
        {/* Prevent indexing from bot */}
        <meta name="robots" content="noindex"></meta>
        <meta name="robots" content="nofollow"></meta>
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
        <section id="testimonial">
          <Testimonial />
        </section>
        <section id="introduce-more">
          <IntroduceMoreSection />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <footer>
        <Footer />
        <div className="bg-primary py-10 text-center text-white">
          <DateClock />
          <Location />
        </div>
      </footer>
    </>
  );
};

export default Home;
