import styles from "../styles/Card.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import { ProjectFinancialData } from "./items/ProjectFinancialData";
import { ProjectImage } from "./items/ProjectImage";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectTag } from "./items/ProjectTag";
import Link from "next/link";

type ProjectImageProps = Omit<
  Parameters<typeof ProjectImage>[number],
  "isSmall"
>;
type ProjectFinancialDataProps = Parameters<
  typeof ProjectFinancialData
>[number];

type ProjectProps = {
  status: Exclude<ProjectStatus, "in_study">;
  businessModel: string;
  isDarkMode?: boolean;
  isSmall?: boolean;
  projectId: string | undefined;
  src: string | undefined;
};

type ProjectCardProps = ProjectProps &
  ProjectFinancialDataProps &
  ProjectImageProps;

export const ProjectCard = (props: ProjectCardProps) => {
  const { isDarkMode = false, isSmall = false } = props;
  const tagStyles = `${styles.projectCard_projectType} ${
    !isDarkMode && styles.projectCard_projectType_whiteMode
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
          <ProjectFinancialData
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
          <ProjectImage
            isSmall={isSmall}
            src={props.src}
            region={props.region}
            street={props.street}
          />
          <div className={styles.projectCard_button}>
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
