import Image from "next/image";
import { HeroHeader } from "./HeroHeader";
import { HeroImageWrapper } from "./HeroImageWrapper";
import styles from "./styles/Hero.module.scss";
import HeroImage from "@/public/images/invertir-en-inmuebles.png";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";

export const HeroSection = () => {
  const { isXSmall } = useBreakPoints();

  const heroSection = `${styles.heroSection} ${
    isXSmall && styles.heroSection_sm
  }`;

  return (
    <section className={styles.heroSection_bg}>
      <div className={heroSection}>
        {isXSmall ? (
          <>
            <HeroImageWrapper>
              <div style={{
                width:"100%",
                height: "260px"
              }}>
                <Image
                  width={200}
                  height={262}
                  alt="Empieza a invertir en inmuebles"
                  src={HeroImage}
                />
              </div>
            </HeroImageWrapper>
            <HeroHeader />
          </>
        ) : (
          <>
            <HeroHeader />
            <HeroImageWrapper>
              <Image
                width={381}
                height={502}
                alt="Empieza a invertir en inmuebles"
                src={HeroImage}
              />
            </HeroImageWrapper>
          </>
        )}
      </div>
    </section>
  );
};
