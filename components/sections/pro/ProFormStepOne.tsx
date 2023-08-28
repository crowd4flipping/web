import styles from "./styles/ProFormSection.module.scss";
import { ChangeEvent } from "react";

type Props = {
  assetsChecked: Set<string>;
  handleAssetTypes: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBudget: (event: ChangeEvent<HTMLInputElement>) => void;
  handleExtraInfo: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  missingInputs: () => ("budget" | "assets")[];
  budgetChecked: string;
};

export const ProFormStepOne = ({
  assetsChecked,
  handleAssetTypes,
  handleExtraInfo,
  handleBudget,
  missingInputs,
  budgetChecked,
}: Props) => {
  return (
    <>
      <fieldset>
        <legend className={styles.proFormSection__field_title}>
          Tipos de inmueble
          {missingInputs().includes("assets") && (
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
              checked={assetsChecked.has("new-construction")}
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
              checked={assetsChecked.has("hotels")}
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
              checked={assetsChecked.has("residential-properties")}
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
              checked={assetsChecked.has("offices")}
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
              checked={assetsChecked.has("stores")}
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
              checked={assetsChecked.has("other")}
            />
            <label htmlFor="other">Otros</label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend className={styles.proFormSection__field_title}>
          Presupuesto
          {missingInputs().includes("budget") && (
            <span className={styles.proFormSection__error_field}>
              Selecciona un presupuesto
            </span>
          )}
        </legend>
        <div className={styles.proFormSection__asset_type}>
          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="threethousend-onemillion"
              name="threethousend-onemillion"
              value="threethousend-onemillion"
              onChange={handleBudget}
              checked={budgetChecked == "threethousend-onemillion"}
            />
            <label htmlFor="threethousend-onemillion">300K€ - 1M€</label>
          </div>

          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="onemillion-fivemillion"
              name="onemillion-fivemillion"
              value="onemillion-fivemillion"
              onChange={handleBudget}
              checked={budgetChecked == "onemillion-fivemillion"}
            />
            <label htmlFor="onemillion-fivemillion">1M€ - 5M€</label>
          </div>

          <div className={styles.proFormSection__checkbox_wrapper}>
            <input
              type="checkbox"
              id="more-fivemillion"
              name="more-fivemillion"
              value="more-fivemillion"
              onChange={handleBudget}
              checked={budgetChecked == "more-fivemillion"}
            />
            <label htmlFor="more-fivemillion">+5M€</label>
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
          rows={5}
          id="extra-info"
          name="extra-info"
          onChange={handleExtraInfo}
        ></textarea>
      </div>
    </>
  );
};
