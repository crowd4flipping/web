import React from "react";
import styles from "../../styles/Logo.module.scss";

export const ByRefcon = () => {
  return (
    <div className={styles.active}>
      <a href="https://refcon.es/" target="_blank" rel="noreferrer" aria-label="crowd4flipping-by-refcon">
        <div className={styles.logo}>
          <div className={styles.logoContent}>
            <p>by refcon</p>
          </div>
        </div>
      </a>
    </div>
  );
};
