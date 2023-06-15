import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectFinancialData } from "./items/ProjectFinancialData";
import { ProjectImage } from "./items/ProjectImage";
import { Button } from "@/components/buttons/primary/Button";
import styles from "../styles/Card.module.scss";
import { ProjectTag } from "./items/ProjectTag";
import Link from "next/link";

type InStudyProjectCardProps = Parameters<
  typeof ProjectImage
>[number] & {
  businessModel: string;
  isDarkMode?: boolean;
  projectId: string | undefined;
};

export const InStudyProjectCard = ({
  region,
  street,
  businessModel,
  isDarkMode = false,
  projectId,
  src,
  isSmall,
}: InStudyProjectCardProps) => {
  return (
    <ProjectCardLayout
      isDarkMode={isDarkMode}
      leftSide={
        <>
          <div>
            <ProjectTag isDarkMode={isDarkMode} status="in_study" />
            <div className={styles.projectCard_projectType}>
              {businessModel}
            </div>
          </div>
          <div>
            <ProjectFinancialData
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
          <ProjectImage
            isSmall={isSmall}
            src={src}
            region={region}
            street={street}
          />
          <div className={styles.projectCard_button}>
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
