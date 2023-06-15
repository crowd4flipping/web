import { Tag } from "@/components/tags/Tag";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectFinancialDataShowcase } from "./items/ProjectFinancialDataShowcase";
import { ProjectImageShowcase } from "./items/ProjectImageShowcase";
import { Button } from "@/components/buttons/primary/Button";
import styles from "../styles/Card.module.scss";
import { ProjectTag } from "./items/ProjectTag";
import Link from "next/link";

type InStudyProjectCardShowcaseProps = Parameters<
  typeof ProjectImageShowcase
>[number] & {
  businessModel: string;
  isDarkMode?: boolean;
  projectId: string | undefined;
};

export const InStudyProjectCardShowcase = ({
  region,
  street,
  businessModel,
  isDarkMode = false,
  projectId,
  src,
  isSmall,
}: InStudyProjectCardShowcaseProps) => {
  return (
    <ProjectCardLayout
      isDarkMode={isDarkMode}
      leftSide={
        <>
          <div>
            <ProjectTag isDarkMode={isDarkMode} status="in_study" />
            <div className={styles.projectCardShowcase_projectType}>
              {businessModel}
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
          <ProjectImageShowcase
            isSmall={isSmall}
            src={src}
            region={region}
            street={street}
          />
          <div className={styles.projectCardShowcase_button}>
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
          </div>
        </>
      }
    />
  );
};
