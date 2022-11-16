import { type AppType } from "next/dist/shared/lib/utils";
import Script from "next/script";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-K74HTLPG33`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K74HTLPG33', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
