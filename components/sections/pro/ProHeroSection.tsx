import Image from "next/image";
import { ProHeroHeader } from "./ProHeroHeader";
import styles from "./styles/ProHeroSection.module.scss";
import C4FLogo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.svg";

export const ProHeroSection = () => {
  return (
    <div className={styles.proHeroSection__hero_section}>
      <div className={styles.proHeroSection__hero_bg_img}> </div>
      <div className={styles.proHeroSection__lr_padding}>
        <div className={styles.proHeroSection__nav_and_hero}>
          <nav className={styles.proHeroSection__navbar}>
            <Image
              src={C4FLogo}
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
              className={styles.proHeroSection__hero_animation_wrapper}
            >
              <iframe
                className={styles.proHeroSection__hero_animation}
                width="100%"
                height="100%"
                src="https://rive.app/s/smnUpcGs3ESdnK7l-ulNPQ/embed"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
