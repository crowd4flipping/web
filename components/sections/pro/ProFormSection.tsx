import { ContentCard } from "@/components/cards/ContentCard";
import styles from "./styles/ProFormSection.module.scss";
import { Button } from "@crowd4flipping/ui-components";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { ProFormStepOne } from "./ProFormStepOne";
import { ProFormStepTwo } from "./ProFormStepTwo";
import { TermsAndConditionsCheckbox } from "../home-page/bottom-section/TermsAndConditionsCheckbox";
import { Routes } from "@/routes/Routes";
import { LoaderSpinner } from "@/components/animations/LoaderSpinner";

type FormHeader = {
  title: string;
  description: string;
};
type ProFormInputData = "name" | "phone" | "email" | "extra-info";
type MandatoryInputs =
  | Exclude<ProFormInputData, "extra-info" | "phone">
  | "asset-types";

type FormStep = "one" | "two";
const formHeader: Record<FormStep, FormHeader> = {
  one: {
    title: "¿Qué propiedades estás buscando?",
    description:
      "Te ayudamos a encontrar el inmueble con las características que necesitas para que puedas invertir en él",
  },
  two: {
    title: "Recibe asistencia personalizada",
    description: "Contactaremos contigo cuanto antes",
  },
};

export const ProFormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [assetTypes, setAssetTypes] = useState(new Set<string>());
  const [missingMandatoryInput, setMissingMandatoryInput] = useState<
    Array<MandatoryInputs>
  >([]);
  const [inputData, setInputData] = useState<
    Record<ProFormInputData, string | undefined>
  >({
    "extra-info": "",
    email: "",
    name: "",
    phone: "",
  });

  const [step, setStep] = useState<FormStep>("one");
  const [acceptedTC, setAcceptedTC] = useState(null);
  const [missingTC, setMissingTC] = useState(false);

  const addAsset = (value: string) => {
    setAssetTypes((prev) => new Set([...Array.from(prev), value]));
  };

  const removeAsset = (value: string) => {
    setAssetTypes((prev) => {
      prev.delete(value);
      return new Set([...Array.from(prev)]);
    });
  };

  const handleAssetTypes = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (assetTypes.has(value)) removeAsset(value);
    else addAsset(value);
  };

  const handleInputs = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    const id = event.target.id;

    if (!isValidId(id)) throw new Error(`Input id '${id}' is not valid`);

    setInputData((prev) => ({ ...prev, [id]: value }));
  };

  const validateStepOneValues = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    const emptyAssets = assetTypes.size == 0;

    if (emptyAssets) {
      setMissingMandatoryInput(["asset-types"]);
      return;
    }

    setStep("two");
  };

  const getStepTwoMissingInputs = (): ("name" | "email")[] => {
    if (
      missingMandatoryInput.includes("email") &&
      missingMandatoryInput.includes("name")
    )
      return ["email", "name"];
    if (missingMandatoryInput.includes("email")) return ["email"];
    if (missingMandatoryInput.includes("name")) return ["name"];
    return [];
  };

  const submitForm = async (data: {
    name: string;
    phone: string;
    email: string;
    extraInfo: string;
    assetsType: string[];
  }) => {
    const route = Routes.cloud().contactPro();
    try {
      let res = await fetch(route, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        setIsLoading(false);
      }
      console.log(res.status);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    setMissingMandatoryInput([]);
    setMissingTC(false);

    const emptyInputs = !inputData.email && !inputData.name ? true : false;
    const emptyAssets = assetTypes.size == 0;
    let missingData = false;

    if (emptyInputs && emptyAssets) {
      setMissingMandatoryInput(["asset-types", "email", "name"]);
      setIsLoading(false);
      return;
    }

    if (emptyAssets) {
      setMissingMandatoryInput(["asset-types"]);
      setIsLoading(false);
      return;
    }

    if (emptyInputs) {
      setMissingMandatoryInput(["email", "name"]);
      if (!acceptedTC) setMissingTC(true);
      setIsLoading(false);
      return;
    }

    if (!inputData.email) {
      setMissingMandatoryInput(["email"]);
      missingData = true;
    }

    if (!inputData.name) {
      setMissingMandatoryInput(["name"]);
      missingData = true;
    }

    if (!acceptedTC) {
      setMissingTC(true);
      missingData = true;
    }

    if (missingData) {
      setIsLoading(false);
      return;
    }

    setMissingTC(false);
    setMissingMandatoryInput([]);

    await submitForm({
      ...inputData,
      extraInfo: inputData["extra-info"],
      assetsType: Array.from(assetTypes),
    });
  };

  return (
    <section className={styles.proFormSection}>
      <ContentCard
        theme="dark"
        title={formHeader[step].title}
        description={formHeader[step].description}
      >
        <form onSubmit={handleSubmit} className={styles.proFormSection__form}>
          {step === "one" ? (
            <ProFormStepOne
              missingAssets={missingMandatoryInput.includes("asset-types")}
              values={assetTypes}
              handleAssetTypes={handleAssetTypes}
              handleExtraInfo={handleInputs}
            />
          ) : (
            <ProFormStepTwo
              missingInputs={getStepTwoMissingInputs}
              handleInputs={handleInputs}
            />
          )}

          {step === "one" ? (
            <Button
              onClick={validateStepOneValues}
              type="button"
              variant="primary"
              size="lg"
            >
              Continuar
            </Button>
          ) : (
            <div>
              <div className={styles.proFormSection__termsAndConditions}>
                <TermsAndConditionsCheckbox
                  missingCheck={missingTC}
                  isChecked={!acceptedTC ? false : acceptedTC}
                  onChange={() => setAcceptedTC((prev) => !prev)}
                />
              </div>
              <div style={{ display: "flex" }}>
                <Button fullWidth type="submit" variant="primary" size="lg">
                  {isLoading ? (
                    <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
                      <div style={{ width: "1.5rem", height: "1.5rem" }}>
                        <LoaderSpinner />
                      </div>
                    </div>
                  ) : (
                    "Enviar"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </ContentCard>
    </section>
  );
};

function isValidId(id: string): id is ProFormInputData {
  const ids: ProFormInputData[] = ["email", "extra-info", "name", "phone"];
  if (ids.includes(id as ProFormInputData)) return true;
  return false;
}
