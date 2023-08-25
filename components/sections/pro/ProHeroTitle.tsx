import styles from "./styles/ProHeroTitle.module.scss";

export const ProHeroTitle = () => {
  return (
    <div className={styles.proHeroTitle}>
      <div>
        <h1>
          Brindamos{" "}
          <span className={styles.proHeroTitle__hero_gradient_text}>
            oportunidades
          </span>{" "}
          inmobiliarias{" "}
          <span className={styles.proHeroTitle__hero_gradient_text}>
            a medida
          </span>
        </h1>
      </div>

      <div className={styles.proHeroTitle__bottom_title}>
        <h1>
          Brindamos{" "}
          <span className={styles.proHeroTitle__hero_shadow}>
            oportunidades
          </span>{" "}
          inmobiliarias{" "}
          <span className={styles.proHeroTitle__hero_shadow}>a medida</span>
        </h1>
      </div>
    </div>
  );
};
