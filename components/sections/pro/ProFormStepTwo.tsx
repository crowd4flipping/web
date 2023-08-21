import { ChangeEvent } from "react";
import { TermsAndConditionsCheckbox } from "../home-page/bottom-section/TermsAndConditionsCheckbox";
import styles from "./styles/ProFormSection.module.scss";

type Props = {
  isChecked: boolean;
  onClickTC: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInputs: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ProFormStepTwo = ({ isChecked, onClickTC }: Props) => {
  return (
    <div>
      <div className={styles.proFormSection__name_email}>
        <div className={styles.proFormSection__input_wrapper}>
          <label htmlFor="" className={styles.proFormSection__field_title}>
            Nombre
          </label>
          <input type="text"></input>
        </div>

        <div className={styles.proFormSection__input_wrapper}>
          <label htmlFor="" className={styles.proFormSection__field_title}>
            Teléfono
          </label>
          <input type="number"></input>
        </div>
      </div>

      <div className={styles.proFormSection__phone}>
        <div className={styles.proFormSection__input_wrapper}>
          <label htmlFor="email" className={styles.proFormSection__field_title}>
            Email
          </label>
          <input type="email" name="email" id="email"></input>
        </div>
      </div>

      <div className={styles.proFormSection__termsAndConditions}>
        <TermsAndConditionsCheckbox
          isChecked={isChecked}
          onChange={onClickTC}
        />
      </div>
    </div>
  );
};
