import { InfoCard } from "@/components/cards/info-card/InfoCard";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import styles from "./styles/OurGoal.module.scss";

export const OurGoal = () => {
  return (
    <SectionLayout bgStyles={styles.ourGoal}>
      <InfoCard bgColor="surface" title="Nuestro propósito">
        <p>
          El propósito es la razón de existir que define la contribución que
          cada uno realiza a la sociedad. El propósito de Crowd4Flipping es
          hacer accesible para cualquier persona con poco capital la inversión
          en proyectos inmobiliarios que hasta ahora ha estado reservado para
          unos pocos.
        </p>
      </InfoCard>
    </SectionLayout>
  );
};
