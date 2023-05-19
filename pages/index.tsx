import Head from "next/head";
import { HomePage } from "@/components/sections/home-page/HomePage";

export default function Home() {
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
      <HomePage />
    </>
  );
}
