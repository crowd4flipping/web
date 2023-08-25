import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./styles/ProRecaptcha.module.scss";

export const ProRecaptcha = ({
  onChange,
  isMissing,
}: {
  onChange: (state: boolean) => void;
  isMissing: boolean;
}) => {
  const refCaptcha = useRef(null);

  const style = isMissing
    ? `${styles.proRecaptcha} ${styles.proRecaptcha__missing}`
    : styles.proRecaptcha;

  return (
    <div className={style}>
      <ReCAPTCHA
        ref={refCaptcha}
        sitekey="6LeW0vYiAAAAABvzPB2SSZrvaz3d7ptD70HNJak4"
        onChange={() => {
          if (refCaptcha.current.getValue()) {
            console.log("object");
            onChange(true);
          }
        }}
      />
    </div>
  );
};
