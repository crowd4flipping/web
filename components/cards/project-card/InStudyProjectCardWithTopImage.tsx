
import { Button } from "@/components/buttons/primary/Button";
import styles from "../styles/Card.module.scss";
import { ProjectCardTopImageLayout } from "./items/ProjectCardTopImageLayout";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";
import { HorizontalFinancialData } from "./items/HorizontalFinancialData";
import { InStudyProjectCard } from "./InStudyProjectCard";
import Link from "next/link";

type InStudyProjectCardWithTopImageProps = Parameters<
  typeof InStudyProjectCard
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
          <div className={styles.projectCard_projectType}>
            {businessModel}
          </div>
          <HorizontalFinancialData
            status={"in_study"}
            currentAmount={0}
            totalProjectAmount={0}
            profitability={""}
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
