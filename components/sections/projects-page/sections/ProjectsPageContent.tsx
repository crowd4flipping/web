import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import { ProjectCard } from "@crowd4flipping/ui-components";
import { ProjectData } from "./types/types";
import { unhandledType } from "utils/utils";
import styles from "./styles/ProjectsPage.module.scss";

type Props = {
  projectsList: ProjectData[];
  filterByStatus: ProjectStatus;
  label: string;
};

export const ProjectsPageContent = ({
  projectsList,
  filterByStatus,
  label,
}: Props) => {
  const projects = filterProjects(projectsList)[filterByStatus];

  return (
    <div className={styles.projectsPage__content_wrapper}>
      <h2>Nuestros proyectos {label.toLowerCase()}</h2>
      <div className={styles.projectsPage__content}>
        {projects.length == 0 ? (
          <p>De momento no tenemos proyectos en este estado</p>
        ) : (
          <div className={styles.projectsPage__projects_wrapper}>
            {projects.map((project) => {
              return (
                <div key={project.id}>
                  <ProjectCard
                    isVertical
                    {...project}
                    region={project.state}
                    street={project.city}
                    totalProjectAmount={project.totalAmount}
                    profitability={project.profitability.toString()}
                    href={`/proyectos/${project.id}`}
                    src={project.images[0]}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  function filterProjects(projects: ProjectData[]) {
    let in_progress: ProjectData[] = [];
    let finished: ProjectData[] = [];
    let funding: ProjectData[] = [];
    let in_study: ProjectData[] = [];

    projects.forEach((project) => {
      switch (project.status) {
        case "in_progress":
          in_progress.push(project);
          break;
        case "finished":
          finished.push(project);
          break;
        case "funding":
          funding.push(project);
          break;
        case "in_study":
          in_study.push(project);
          break;
        default:
          throw unhandledType(project.status);
      }
    });

    const data: Record<ProjectStatus, ProjectData[]> = {
      in_progress,
      finished,
      funding,
      in_study,
    };

    return data;
  }
};
