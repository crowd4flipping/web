import React, { useEffect } from "react";
import "../styles/globals.scss";
import Script from "next/script";
import { CookieBanner } from "../components/cookies/CookieBanner";
import ErrorBoundary from "../utils/ErrorBoundary";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Crowd4Flipping</title>
        <meta
          name="description"
          content="La inversión inmobiliaria al alcance de todos."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* FB META TAGS */}
        <meta property="og:url" content="https://www.crowd4flipping.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Crowd4Flipping" />
        <meta
          property="og:description"
          content="La inversión inmobiliaria al alcance de todos."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/opengraph%2Fopengraph-c4f.png?alt=media&token=a880e75c-80c0-4820-80f4-284b47685cc8"
        />

        {/* TWITTER META TAGS */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="crowd4flipping.com" />
        <meta
          property="twitter:url"
          content="https://www.crowd4flipping.com/"
        />
        <meta name="twitter:title" content="Crowd4Flipping" />
        <meta
          name="twitter:description"
          content="La inversión inmobiliaria al alcance de todos."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/opengraph%2Fopengraph-c4f.png?alt=media&token=a880e75c-80c0-4820-80f4-284b47685cc8"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google-analitycs">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '609162034305973');
        fbq('track', 'PageView');
      `}
      </Script>

      <ErrorBoundary>
        <Component {...pageProps} />
        <CookieBanner />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
