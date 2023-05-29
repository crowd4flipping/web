import { Tag } from "@/components/tags/Tag";
import { ProjectCardLayout } from "./ProjectCardLayout";
import { ProjectFinancialDataShowcase } from "./ProjectFinancialDataShowcase";
import { ProjectImageShowcase } from "./ProjectImageShowcase";
import { Button } from "@/components/buttons/primary/Button";
import styles from "../styles/Card.module.scss";

type InStudyProjectCardShowcaseProps = Parameters<
  typeof ProjectImageShowcase
>[number] & { projectType: string };

export const InStudyProjectCardShowcase = ({
  region,
  street,
  projectType,
}: InStudyProjectCardShowcaseProps) => {
  return (
    <ProjectCardLayout
      leftSide={
        <>
          <div>
            <Tag color="blue-darkmod">
              <p>En estudio</p>
            </Tag>

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
          <ProjectImageShowcase region={region} street={street} />

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
