import styles from "./styles/Projects.module.scss";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { ProjectCard } from "@/components/cards/project-card/ProjectCard";
import { ReactElement } from "react";
import { ProjectCardWithTopImage } from "@/components/cards/project-card/ProjectCardWithTopImage";
import { ProjectData } from "./types/ProjectData";

type ProjectProps = Omit<Parameters<typeof ProjectCard>[number], "size">;

const projectList: ProjectProps[] = [
  {
    projectId: "8G17VwSNT0FOHGcg4gii",
    profitability: "13",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2F8G17VwSNT0FOHGcg4gii%2F20562_1301161659200_6012530_n.jpg?alt=media&token=42d0f924-de52-4310-b9d0-11bc8b0524dd",
    street: "Chalet en Costitx",
    totalAmount: "380.000",
  },
  {
    projectId: "OZw7cVRPojjJOnKrmgQN",
    profitability: "17",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2FOZw7cVRPojjJOnKrmgQN%2F4d11e94e-aa97-4755-afd6-1b4d769cb561.jpg?alt=media&token=7f08762c-3f18-4227-8c61-9f558a9f654d",
    street: "Piso en General Riera, Palma",
    totalAmount: "235.000",
  },
  {
    projectId:"cJJvQH8A1VCx7bIhpT9M",
    profitability: "14",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2FcJJvQH8A1VCx7bIhpT9M%2FIMG-20221213-WA0005.jpg?alt=media&token=3eb484c0-56c6-4076-975b-f0d6db89127e",
    street: "Chalet en Cala Vinyes",
    totalAmount: "740.000",
  },
  {
    projectId:"sXGiqNobBNBI4eU9bV6b",
    profitability: "11",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2FsXGiqNobBNBI4eU9bV6b%2Fson%20vida00000%20(1).jpg?alt=media&token=b2531f2d-b8fe-4140-aa60-50d397e990d0",
    street: "Chalet en Son Vida, Palma",
    totalAmount: "1.793.000",
  },
];

export const ProjectsSection = () => {
  const { breakingPoint } = useBreakPoints();

  const projectCard = (
    props: ProjectProps
  ): Record<typeof breakingPoint, ReactElement> => ({
    xl: <ProjectCard key={props.src} {...props} />,
    lg: <ProjectCard key={props.src} {...props} />,
    md: <ProjectCard key={props.src} {...props} size="sm" />,
    sm: (
      <div key={props.src} className={styles.projectsSection_cardWrapper}>
        <ProjectCard {...props} />
      </div>
    ),
    xs: (
      <div key={props.src} className={styles.projectsSection_cardWrapper}>
        <ProjectCardWithTopImage {...props} />
      </div>
    ),
  });

  return (
    <section className={styles.projectsSection_bg}>
      <div className={styles.projectsSection}>
        <h2 className={styles.projectsSection_title}>
          Algunos de nuestros proyectos
        </h2>

        <div className={styles.projectsSection_projects}>
          {projectList
            .slice(0, 2)
            .map((project) => projectCard(project)[breakingPoint])}
        </div>

        <div className={styles.projectsSection_projects}>
          {projectList
            .slice(2, 4)
            .map((project) => projectCard(project)[breakingPoint])}
        </div>
      </div>
    </section>
  );
};
