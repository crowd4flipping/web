import styles from "./styles/ProHowItWorks.module.scss";
import { ProHowItWorksPoint } from "./ProHowItWorksPoint";
import { PainPointIconOne } from "@/components/icons/PainPointIconOne";
import { ProHowItWorksTopPoint } from "./ProHowItWorksTopPoint";
import { DashedLine } from "./DasedLine";

export const ProHowItWorks = () => {
  return (
    <section style={{ paddingBottom: "5rem" }} className={styles.howItWorks}>
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
     
    </section>
  );
};
