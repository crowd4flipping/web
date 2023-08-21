import { ReactElement } from "react";
import { DashedLine } from "./DasedLine";
import styles from "./styles/ProHowItWorks.module.scss";

type Props = {
  icon: ReactElement;
  title: string;
  content: string;
  rounded: Parameters<typeof DashedLine>[number]["rounded"];
};

export const ProHowItWorksPoint = ({
  icon,
  title,
  content,
  rounded,
}: Props) => {

  if (rounded == "br")
    return (
      <div className={styles.howItWorks__content}>
        <div className={styles.howItWorks__point_content_left}>
          <div className={styles.howItWorks__icon}>{icon}</div>
          <h3 className={styles.howItWorks__point_title}>{title}</h3>
          <p>{content}</p>
        </div>
        <div className={styles.howItWorks__dashed_content}>
          <div className={styles.howItWorks__dashed_line_wrapper}>
            <DashedLine rounded="br" startFrom="beginning" />
          </div>
        </div>
      </div>
    );

  if (rounded == "bl")
    return (
      <div className={styles.howItWorks__content}>
        <div className={styles.howItWorks__dashed_content_right}>
          <div className={styles.howItWorks__dashed_line_wrapper}>
            <DashedLine rounded="bl" startFrom="beginning" />
          </div>
        </div>
        <div className={styles.howItWorks__point_content_right}>
          <div className={styles.howItWorks__icon}>{icon}</div>
          <h3 className={styles.howItWorks__point_title}>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
};
