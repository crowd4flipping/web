import Image from "next/image";
import { HeroHeader } from "./HeroHeader";
import { HeroImageWrapper } from "./HeroImageWrapper";
import styles from "./styles/Hero.module.scss";
import HeroImage from "@/public/images/invertir-en-inmuebles.webp";
import { LinkButton } from "@crowd4flipping/ui-components";
import { Routes } from "@/routes/Routes";

export const HeroSection = () => {
  return (
    <section className={styles.heroSection_bg}>
      <div className={styles.heroSection}>
        <div className={styles.heroSection__content}>
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
        <div className={styles.heroSection_ctas__ipad_screen}>
          <LinkButton
            size="lg"
            fullWidth
            href="#info-section"
            variant="secondary"
          >
            Saber más
          </LinkButton>

          <LinkButton
            size="lg"
            href={Routes.app().queryHostFW()}
            variant="primary"
            fullWidth
          >
            Regístrate gratis
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
