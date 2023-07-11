import Image from "next/image";
import { HeroHeader } from "./HeroHeader";
import { HeroImageWrapper } from "./HeroImageWrapper";
import styles from "./styles/Hero.module.scss";
import HeroImage from "@/public/images/invertir-en-inmuebles.webp";

export const HeroSection = () => {
  return (
    <section className={styles.heroSection_bg}>
      <div className={styles.heroSection}>
        <HeroHeader />
        <HeroImageWrapper>
          <>
            <div className={styles.heroSection__hero_image_mobile}>
              <Image
                width={200}
                height={262}
                alt="Empieza a invertir en inmuebles"
                src={HeroImage}
              />
            </div>
            <div className={styles.heroSection__hero_image}>
              <Image
                width={381}
                height={502}
                alt="Empieza a invertir en inmuebles"
                src={HeroImage}
              />
            </div>
          </>
        </HeroImageWrapper>
      </div>
    </section>
  );
};
