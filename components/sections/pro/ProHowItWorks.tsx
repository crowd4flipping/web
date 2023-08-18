import { PainPointIconOne } from "@/components/icons/PainPointIconOne";
import { DashedLine } from "./DasedLine";
import styles from "./styles/ProHowItWorks.module.scss";

export const ProHowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.howItWorks__title}>
        ¿Cómo funciona Crowd4Flipping PRO?
      </h2>

      <div className={styles.howItWorks__content}>
        <div className={styles.howItWorks__point_one}>
          <div style={{ width: "2rem", height: "2rem" }}>
            <PainPointIconOne />
          </div>
          <h3 className={styles.howItWorks__point_one_title}>
            ANÁLISIS DE MERCADO
          </h3>
          <p>
            Estudiamos tendencias y datos para identificar áreas prometedoras en
            el mercado inmobiliario.
          </p>
        </div>
        <div className={styles.howItWorks__dashed_content}>
          <div className={styles.howItWorks__dashed_line_wrapper}>
            <DashedLine rounded="br" />
          </div>
        </div>
      </div>
    </section>
  );
};
