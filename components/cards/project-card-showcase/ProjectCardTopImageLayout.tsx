import { ReactElement } from "react";
import styles from "../styles/Card.module.scss";

type ProjectCardTopImageLayoutProps = {
  top: ReactElement | ReactElement[];
  bottom: ReactElement | ReactElement[];
};

export const ProjectCardTopImageLayout = ({
  top,
  bottom,
}: ProjectCardTopImageLayoutProps) => {
  return (
    <div className={styles.projectCardShowcaseTopImage}>
      <div className={styles.projectCardShowcaseTopImage_content}>
        <div className={styles.projectCardShowcase_top}>{top}</div>
        <div className={styles.projectCardShowcase_contentBottom}>
          {bottom}
        </div>
      </div>
    </div>
  );
};
