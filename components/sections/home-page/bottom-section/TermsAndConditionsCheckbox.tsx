import { ChangeEvent } from "react";
import styles from "./styles/ContactForm.module.scss";
import Link from "next/link";

type Props = {
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  missingCheck: boolean;
};

export const TermsAndConditionsCheckbox = ({
  isChecked,
  onChange,
  missingCheck,
}: Props) => {
  const checkBoxStyles =
    missingCheck && styles.contactForm_checkBoxWrapper_missing;

  return (
    <div className={`${styles.contactForm_checkBoxWrapper} ${checkBoxStyles}`}>
      <input
        id="terms-and-conditions"
        type="checkbox"
        name="termsAndConditions"
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor="terms-and-conditions"
        className={styles.contactForm_checkBoxLabel}
      >
        Autorizo el tratamiento de mis datos para recibir una respuesta a mi
        consulta según la{" "}
        <Link href="/aviso-legal">Política de Privacidad</Link>
      </label>
    </div>
  );
};
