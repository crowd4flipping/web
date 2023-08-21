import styles from "./styles/SLine.module.scss";

export const ProBottomSLine = () => {
  return (
    <div className={styles.sLine}>
      <div className={styles.sLine__content_top}>
        <div className={styles.sLine__top_line_wrapper}>
          <div className={styles.sLine__top_line_wrapper}>
            <div className={styles.sLine__top_line_content}>
              <div className={styles.sLine__top_line}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sLine__content_bottom}>
        <div className={styles.sLine__top_line_wrapper}>
          <div className={styles.sLine__top_line_wrapper}>
            <div className={styles.sLine__bottom_line_content}>
              <div className={styles.sLine__bottom_line}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
