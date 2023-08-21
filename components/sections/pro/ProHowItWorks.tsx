import styles from "./styles/ProHowItWorks.module.scss";
import { ProHowItWorksPoint } from "./ProHowItWorksPoint";
import { PainPointIconOne } from "@/components/icons/PainPointIconOne";
import { ProHowItWorksTopPoint } from "./ProHowItWorksTopPoint";
import { DashedLine } from "./DasedLine";
import { ProBottomSLine } from "./ProBottomSLine";

export const ProHowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.howItWorks__title}>
        ¿Cómo funciona Crowd4Flipping PRO?
      </h2>

      <ProHowItWorksTopPoint
        icon={<PainPointIconOne />}
        title="ANÁLISIS DE MERCADO"
        content="Estudiamos tendencias y datos para identificar áreas prometedoras en
          el mercado inmobiliario."
      />

      <ProHowItWorksPoint
        rounded="bl"
        icon={<PainPointIconOne />}
        title="ANÁLISIS DE MERCADO"
        content="Estudiamos tendencias y datos para identificar áreas prometedoras en
          el mercado inmobiliario."
      />
      <ProHowItWorksPoint
        rounded="br"
        icon={<PainPointIconOne />}
        title="ANÁLISIS DE MERCADO"
        content="Estudiamos tendencias y datos para identificar áreas prometedoras en
          el mercado inmobiliario."
      />
      <ProHowItWorksPoint
        rounded="bl"
        icon={<PainPointIconOne />}
        title="ANÁLISIS DE MERCADO"
        content="Estudiamos tendencias y datos para identificar áreas prometedoras en
          el mercado inmobiliario."
      />
      <ProHowItWorksPoint
        rounded="br"
        icon={<PainPointIconOne />}
        title="ANÁLISIS DE MERCADO"
        content="Estudiamos tendencias y datos para identificar áreas prometedoras en
          el mercado inmobiliario."
      />
      <div className={styles.howItWorks__content}>
        <ProBottomSLine />
      </div>
    </section>
  );
};
