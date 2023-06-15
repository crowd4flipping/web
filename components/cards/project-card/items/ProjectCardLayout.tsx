import { ReactElement } from "react";
import styles from "../../styles/Card.module.scss";

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
  const cardStyle = `${styles.projectCard} ${
    !isDarkMode && styles.projectCard_whiteCard
  }`;
  const contentStyle = `${styles.projectCard_content} ${styles.projectCard_content} ${
    isSmall && styles.projectCard_content_sm
  }`;
  return (
    <div className={cardStyle}>
      <div className={contentStyle}>
        <div className={styles.projectCard_contentLeft}>{leftSide}</div>
        <div className={styles.projectCard_contentRight}>
          {rightSide}
        </div>
      </div>
    </div>
  );
};
