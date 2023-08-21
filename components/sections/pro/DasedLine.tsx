import { ReactElement } from "react";
import styles from "./styles/DashedLine.module.scss";

type Props = { rounded?: "bl" | "br"; startFrom?: "middle" | "beginning" };

export const DashedLine = ({ rounded, startFrom = "middle" }: Props) => {
  if(startFrom == "middle") return <DashedLineFromMiddle rounded={rounded} />;

  if(startFrom == "beginning") return <DashedLineFromBeginning rounded={rounded} />;
};

function DashedLineFromBeginning({ rounded }: { rounded: Props["rounded"] }) {
  const dashedLine: Record<Props["rounded"], ReactElement> = {
    bl: (
      <div className={styles.dashedLine_start_from_beginning}>
        <div
          className={styles.dashedLine_start_from_beginning__line_rounded_left}
        ></div>
      </div>
    ),
    br: (
      <div className={styles.dashedLine_start_from_beginning}>
        <div
          className={styles.dashedLine_start_from_beginning__line_rounded_right}
        ></div>
      </div>
    ),
  };

  if (!rounded)
    return (
      <div className={styles.dashedLine_start_from_beginning}>
        <div className={styles.dashedLine_start_from_beginning__line}></div>
      </div>
    );

  return dashedLine[rounded];
}

function DashedLineFromMiddle({ rounded }: { rounded: Props["rounded"] }) {
  const dashedLine: Record<Props["rounded"], ReactElement> = {
    bl: (
      <div className={styles.dashedLine_start_from_middle}>
        <div
          className={styles.dashedLine_start_from_middle__line_rounded_left}
        ></div>
      </div>
    ),
    br: (
      <div className={styles.dashedLine_start_from_middle}>
        <div
          className={styles.dashedLine_start_from_middle__line_rounded_right}
        ></div>
      </div>
    ),
  };

  if (!rounded)
    return (
      <div className={styles.dashedLine_start_from_middle}>
        <div className={styles.dashedLine_start_from_middle__line}></div>
      </div>
    );

  return dashedLine[rounded];
}
