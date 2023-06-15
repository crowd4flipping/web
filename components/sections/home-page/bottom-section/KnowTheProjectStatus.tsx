import styles from "./styles/knowTheProjectStatus.module.scss";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { LinkButton } from "@/components/buttons/primary/Button";
import { ProjectCardAnimation } from "@/components/cards/project-card/ProjectCardAnimation";
import { ProjectCardWithTopImage } from "@/components/cards/project-card/ProjectCardWithTopImage";
import { InStudyProjectCard } from "../../../cards/project-card/InStudyProjectCard";
import { ProjectCard } from "../../../cards/project-card/ProjectCard";
import { useState } from "react";
import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import { InStudyProjectCardWithTopImage } from "@/components/cards/project-card/InStudyProjectCardWithTopImage";

const projectData: Omit<Parameters<typeof ProjectCard>[number], "status"> = {
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

export const KnowTheProjectStatus = () => {
  const { isXSmall } = useBreakPoints();
  const [currentAmount, setCurrentAmount] = useState(0);
  const isFunding = (status: ProjectStatus) => {
    return (
      status === "funding" && currentAmount <= projectData.totalProjectAmount
    );
  };

  const text = (
    <div className={styles.knowTheProjectStatus_experience}>
      <h2 className={styles.knowTheProjectStatus_title}>
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
    <div className={styles.knowTheProjectStatus_bg}>
      <div
        className={`${styles.knowTheProjectStatus} ${styles.knowTheProjectStatus_content}`}
      >
        {text}

        <div className={styles.knowTheProjectStatus_projectCardWrapper}>
          <ProjectCardAnimation
            onChangeStatus={(status) => {
              if (status === "in_study") setCurrentAmount(0);
              if (isFunding(status)) {
                setCurrentAmount((prev) => (prev += 10000));
              }
            }}
            projects={
              isXSmall
                ? [
                    <InStudyProjectCardWithTopImage
                      key={"a"}
                      src={projectData.src}
                      projectId={projectData.projectId}
                      isDarkMode={projectData.isDarkMode}
                      region={projectData.region}
                      street={projectData.street}
                      businessModel={projectData.businessModel}
                    />,
                    <ProjectCardWithTopImage
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
                    <ProjectCardWithTopImage
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
                    <ProjectCardWithTopImage
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
                  ]
                : [
                    <InStudyProjectCard
                      key={"a"}
                      src={projectData.src}
                      projectId={projectData.projectId}
                      isDarkMode={projectData.isDarkMode}
                      region={projectData.region}
                      street={projectData.street}
                      businessModel={projectData.businessModel}
                    />,
                    <ProjectCard
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
                    <ProjectCard
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
                    <ProjectCard
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
                  ]
            }
          />
        </div>
      </div>
    </div>
  );
};
