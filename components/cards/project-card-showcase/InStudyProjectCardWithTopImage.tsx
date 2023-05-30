import { Tag } from "@/components/tags/Tag";
import { ProjectCardLayout } from "./ProjectCardLayout";
import { ProjectFinancialDataShowcase } from "./ProjectFinancialDataShowcase";
import { ProjectImageShowcase } from "./ProjectImageShowcase";
import { Button } from "@/components/buttons/primary/Button";
import styles from "../styles/Card.module.scss";
import { ProjectCardTopImageLayout } from "./ProjectCardTopImageLayout";
import { ProjectCardTopImage } from "./ProjectCardTopImage";
import { HorizontalFinancialData } from "./HorizontalFinancialData";

type InStudyProjectCardWithTopImageProps = Parameters<
  typeof ProjectImageShowcase
>[number] & { projectType: string; src: string | undefined };

export const InStudyProjectCardWithTopImage = ({
  region,
  street,
  projectType,
  src
}: InStudyProjectCardWithTopImageProps) => {
  return (
    <ProjectCardTopImageLayout
      top={
        <ProjectCardTopImage
          src={src}
          region={region}
          street={street}
          projectStatus={"in_study"}
        />
      }
      bottom={
        <>
          <div className={styles.projectCardShowcase_projectType}>
            {projectType}
          </div>
          <HorizontalFinancialData
            status={"in_study"}
            currentAmount={0}
            totalProjectAmount={0}
            profitability={""}
          />
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
