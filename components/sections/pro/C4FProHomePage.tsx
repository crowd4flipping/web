import Head from "next/head";
import styles from "./styles/C4FProHomePage.module.scss";
import { ProHeroHeader } from "./ProHeroHeader";
import Image from "next/image";
import C4FProLogo from "@/public/images/brand/crowd4flipping/logo/c4f_pro.svg";

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
        <div style={{ position: "relative" }}>
          <div className={styles.c4fProHomePage__hero_bg_img}> </div>
          <div className={styles.c4fProHomePage__lr_padding}>
            <div className={styles.c4fProHomePage__nav_and_hero}>
              <nav className={styles.c4fProHomePage__navbar}>
                <Image
                  src={C4FProLogo}
                  alt="C4FPro"
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </nav>

              <section className={styles.c4fProHomePage__hero}>
                <div className={styles.c4fProHomePage__hero_content}>
                  <ProHeroHeader />
                </div>
                <div
                /*  style={{
                    backgroundColor: "blue",
                    height: "100%",
                    width: "100%",
                  }} */
                ></div>
              </section>
            </div>
          </div>
        </div>

        <section
          style={{ height: "5rem", width: "100%" }}
          className={styles.c4fProHomePage__lr_padding}
        ></section>
      </main>
    </>
  );
};
