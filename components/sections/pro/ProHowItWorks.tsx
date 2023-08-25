import styles from "./styles/ProHowItWorks.module.scss";
import { ProHowItWorksPoint } from "./ProHowItWorksPoint";
import { PainPointIconOne } from "@/components/icons/PainPointIconOne";
import { ProHowItWorksTopPoint } from "./ProHowItWorksTopPoint";
import { ProBottomSLine } from "./ProBottomSLine";
import { PainPointIconTwo } from "@/components/icons/PainPointIconTwo";
import { PainPointIconThree } from "@/components/icons/PainPointIconThree";
import { PainPointIconFour } from "@/components/icons/PainPointIconFour";
import { DashedLine } from "./DasedLine";

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
        number={2}
        icon={<PainPointIconTwo />}
        title="SELECCIÓN ESTRATÉGICA"
        content="Elegimos propiedades que se ajusten a la estrategia y objetivos del inversor. "
      />
      <ProHowItWorksPoint
        number={3}
        rounded="br"
        icon={<PainPointIconThree />}
        title="EVALUACIÓN RIGUROSA"
        content="Realizamos análisis detallados y due diligence para evaluar la viabilidad y riesgo de cada oportunidad. "
      />
      <ProHowItWorksPoint
        number={4}
        rounded="bl"
        icon={<PainPointIconFour />}
        title="ESTRUCTURACIÓN"
        content="Negociamos términos y acuerdos para asegurar adquisiciones sólidas y estratégicas. "
      />
      <ProHowItWorksPoint
        number={5}
        rounded="br"
        icon={<PainPointIconOne />}
        title="SALIDA ESTRATÉGICA"
        content="Cuando es oportuno, aplicamos estrategias de salidas alineadas con objetivos y condiciones de mercado. "
      />

      <div className={styles.howItWorks__sLine}>
        <ProBottomSLine />
      </div>
      
      <div className={styles.howItWorks__vertical_line}>
        <DashedLine />
      </div>
    </section>
  );
};
