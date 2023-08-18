import Head from "next/head";
import styles from "./styles/C4FProHomePage.module.scss";
import { ProHeroSection } from "./ProHeroSection";
import { ProDescriptionSection } from "./ProDescriptionSection";
import { ProHowItWorks } from "./ProHowItWorks";

export const C4FProHomePage = () => {
  return (
    <>
      <Head>
        <title>Crowd4Flipping Pro | Oportunidades inmobiliarias a medida</title>
        <meta
          name="description"
          content="En Crowd4Flipping PRO brindamos oportunidades inmobiliarias a medida"
        />
      </Head>
      <main className={styles.c4fProHomePage}>
        <ProHeroSection />

        <ProDescriptionSection />

        <ProHowItWorks />
      </main>
    </>
  );
};
