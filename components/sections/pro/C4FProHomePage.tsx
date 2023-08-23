import Head from "next/head";
import styles from "./styles/C4FProHomePage.module.scss";
import { ProHeroSection } from "./ProHeroSection";
import { ProDescriptionSection } from "./ProDescriptionSection";
import { ProHowItWorks } from "./ProHowItWorks";
import { ProFormSection } from "./ProFormSection";
import formStyles from "./styles/ProFormSection.module.scss";

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
        <div className={styles.c4fProHomePage__content}>
          <ProDescriptionSection />

          <ProHowItWorks />

          <div className={formStyles.proFormSection}>
            <div id="contact">
              <ProFormSection />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
