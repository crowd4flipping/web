import { ChangeEvent } from "react";
import styles from "./styles/ProFormSection.module.scss";

type Props = {
  handleInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  missingInputs: () => Array<"name" | "email">;
};

export const ProFormStepTwo = ({ handleInputs, missingInputs }: Props) => {
  return (
    <>
      <div className={styles.proFormSection__name_phone}>
        <div className={styles.proFormSection__input_wrapper}>
          <label htmlFor="name" className={styles.proFormSection__field_title}>
            Nombre
            {missingInputs().includes("name") && (
              <span className={styles.proFormSection__error_field}>
                Escribe tu nombre
              </span>
            )}
          </label>
          <input
            minLength={3}
            maxLength={30}
            type="text"
            name="name"
            id="name"
            onChange={handleInputs}
          ></input>
        </div>

        <div className={styles.proFormSection__input_wrapper}>
          <label htmlFor="phone" className={styles.proFormSection__field_title}>
            Teléfono
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleInputs}
          ></input>
        </div>
      </div>

      <div className={styles.proFormSection__email}>
        <div className={styles.proFormSection__input_wrapper}>
          <label htmlFor="email" className={styles.proFormSection__field_title}>
            Email
            {missingInputs().includes("email") && (
              <span className={styles.proFormSection__error_field}>
                Escribe tu email
              </span>
            )}
          </label>

          <input
            minLength={3}
            maxLength={50}
            type="email"
            name="email"
            id="email"
            onChange={handleInputs}
          ></input>
        </div>
      </div>
    </>
  );
};
