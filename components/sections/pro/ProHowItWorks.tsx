import { DashedLine } from "./DasedLine";
import styles from "./styles/ProHowItWorks.module.scss";

export const ProHowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.howItWorks__title}>
        ¿Cómo funciona Crowd4Flipping PRO?
      </h2>

      <div className={styles.howItWorks__dashed_content}>
        <div className={styles.howItWorks__dashed_line_wrapper}>
          <DashedLine rounded="br" />h
        </div>
      </div>
    </section>
  );
};
