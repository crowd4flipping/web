import { filterProjects } from "utils/utils";
import { ProjectData } from "../../projects-page/sections/types/types";
import styles from "./styles/Projects.module.scss";
import { LinkButton, ProjectCard } from "@crowd4flipping/ui-components";
import NextImage from "next/image";

export const ProjectsSection = ({ projects }: { projects: ProjectData[] }) => {
  const { funding, finished } = filterProjects(projects);
  const areProjectsFunding = funding.length == 0 ? false : true;

  return (
    <section className={styles.projectsSection_bg}>
      <div className={styles.projectsSection}>
        {areProjectsFunding ? (
          <h2>Tenemos proyectos en financiación</h2>
        ) : (
          <h2 className={styles.projectsSection_title}>
            Algunos de nuestros proyectos finalizados
          </h2>
        )}

        <div className={styles.projectsSection_projects}>
          {areProjectsFunding
            ? getProjectCardList(funding)
            : getProjectCardList(finished)}
        </div>
        <div className={styles.projectsSection__all_projects_button}>
          <LinkButton href="/proyectos" variant="primary">
            Ver todos los proyectos
          </LinkButton>
        </div>
      </div>
    </section>
  );

  function getProjectCardList(projects: ProjectData[]) {
    return projects.map((project) => {
      return (
        <div key={project.id} className={styles.projectsSection_project}>
          <ProjectCard
            isVertical
            NextImageComponent={NextImage}
            src={project.images[0]}
            href={`/proyectos/${project.id}`}
            currentAmount={parseInt(project.currentAmount.toString())}
            profitability={project.profitability.toString()}
            businessModel={project.businessModel}
            region={project.state}
            status={project.status}
            street={project.city}
            totalProjectAmount={project.totalAmount}
          />
        </div>
      );
    });
  }
};
