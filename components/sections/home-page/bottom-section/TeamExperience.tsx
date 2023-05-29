import Image from "next/image";
import styles from "./styles/TeamExperience.module.scss";
import Workers from "@/public/images/home-page/workers-in-a-construction.png";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { LinkButton } from "@/components/buttons/primary/Button";
import { ProjectCardShowcase } from "@/components/cards/project-card-showcase/ProjectCardShowcase";
import { ProjectShowcaseAnimation } from "@/components/cards/project-card-showcase/ProjectShowcaseAnimation";
import { ProjectCardShowcaseWithTopImage } from "@/components/cards/project-card-showcase/ProjectCardShowcaseWithTopImage";
import { Tag } from "@/components/tags/Tag";
import { ProjectTag } from "@/components/cards/project-card-showcase/ProjectTag";

export const TeamExperience = () => {
  const { isXSmall } = useBreakPoints();

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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "space-around",

              }}
            >
              <ProjectTag status="in_study" />
              <ProjectTag status="finished" />
              <ProjectTag status="funding" />
              <ProjectTag status="active" />
              
            </div>
          ) : (
            <ProjectShowcaseAnimation
              projectType="Alquiler"
              street="C/ Avenida de Don Blas de Lezo 23"
              totalProjectAmount={402000}
              currentAmount={123000}
              profitability="14"
              region="Mallorca, Baleares"
              status="funding"
            />
          )}
        </div>
      </div>
    </div>
  );
};
