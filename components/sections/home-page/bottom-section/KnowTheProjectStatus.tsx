import styles from "./styles/knowTheProjectStatus.module.scss";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { ProjectCardAnimation } from "@/components/animations/ProjectCardAnimation";
import { useState } from "react";
import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import {
  LinkButton,
  ProjectCardDarkTheme,
} from "@crowd4flipping/ui-components";

const projectData: Omit<
  Parameters<typeof ProjectCardDarkTheme>[number],
  "status"
> = {
  src: "https://res.cloudinary.com/fernanprojects/image/upload/v1700814215/C4F/esiljje6v44ewqbvhezv.webp",
  profitability: "14",
  href: "/proyectos",
  totalProjectAmount: 402000,
  currentAmount: 0, //123000,
  region: "Mallorca, Baleares",
  street: "C/ Avenida de Don Blas de Lezo 23",
  businessModel: "Alquiler",
};

export const KnowTheProjectStatus = () => {
  const { isXSmall } = useBreakPoints();
  const array = Array<typeof projectData>(4).fill(projectData);
  const [currentAmount, setCurrentAmount] = useState(0);
  const isFunding = (status: ProjectStatus) => {
    return (
      status === "funding" && currentAmount <= projectData.totalProjectAmount
    );
  };

  return (
    <div className={styles.knowTheProjectStatus_bg}>
      <div
        className={`${styles.knowTheProjectStatus} ${styles.knowTheProjectStatus_content}`}
      >
        <div className={styles.knowTheProjectStatus_experience}>
          <h2 className={styles.knowTheProjectStatus_title}>
            Conoce el estado del proyecto en cada momento
          </h2>
          <p className={styles.knowTheProjectStatus_text}>
            La transparencia es uno de nuestros pilares clave. Es por ello que
            te mantenemos informado sobre el estado de cada proyecto, su
            duración y los posibles escenarios que puedan surgir. Esto es
            posible gracias a nuestra infraestructura organizativa sólida y a
            los contratos firmados entre todas las partes involucradas en cada
            proyecto.
          </p>
          <div>
            <LinkButton
              href="/transparencia"
              fullWidth={isXSmall ? true : false}
              variant="primary"
            >
              Programa de transparencia
            </LinkButton>
          </div>
        </div>

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
                ? array.map((project, i) => {
                    const projectStatus = (index: number) => {
                      if (index == 0) return "in_study";
                      if (index == 1) return "funding";
                      if (index == 2) return "in_progress";
                      if (index == 3) return "finished";
                    };
                    return (
                      <div key={projectStatus(i)}>
                        <ProjectCardDarkTheme
                          isVertical
                          src={project.src}
                          href={project.href}
                          region={project.region}
                          street={project.street}
                          businessModel={project.businessModel}
                          currentAmount={currentAmount}
                          profitability={project.profitability}
                          totalProjectAmount={project.totalProjectAmount}
                          status={projectStatus(i)}
                        />
                      </div>
                    );
                  })
                : array.map((project, i) => {
                    const projectStatus = (index: number) => {
                      if (index == 0) return "in_study";
                      if (index == 1) return "funding";
                      if (index == 2) return "in_progress";
                      if (index == 3) return "finished";
                    };
                    return (
                      <div key={projectStatus(i)}>
                        <ProjectCardDarkTheme
                          src={project.src}
                          href={project.href}
                          region={project.region}
                          street={project.street}
                          businessModel={project.businessModel}
                          currentAmount={currentAmount}
                          profitability={project.profitability}
                          totalProjectAmount={project.totalProjectAmount}
                          status={projectStatus(i)}
                        />
                      </div>
                    );
                  })
            }
          />
        </div>
      </div>
    </div>
  );
};
