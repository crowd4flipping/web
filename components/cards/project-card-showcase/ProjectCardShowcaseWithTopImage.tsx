import styles from "../styles/Card.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { ProjectCardTopImageLayout } from "./ProjectCardTopImageLayout";
import { ProjectCardShowcase } from "./ProjectCardShowcase";
import { ProjectCardTopImage } from "./ProjectCardTopImage";
import { HorizontalFinancialData } from "./HorizontalFinancialData";

type ProjectCardProps = Parameters<typeof ProjectCardShowcase>[number] & {
  projectType: string;
  isDarkMode?: boolean;
  src: string | undefined;
};

export const ProjectCardShowcaseWithTopImage = (props: ProjectCardProps) => {
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
            {props.projectType}
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
