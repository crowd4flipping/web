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
  const cardStyles = `${styles.projectCardTopImage} ${
    !isDarkMode && styles.projectCardTopImage_whiteMode
  }`;

  return (
    <div className={cardStyles}>
      <div className={styles.projectCardTopImage_content}>
        <div className={styles.projectCard_top}>{top}</div>
        <div className={styles.projectCard_contentBottom}>{bottom}</div>
      </div>
    </div>
  );
};
