import { Tag } from "@/components/tags/Tag";
import { ProjectCardLayout } from "./ProjectCardLayout";
import { ProjectFinancialDataShowcase } from "./ProjectFinancialDataShowcase";
import { ProjectImageShowcase } from "./ProjectImageShowcase";
import { Button } from "@/components/buttons/primary/Button";
import styles from "../styles/Card.module.scss";
import { ProjectTag } from "./ProjectTag";
import Link from "next/link";

type InStudyProjectCardShowcaseProps = Parameters<
  typeof ProjectImageShowcase
>[number] & {
  projectType: string;
  isDarkMode?: boolean;
  projectId: string | undefined;
};

export const InStudyProjectCardShowcase = ({
  region,
  street,
  projectType,
  isDarkMode = false,
  projectId,
  src,
}: InStudyProjectCardShowcaseProps) => {
  return (
    <ProjectCardLayout
      isDarkMode={isDarkMode}
      leftSide={
        <>
          <div>
            <ProjectTag isDarkMode={isDarkMode} status="in_study" />
            <div className={styles.projectCardShowcase_projectType}>
              {projectType}
            </div>
          </div>
          <div>
            <ProjectFinancialDataShowcase
              status={"in_study"}
              isHorizontal={false}
              currentAmount={0}
              totalProjectAmount={0}
              profitability={""}
            />
          </div>
        </>
      }
      rightSide={
        <>
          <ProjectImageShowcase src={src} region={region} street={street} />
          {projectId ? (
            <Link href={`/proyectos/${projectId}`}>
              <Button size="sm" button="secondary" fullWidth>
                Ver proyecto
              </Button>
            </Link>
          ) : (
            <Button size="sm" button="secondary" fullWidth>
              Ver proyecto
            </Button>
          )}
        </>
      }
    />
  );
};
