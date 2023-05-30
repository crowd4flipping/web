import { ReactElement } from "react";
import styles from "../styles/Card.module.scss";

type ProjectCardLayoutProps = {
  leftSide: ReactElement | ReactElement[];
  rightSide: ReactElement | ReactElement[];
  isDarkMode?: boolean;
  isSmall?: boolean;
};

export const ProjectCardLayout = ({
  leftSide,
  rightSide,
  isDarkMode,
  isSmall,
}: ProjectCardLayoutProps) => {
  const cardStyle = `${styles.projectCardShowcase} ${
    !isDarkMode && styles.projectCardShowcase_whiteCard
  }`;
  const contentStyle = `${styles.projectCardShowcase_content} ${styles.projectCardShowcase_content} ${
    isSmall && styles.projectCardShowcase_content_sm
  }`;
  return (
    <div className={cardStyle}>
      <div className={contentStyle}>
        <div className={styles.projectCardShowcase_contentLeft}>{leftSide}</div>
        <div className={styles.projectCardShowcase_contentRight}>
          {rightSide}
        </div>
      </div>
    </div>
  );
};
