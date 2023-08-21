import { ReactElement } from "react";
import { DashedLine } from "./DasedLine";
import styles from "./styles/ProHowItWorks.module.scss";

type Props = {
  icon: ReactElement;
  title: string;
  content: string;
};

export const ProHowItWorksTopPoint = ({ icon, title, content }: Props) => {
  return (
    <div className={styles.howItWorks__content}>
      <div className={styles.howItWorks__point_content_left}>
        <div className={styles.howItWorks__icon}>{icon}</div>
        <h3 className={styles.howItWorks__point_title}>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={styles.howItWorks__top_dashed_content}>
        <div className={styles.howItWorks__dashed_line_wrapper}>
          <DashedLine rounded="br" startFrom="middle" />
        </div>
      </div>
    </div>
  );
};
