import { ReactElement } from "react";
import styles from "./styles/Dialog.module.scss";

type DialogProps = {
  children: ReactElement | ReactElement[];
};

export const Dialog = (props: DialogProps) => {
  return (
    <div className={styles.dialog}>
      <div className={styles.dialog_content}>
        <div className={styles.dialog_container}>{props.children}</div>
      </div>
    </div>
  );
};
