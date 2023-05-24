import styles from "../styles/Card.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { Tag, TagColor } from "@/components/tags/Tag";
import { ProjectStatus } from "routes/C4FCloudRoutes";
import { ReactElement } from "react";
import { ProjectFinancialDataShowcase } from "./ProjectFinancialDataShowcase";
import { ProjectAddressShowcase } from "./ProjectAddressShowcase";

export const ProjectCardShowcase = ({ status }: { status: ProjectStatus }) => {
  const statusText: Record<ProjectStatus, ReactElement> = {
    in_study: <p>En estudio</p>,
    processing: <p>En desarrollo</p>,
    finished: <p>Finalizado</p>,
  };

  const statusColor: Record<ProjectStatus, TagColor> = {
    in_study: "blue-darkmod",
    processing: "green-darkmod",
    finished: "yellow-darkmod",
  };

  return (
    <div className={`${styles.cardProject} ${styles.projectCardShowcase}`}>
      <div className={styles.cardProject_content}>
        <div className={styles.cardProject_contentLeft}>
          <ProjectAddressShowcase
            region="Mallorca, Baleares"
            street={"C/ Blas de Lezo"}
          />

          <Tag color={statusColor[status]}>{statusText[status]}</Tag>
          <ProjectFinancialDataShowcase
            status={status}
            isHorizontal={false}
            currentAmount={220000}
            totalProjectAmount={753500}
            profitability={"14"}
          />
        </div>

        <div className={styles.cardProject_contentRight}>
          <div className={styles.projectCardShowcase_image} />
          <div className={styles.cardProject_button}>
            <Button size="sm" button="secondary" fullWidth>
              Ver proyecto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
