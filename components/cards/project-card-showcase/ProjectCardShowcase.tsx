import styles from "../styles/Card.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { Tag, TagColor } from "@/components/tags/Tag";
import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import { ReactElement } from "react";
import { ProjectFinancialDataShowcase } from "./items/ProjectFinancialDataShowcase";
import { ProjectImageShowcase } from "./items/ProjectImageShowcase";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectTag } from "./items/ProjectTag";
import Link from "next/link";

type ProjectImageProps = Omit<
  Parameters<typeof ProjectImageShowcase>[number],
  "isSmall"
>;
type ProjectFinancialDataProps = Parameters<
  typeof ProjectFinancialDataShowcase
>[number];

type ProjectCardProps = {
  status: Exclude<ProjectStatus, "in_study">;
  businessModel: string;
  isDarkMode?: boolean;
  isSmall?: boolean;
  projectId: string | undefined;
  src: string | undefined;
};

type ProjectCardShowcaseProps = ProjectCardProps &
  ProjectFinancialDataProps &
  ProjectImageProps;

export const ProjectCardShowcase = (props: ProjectCardShowcaseProps) => {
  const { isDarkMode = false, isSmall = false } = props;
  const tagStyles = `${styles.projectCardShowcase_projectType} ${
    !isDarkMode && styles.projectCardShowcase_projectType_whiteMode
  }`;

  return (
    <ProjectCardLayout
      isDarkMode={isDarkMode}
      isSmall={isSmall}
      leftSide={
        <>
          <div>
            <ProjectTag isDarkMode={isDarkMode} status={props.status} />
            <div className={tagStyles}>{props.businessModel}</div>
          </div>
          <ProjectFinancialDataShowcase
            isDarkMode={isDarkMode}
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
          <ProjectImageShowcase
            isSmall={isSmall}
            src={props.src}
            region={props.region}
            street={props.street}
          />
          <div className={styles.projectCardShowcase_button}>
            {props.projectId ? (
              <Link href={`/proyectos/${props.projectId}`}>
                <Button size="sm" button="secondary" fullWidth>
                  Ver proyecto
                </Button>
              </Link>
            ) : (
              <Button size="sm" button="secondary" fullWidth>
                Ver proyecto
              </Button>
            )}
          </div>
        </>
      }
    />
  );
};
