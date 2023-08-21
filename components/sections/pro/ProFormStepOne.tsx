import styles from "./styles/ProFormSection.module.scss";
import { ChangeEvent } from "react";

type Props = {
  values: Set<string>;
  handleInputs: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ProFormStepOne = ({ values, handleInputs }: Props) => {
  return (
    <>
      <fieldset>
        <legend className={styles.proFormSection__field_title}>
          Tipos de inmueble
        </legend>

        <div className={styles.proFormSection__asset_type}>
          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="new-construction"
              name="new-construction"
              value="new-construction"
              onChange={handleInputs}
              checked={values.has("new-construction")}
            />
            <label htmlFor="new-construction">Obra nueva</label>
          </div>

          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="hotels"
              name="hotels"
              value="hotels"
              onChange={handleInputs}
              checked={values.has("hotels")}
            />
            <label htmlFor="hotels">Hoteles</label>
          </div>

          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="residential-properties"
              name="residential-properties"
              value="residential-properties"
              onChange={handleInputs}
              checked={values.has("residential-properties")}
            />
            <label htmlFor="residential-properties">
              Propiedades residenciales a reformar
            </label>
          </div>

          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="offices"
              name="offices"
              value="offices"
              onChange={handleInputs}
              checked={values.has("offices")}
            />
            <label htmlFor="offices">Oficinas</label>
          </div>

          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="stores"
              name="stores"
              value="stores"
              onChange={handleInputs}
              checked={values.has("stores")}
            />
            <label htmlFor="stores">Locales comerciales</label>
          </div>

          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="other"
              name="other"
              value="other"
              onChange={handleInputs}
              checked={values.has("other")}
            />
            <label htmlFor="other">Otros</label>
          </div>
        </div>
      </fieldset>

      <div className={styles.proFormSection__comments_wrapper}>
        <label className={styles.proFormSection__field_title}>
          Danos más información sobre el tipo de proyecto que buscas
        </label>
        <textarea rows={10}></textarea>
      </div>
    </>
  );
};
