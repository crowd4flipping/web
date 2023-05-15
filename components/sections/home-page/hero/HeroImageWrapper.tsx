import { ReactElement } from "react";
import styles from "./styles/Hero.module.scss";

export const HeroImageWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <div
      /* style={{
        display: "flex",
      }} */
      className={styles.heroSection_imageWrapper}
    >
      <div
        /* style={{
          margin: "auto",
        }} */
        className={styles.heroSection_imageWrapper_content}
      >
        {children}
      </div>
    </div>
  );
};
