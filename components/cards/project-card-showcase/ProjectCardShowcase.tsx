import styles from "../styles/Card.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { Tag, TagColor } from "@/components/tags/Tag";
import { ProjectStatus } from "routes/C4FCloudRoutes";
import { ReactElement } from "react";
import { ProjectFinancialDataShowcase } from "./ProjectFinancialDataShowcase";
import { ProjectImageShowcase } from "./ProjectImageShowcase";
import { ProjectCardLayout } from "./ProjectCardLayout";
import { ProjectTag } from "./ProjectTag";

type ProjectImageProps = Parameters<typeof ProjectImageShowcase>[number];
type ProjectFinancialDataProps = Parameters<
  typeof ProjectFinancialDataShowcase
>[number];

type ProjectCardProps = {
  status: Exclude<ProjectStatus, "in_study">;
  projectType: string;
};

type ProjectCardShowcaseProps = ProjectCardProps &
  ProjectFinancialDataProps &
  ProjectImageProps;

export const ProjectCardShowcase = (props: ProjectCardShowcaseProps) => {

  return (
    <ProjectCardLayout
      leftSide={
        <>
          <div>
            <ProjectTag status={props.status} />
            
            <div className={styles.projectCardShowcase_projectType}>
              {props.projectType}
            </div>
          </div>
          <ProjectFinancialDataShowcase
            status={props.status}
            isHorizontal={false}
            currentAmount={props.currentAmount}
            totalProjectAmount={props.totalProjectAmount}
            profitability={props.profitability}
          />
        </>
      }
      rightSide={
        <>
          <ProjectImageShowcase region={props.region} street={props.street} />

          <div className={styles.projectCardShowcase_button}>
            <Button size="sm" button="secondary" fullWidth>
              Ver proyecto
            </Button>
          </div>
        </>
      }
    />
  );
};
