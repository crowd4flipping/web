import { ReactElement } from "react";
import styles from "./styles/Hero.module.scss";

export const HeroImageWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <div className={styles.heroSection_imageWrapper}>
      <div className={styles.heroSection_imageWrapper_content}>{children}</div>
    </div>
  );
};
