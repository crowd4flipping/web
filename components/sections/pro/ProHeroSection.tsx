import Image from "next/image";
import { ProHeroHeader } from "./ProHeroHeader";
import styles from "./styles/ProHeroSection.module.scss";
import C4FProLogo from "@/public/images/brand/crowd4flipping/logo/c4f_pro.svg";

export const ProHeroSection = () => {
  return (
    <div className={styles.proHeroSection__hero_section}>
      <div className={styles.proHeroSection__hero_bg_img}> </div>
      <div className={styles.proHeroSection__lr_padding}>
        <div className={styles.proHeroSection__nav_and_hero}>
          <nav className={styles.proHeroSection__navbar}>
            <Image
              src={C4FProLogo}
              alt="C4FPro"
              width={100}
              height={100}
              objectFit="contain"
            />
          </nav>

          <section className={styles.proHeroSection__hero}>
            
            <div className={styles.proHeroSection__hero_content}>
              <ProHeroHeader />
            </div>

            <div
              style={{
                backgroundColor: "rgb(128 0 128 / 30%)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </section>
        </div>
      </div>
    </div>
  );
};
