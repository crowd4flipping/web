import styles from "./styles/ProTag.module.scss";

export const ProTag = () => {
  return (
    <div className={styles.proTag}>
      <div className={styles.proTag__container}></div>
      <div className={styles.proTag__container_content}>
        <h2 className={styles.proTag__text}>PRO</h2>
      </div>
    </div>
  );
};
