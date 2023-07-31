import Image from "next/image";
import { HeroHeader } from "./HeroHeader";
import { HeroImageWrapper } from "./HeroImageWrapper";
import styles from "./styles/Hero.module.scss";
import HeroImage from "@/public/images/invertir-en-inmuebles.webp";
import HeroImageMobile from "@/public/images/invertir-en-inmuebles-mobile.webp";
import { LinkButton } from "@crowd4flipping/ui-components";
import { Routes } from "@/routes/Routes";
import { LinkToPlatformButton } from "@/components/buttons/LinkToPlatformButton";

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
                  src={HeroImageMobile}
                  priority={true}
                />
              </div>
              <div className={styles.heroSection__hero_image}>
                <Image
                  width={381}
                  height={502}
                  alt="Empieza a invertir en inmuebles"
                  src={HeroImage}
                  priority={true}
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

          <LinkToPlatformButton variant="primary" fullWidth>
            Regístrate gratis
          </LinkToPlatformButton>
        </div>
      </div>
    </section>
  );
};
