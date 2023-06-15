import { Tag } from "@/components/tags/Tag";
import { ProjectCardLayout } from "./items/ProjectCardLayout";
import { ProjectFinancialDataShowcase } from "./items/ProjectFinancialDataShowcase";
import { ProjectImageShowcase } from "./items/ProjectImageShowcase";
import { Button } from "@/components/buttons/primary/Button";
import styles from "../styles/Card.module.scss";
import { ProjectCardTopImageLayout } from "./items/ProjectCardTopImageLayout";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";
import { HorizontalFinancialData } from "./items/HorizontalFinancialData";
import { ProjectCardShowcase } from "./ProjectCardShowcase";
import { InStudyProjectCardShowcase } from "./InStudyProjectCardShowcase";
import Link from "next/link";

type InStudyProjectCardWithTopImageProps = Parameters<
  typeof InStudyProjectCardShowcase
>[number];

export const InStudyProjectCardWithTopImage = ({
  region,
  street,
  src,
  projectId,
  businessModel,
  isDarkMode = false,
}: InStudyProjectCardWithTopImageProps) => {
  return (
    <ProjectCardTopImageLayout
      isDarkMode={isDarkMode}
      top={
        <ProjectCardTopImage
          isDarkMode={isDarkMode}
          src={src}
          region={region}
          street={street}
          projectStatus={"in_study"}
        />
      }
      bottom={
        <>
          <div className={styles.projectCardShowcase_projectType}>
            {businessModel}
          </div>
          <HorizontalFinancialData
            status={"in_study"}
            currentAmount={0}
            totalProjectAmount={0}
            profitability={""}
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
