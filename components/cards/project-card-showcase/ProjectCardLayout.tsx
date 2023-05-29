import { ReactElement } from "react";
import styles from "../styles/Card.module.scss";

type ProjectCardLayoutProps = {
  leftSide: ReactElement | ReactElement[];
  rightSide: ReactElement | ReactElement[];
};

export const ProjectCardLayout = ({
  leftSide,
  rightSide,
}: ProjectCardLayoutProps) => {
  return (
    <div className={styles.projectCardShowcase}>
      <div className={styles.projectCardShowcase_content}>
        <div className={styles.projectCardShowcase_contentLeft}>{leftSide}</div>
        <div className={styles.projectCardShowcase_contentRight}>
          {rightSide}
        </div>
      </div>
    </div>
  );
};
