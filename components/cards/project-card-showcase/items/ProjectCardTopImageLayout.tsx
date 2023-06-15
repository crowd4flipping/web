import { ReactElement } from "react";
import styles from "../../styles/Card.module.scss";

type ProjectCardTopImageLayoutProps = {
  top: ReactElement | ReactElement[];
  bottom: ReactElement | ReactElement[];
  isDarkMode?: boolean;
};

export const ProjectCardTopImageLayout = ({
  top,
  bottom,
  isDarkMode,
}: ProjectCardTopImageLayoutProps) => {
  const cardStyles = `${styles.projectCardShowcaseTopImage} ${
    !isDarkMode && styles.projectCardShowcaseTopImage_whiteMode
  }`;

  return (
    <div className={cardStyles}>
      <div className={styles.projectCardShowcaseTopImage_content}>
        <div className={styles.projectCardShowcase_top}>{top}</div>
        <div className={styles.projectCardShowcase_contentBottom}>{bottom}</div>
      </div>
    </div>
  );
};
