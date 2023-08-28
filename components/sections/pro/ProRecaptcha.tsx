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
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={() => {
          console.log(refCaptcha.current.getValue());
          if (refCaptcha.current.getValue()) {
            onChange(true);
          }
        }}
      />
    </div>
  );
};
