import { ContentCard } from "@/components/cards/ContentCard";
import styles from "./styles/ProFormSection.module.scss";
import { Button } from "@crowd4flipping/ui-components";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  useState,
} from "react";
import { ProFormStepOne } from "./ProFormStepOne";
import { ProFormStepTwo } from "./ProFormStepTwo";

type FormStep = "one" | "two";
type FormData = {
  title: string;
  description: string;
};

const formHeader: Record<FormStep, FormData> = {
  one: {
    title: "¿Qué tipo de propiedad estás buscando?",
    description:
      "Te ayudamos a encontrar el inmueble con las características que necesitas para que puedas invertir en él",
  },
  two: {
    title: "Recibe asistencia personalizada",
    description: "Contactaremos contigo cuanto antes",
  },
};

export const ProFormSection = () => {
  const [stepOneInputValues, setStepOneInputValues] = useState(
    new Set<string>()
  );
  const [stepTwoInputValues, setStepTwoInputValues] = useState(
    new Set<string>()
  );
  const [step, setStep] = useState<FormStep>("one");
  const [acceptedTC, setAcceptedTC] = useState(false);

  const add = (value: string) => {
    setStepOneInputValues((prev) => new Set([...Array.from(prev), value]));
  };

  const remove = (value: string) => {
    setStepOneInputValues((prev) => {
      prev.delete(value);
      return new Set([...Array.from(prev)]);
    });
  };

  const handleStepOneInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (stepOneInputValues.has(value)) remove(value);
    else add(value);
  };

  const handleStepTwoInputs = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (stepTwoInputValues.has(value)) remove(value);
    else add(value);
  };

  const validateStepOneValues = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    const emptyInputs = stepOneInputValues.size == 0;

    if (!emptyInputs) {
      setStep("two");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emptyInputs = stepOneInputValues.size == 0;

    if (!emptyInputs) {
      setStep("two");
      stepOneInputValues.clear();
    }
  };

  return (
    <section className={styles.proFormSection}>
      <ContentCard
        theme="dark"
        title={formHeader[step].title}
        description={formHeader[step].description}
      >
        <form
          onSubmit={(e) => handleSubmit}
          className={styles.proFormSection__form}
        >
          {step === "one" ? (
            <ProFormStepOne
              values={stepOneInputValues}
              handleInputs={handleStepOneInputs}
            />
          ) : (
            <ProFormStepTwo
              handleInputs={handleStepTwoInputs}
              isChecked={acceptedTC}
              onClickTC={() => setAcceptedTC((prev) => !prev)}
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
            <Button type="submit" variant="primary" size="lg">
              Enviar
            </Button>
          )}
        </form>
      </ContentCard>
    </section>
  );
};
