import Head from "next/head";
import { HomePage } from "@/components/sections/home-page/HomePage";

import { Dialog } from "@/components/dialogs/Dialog";

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
      </Head>
      <HomePage />
    </>
  );
}
