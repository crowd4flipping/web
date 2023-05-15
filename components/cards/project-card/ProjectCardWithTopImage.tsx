import { ProjectAddress } from "./ProjectAddress";
import styles from "../styles/Card.module.scss";
import { ProjectFinancialData } from "./ProjectFinancialData";
import Project from "@/public/images/obras/foto_casa_example_02.jpg";
import Image from "next/image";
import { Button } from "@/components/buttons/primary/Button";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";

export const ProjectCardWithTopImage = (
  props: Parameters<typeof ProjectCard>[number]
) => {
  const cardContentStyle = `${styles.cardProjectWithTopImage_content} ${
    props.size == "sm" && styles.cardProjectWithTopImage_content_sm
  }`;

  return (
    <div className={styles.cardProjectWithTopImage}>
      <div className={cardContentStyle}>
        <div className={styles.cardProjectWithTopImage_imageWrapper}>
          <Image
            className={styles.cardProjectWithTopImage_image}
            alt="project-in-mallorca"
            width={300}
            height={200}
            src={props.src}
          />
        </div>

        <div>
          <ProjectAddress region="Mallorca, Baleares" street={props.street} />

          <ProjectFinancialData
            isHorizontal
            totalProjectAmount={props.totalAmount}
            profitability={props.profitability}
          />
        </div>

        <div className={styles.cardProjectWithTopImage_button}>
        <Link href={`/proyectos/${props.projectId}`}>
            <Button size="sm" button="secondary" fullWidth>
              Ver proyecto
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
