import styles from "./styles/ProDescriptionSection.module.scss";

export const ProDescriptionSection = () => {
  const lines = Array(7).fill("");
  return (
    <section className={styles.proDescriptionSection}>
      <div className={styles.proDescriptionSection__content}>
        <h2 className={styles.proDescriptionSection__title}>
          Expertos en la búsqueda de{" "}
          <span className={styles.proDescriptionSection__title_blue}>
            oportunidades inmobiliarias
          </span>
        </h2>
        <p>
          En <strong>Crowd4Flipping PRO</strong> somos expertos en la{" "}
          <strong>
            búsqueda y maximización de oportunidades inmobiliarias de alto
            potencial ubicadas en Mallorca.{" "}
          </strong>
          Nuestra dedicación va más allá de las inversiones, nos centramos en
          desbloquear el valor oculto en cada propiedad y convertirlo en una
          realidad financiera sólida.
        </p>
      </div>

      <div className={styles.proDescriptionSection__line_wrapper}>
        <div className={styles.proDescriptionSection__line}></div>
      </div>

      <div className={styles.proDescriptionSection__content}>
        <h2 className={styles.proDescriptionSection__title}>
          <span className={styles.proDescriptionSection__title_blue}>
            Transformamos espacios
          </span>{" "}
          en oportunidades
        </h2>
        <p>
          Nos apasiona descubrir el potencial en cada propiedad, desde
          <strong> terrenos</strong>,<strong> obra nueva</strong>, hasta
          edificios en proceso de revitalización. Trabajamos incansablemente
          para transformar espacios en oportunidades que generen
          <strong> crecimiento patrimonial</strong>, ya sea a través de
          <strong> desarrollo, renovación o revalorización.</strong>
        </p>
      </div>
      <div className={styles.proDescriptionSection__line_wrapper}>
        <div className={styles.proDescriptionSection__line}></div>
      </div>
    </section>
  );
};
