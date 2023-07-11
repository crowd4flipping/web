import { SectionLayout } from "@/components/layouts/SectionLayout";
import styles from "./styles/AboutUsHeroSection.module.scss";
import { PainPoint } from "../home-page/bottom-section/PainPoint";
import { PainPointIconTwo } from "@/components/icons/PainPointIconTwo";
import { PainPointIconOne } from "@/components/icons/PainPointIconOne";
import { PainPointIconThree } from "@/components/icons/PainPointIconThree";
import { InfoHeroSection } from "../hero-section/InfoHeroSection";

export const AboutUsHeroSection = () => {
  return (
    <SectionLayout>
      <div className={styles.aboutUsHero}>
        <InfoHeroSection
          title={
            <>
              Nacemos de la{" "}
              <span className={styles.aboutUsHero_title_highlight}>
                innovación
              </span>
            </>
          }
          subtitle={
            <>
              Con más de 25 años de experiencia, <br />
              revolucionamos la inversión inmobiliaria para hacerla accesible a
              partir de 500€.
            </>
          }
        >
          <div className={styles.aboutUsHero_hero_content}>
            <PainPoint
              title="Transparencia"
              text="Nuestra claridad y honestidad para priorizar a quienes confían en nosotros"
              icon={<PainPointIconOne />}
            />
            <PainPoint
              title="Seguridad"
              text="La confianza depositada en nosotros requiere la máxima implicación y tenacidad para cumplir los objetivos."
              icon={<PainPointIconTwo />}
            />
            <PainPoint
              title="Evolución"
              text="La constante mejora para alcanzar nuevas metas para ser cada vez mejores."
              icon={<PainPointIconThree />}
            />
          </div>
        </InfoHeroSection>
      </div>
    </SectionLayout>
  );
};
