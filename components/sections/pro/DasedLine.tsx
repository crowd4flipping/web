import { ReactElement } from "react";
import styles from "./styles/DashedLine.module.scss";

type Props = { rounded?: "bl" | "br" };

export const DashedLine = ({ rounded }: Props) => {

  const dashedLine: Record<Props["rounded"], ReactElement> = {
    bl: (
      <div className={styles.dashedLine}>
        <div className={styles.dashedLine__line}></div>
      </div>
    ),
    br: (
      <div className={styles.dashedLine}>
        <div className={styles.dashedLine__line_rounded_right}></div>
      </div>
    ),
  };

  if (!rounded)
    return (
      <div className={styles.dashedLine}>
        <div className={styles.dashedLine__line}></div>
      </div>
    );

  return dashedLine[rounded];
};
