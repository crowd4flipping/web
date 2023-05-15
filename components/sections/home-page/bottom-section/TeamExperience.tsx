import Image from "next/image";
import styles from "./styles/TeamExperience.module.scss";
import Workers from "@/public/images/home-page/workers-in-a-construction.png";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";

export const TeamExperience = () => {
  const { isXSmall } = useBreakPoints();

  const text = (
    <div className={styles.teamExperience_experience}>
      <div>
        <h2 className={styles.teamExperience_title}>
          Contamos con más de 20 años de experiencia
        </h2>
        <p>
          Aseguramos una correcta ejecución en cada uno de los proyectos.
          Olvídate de las complicaciones y sorpresas desagradables en la letra
          pequeña
        </p>
      </div>
    </div>
  );

  if (isXSmall)
    return (
      <div className={styles.teamExperience_bg}>
        <div className={styles.teamExperience}>
          <Image
            className={styles.teamExperience_image}
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

        <Image
          className={styles.teamExperience_image}
          width={498}
          height={208}
          alt="con-mas-de-veinte-años-de-experiencia"
          src={Workers}
        />
      </div>
    </div>
  );
};
