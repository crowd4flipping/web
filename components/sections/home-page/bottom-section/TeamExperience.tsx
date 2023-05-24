import Image from "next/image";
import styles from "./styles/TeamExperience.module.scss";
import Workers from "@/public/images/home-page/workers-in-a-construction.png";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { LinkButton } from "@/components/buttons/primary/Button";
import { ProjectCard } from "@/components/cards/project-card/ProjectCard";
import { ProjectCardShowcase } from "@/components/cards/project-card-showcase/ProjectCardShowcase";

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
          Política de transparencia
        </LinkButton>
      </div>
    </div>
  );

  if (isXSmall)
    return (
      <div className={styles.teamExperience_bg}>
        <div className={styles.teamExperience}>
          <Image
            objectFit="cover"
            width={498}
            height={208}
            alt="con-mas-de-veinte-años-de-experiencia"
            src={Workers}
          />

          {text}
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
          <ProjectCardShowcase status="processing" />
        </div>
      </div>
    </div>
  );
};
