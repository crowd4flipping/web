import { ProjectAddress } from "./ProjectAddress";
import styles from "../styles/Card.module.scss";
import { ProjectFinancialData } from "./ProjectFinancialData";
import Project from "@/public/images/obras/foto_casa_example_02.jpg";
import Image from "next/image";
import { Button } from "@/components/buttons/primary/Button";
import Link from "next/link";

type ProjectCardProps = {
  size?: "lg" | "sm";
  src: string;
  profitability: string;
  totalAmount: string;
  street: string;
  projectId: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const cardContentStyle = `${styles.cardProject_content} ${
    props.size == "sm" && styles.cardProject_content_sm
  }`;
  const cardContentLeftStyle = `${
    props.size == "sm"
      ? styles.cardProject_contentLeft_sm
      : styles.cardProject_contentLeft
  }`;

  return (
    <div className={styles.cardProject}>
      <div className={cardContentStyle}>
        <div className={cardContentLeftStyle}>
          <ProjectAddress region="Mallorca, Baleares" street={props.street} />

          <ProjectFinancialData
            isHorizontal={props.size == "sm" && true}
            totalProjectAmount={props.totalAmount}
            profitability={props.profitability}
          />
        </div>

        <div className={styles.cardProject_contentRight}>
          <div className={styles.cardProject_image}>
            <Image
              className={styles.cardProject_image}
              objectFit="cover"
              alt="project-in-mallorca"
              width={232}
              height={200}
              src={props.src}
            />
          </div>
          <div className={styles.cardProject_button}>
            <Link href={`/proyectos/${props.projectId}`}>
              <Button size="sm" button="secondary" fullWidth>
                Ver proyecto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
