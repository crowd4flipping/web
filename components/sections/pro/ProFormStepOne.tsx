import styles from "./styles/ProFormSection.module.scss";
import { ChangeEvent } from "react";

type Props = {
  values: Set<string>;
  handleAssetTypes: (event: ChangeEvent<HTMLInputElement>) => void;
  handleExtraInfo: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  missingAssets: boolean;
};

export const ProFormStepOne = ({
  values,
  handleAssetTypes,
  handleExtraInfo,
  missingAssets,
}: Props) => {
  return (
    <>
      <fieldset>
        <legend className={styles.proFormSection__field_title}>
          Tipos de inmueble
          {missingAssets && (
            <span className={styles.proFormSection__error_field}>
              Selecciona un tipo de inmueble
            </span>
          )}
        </legend>
        <div className={styles.proFormSection__asset_type}>
          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="new-construction"
              name="new-construction"
              value="new-construction"
              onChange={handleAssetTypes}
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
              onChange={handleAssetTypes}
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
              onChange={handleAssetTypes}
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
              onChange={handleAssetTypes}
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
              onChange={handleAssetTypes}
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
              onChange={handleAssetTypes}
              checked={values.has("other")}
            />
            <label htmlFor="other">Otros</label>
          </div>
        </div>
      </fieldset>

      <div className={styles.proFormSection__comments_wrapper}>
        <div>
          <label
            style={{ paddingBottom: "0rem" }}
            className={styles.proFormSection__field_title}
          >
            ¿Algo más que debamos saber?{" "}
          </label>
          <p className={styles.proFormSection__field_subtitle}>
            Características del inmueble, localización, etc.
          </p>
        </div>
        <textarea
          rows={10}
          id="extra-info"
          name="extra-info"
          onChange={handleExtraInfo}
        ></textarea>
      </div>
    </>
  );
};
