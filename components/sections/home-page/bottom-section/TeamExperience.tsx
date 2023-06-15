import styles from "./styles/TeamExperience.module.scss";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { LinkButton } from "@/components/buttons/primary/Button";
import { ProjectShowcaseAnimation } from "@/components/cards/project-card-showcase/ProjectShowcaseAnimation";
import { ProjectCardShowcaseWithTopImage } from "@/components/cards/project-card-showcase/ProjectCardShowcaseWithTopImage";
import { InStudyProjectCardShowcase } from "../../../cards/project-card-showcase/InStudyProjectCardShowcase";
import { ProjectCardShowcase } from "../../../cards/project-card-showcase/ProjectCardShowcase";
import { useState } from "react";
import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import { InStudyProjectCardWithTopImage } from "@/components/cards/project-card-showcase/InStudyProjectCardWithTopImage";

const projectData: Omit<
  Parameters<typeof ProjectCardShowcase>[number],
  "status"
> = {
  profitability: "14",
  src: undefined,
  isDarkMode: true,
  projectId: undefined,
  totalProjectAmount: 402000,
  currentAmount: 0, //123000,
  region: "Mallorca, Baleares",
  street: "C/ Avenida de Don Blas de Lezo 23",
  businessModel: "Alquiler",
};

export const TeamExperience = () => {
  const { isXSmall } = useBreakPoints();
  const [currentAmount, setCurrentAmount] = useState(0);
  const isFunding = (status: ProjectStatus) => {
    return (
      status === "funding" && currentAmount <= projectData.totalProjectAmount
    );
  };

  const text = (
    <div className={styles.teamExperience_experience}>
      <h2 className={styles.teamExperience_title}>
        Conoce el estado del proyecto en cada momento
      </h2>
      <p>
        La transparencia es uno de nuestros pilares clave. Es por ello que te
        mantenemos informado sobre el estado de cada proyecto, su duración y los
        posibles escenarios que puedan surgir. Esto es posible gracias a nuestra
        infraestructura organizativa sólida y a los contratos firmados entre
        todas las partes involucradas en cada proyecto.
      </p>
      <div>
        <LinkButton
          href="/transparencia"
          size="md"
          fullWidth={isXSmall ? true : false}
          button="primary"
        >
          Programa de transparencia
        </LinkButton>
      </div>
    </div>
  );

  return (
    <div className={styles.teamExperience_bg}>
      <div
        className={`${styles.teamExperience} ${styles.teamExperience_content}`}
      >
        {text}

        <div className={styles.teamExperience_projectCardWrapper}>
          {isXSmall ? (
            <ProjectShowcaseAnimation
              onChangeStatus={(status) => {
                if (status === "in_study") setCurrentAmount(0);
                if (isFunding(status)) {
                  setCurrentAmount((prev) => (prev += 10000));
                }
              }}
              projects={[
                <InStudyProjectCardWithTopImage
                  key={"a"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                />,
                <ProjectCardShowcaseWithTopImage
                  key={"b"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                  currentAmount={currentAmount}
                  profitability={projectData.profitability}
                  totalProjectAmount={projectData.totalProjectAmount}
                  status="funding"
                />,
                <ProjectCardShowcaseWithTopImage
                  key={"c"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                  currentAmount={projectData.currentAmount}
                  profitability={projectData.profitability}
                  totalProjectAmount={projectData.totalProjectAmount}
                  status="active"
                />,
                <ProjectCardShowcaseWithTopImage
                  key={"d"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                  currentAmount={projectData.currentAmount}
                  profitability={projectData.profitability}
                  totalProjectAmount={projectData.totalProjectAmount}
                  status="finished"
                />,
              ]}
            />
          ) : (
            <ProjectShowcaseAnimation
              onChangeStatus={(status) => {
                if (status === "in_study") setCurrentAmount(0);
                if (isFunding(status)) {
                  setCurrentAmount((prev) => (prev += 10000));
                }
              }}
              projects={[
                <InStudyProjectCardShowcase
                  key={"a"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                />,
                <ProjectCardShowcase
                  key={"b"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                  currentAmount={currentAmount}
                  profitability={projectData.profitability}
                  totalProjectAmount={projectData.totalProjectAmount}
                  status="funding"
                />,
                <ProjectCardShowcase
                  key={"c"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                  currentAmount={projectData.currentAmount}
                  profitability={projectData.profitability}
                  totalProjectAmount={projectData.totalProjectAmount}
                  status="active"
                />,
                <ProjectCardShowcase
                  key={"d"}
                  src={projectData.src}
                  projectId={projectData.projectId}
                  isDarkMode={projectData.isDarkMode}
                  region={projectData.region}
                  street={projectData.street}
                  businessModel={projectData.businessModel}
                  currentAmount={projectData.currentAmount}
                  profitability={projectData.profitability}
                  totalProjectAmount={projectData.totalProjectAmount}
                  status="finished"
                />,
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
};
