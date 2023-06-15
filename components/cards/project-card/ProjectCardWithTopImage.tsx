import styles from "../styles/Card.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { ProjectCardTopImageLayout } from "./items/ProjectCardTopImageLayout";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardTopImage } from "./items/ProjectCardTopImage";
import { HorizontalFinancialData } from "./items/HorizontalFinancialData";
import Link from "next/link";

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
          <div className={styles.projectCard_projectType}>
            {props.businessModel}
          </div>
          <HorizontalFinancialData
            isDarkMode={isDarkMode}
            status={props.status}
            currentAmount={props.currentAmount}
            totalProjectAmount={props.totalProjectAmount}
            profitability={props.profitability}
          />
          {props.projectId ? (
            <div className={styles.projectCard_button}>
              <Link href={`/proyectos/${props.projectId}`}>
                <Button size="sm" button="secondary" fullWidth>
                  Ver proyecto
                </Button>
              </Link>
            </div>
          ) : (
            <div className={styles.projectCard_button}>
              <Button size="sm" button="secondary" fullWidth>
                Ver proyecto
              </Button>
            </div>
          )}
        </>
      }
    />
  );
};
