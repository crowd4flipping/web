import styles from "../styles/Card.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { ProjectCardTopImageLayout } from "./items/ProjectCardTopImageLayout";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";
import { HorizontalFinancialData } from "./items/HorizontalFinancialData";

type ProjectCardProps = Parameters<typeof ProjectCard>[number];

export const ProjectCardWithTopImage = (props: ProjectCardProps) => {
  const { isDarkMode = false } = props;
  return (
    <ProjectCardTopImageLayout
      isDarkMode={isDarkMode}
      top={
        <ProjectCardTopImage
          src={props.src}
          isDarkMode={isDarkMode}
          region={props.region}
          street={props.street}
          projectStatus={props.status}
        />
      }
      bottom={
        <>
          <div className={styles.projectCardShowcase_projectType}>
            {props.businessModel}
          </div>
          <HorizontalFinancialData
            isDarkMode={isDarkMode}
            status={props.status}
            currentAmount={props.currentAmount}
            totalProjectAmount={props.totalProjectAmount}
            profitability={props.profitability}
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
