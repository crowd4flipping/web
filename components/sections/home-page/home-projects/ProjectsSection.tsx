import styles from "./styles/Projects.module.scss";
import { ProjectCard } from "@crowd4flipping/ui-components";

type ProjectProps = {
  businessModel: string;
  src: string;
  profitability: string;
  totalAmount: string;
  street: string;
  projectId: string;
};

const projectList: ProjectProps[] = [
  {
    projectId: "8G17VwSNT0FOHGcg4gii",
    profitability: "13",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2F8G17VwSNT0FOHGcg4gii%2F20562_1301161659200_6012530_n.jpg?alt=media&token=42d0f924-de52-4310-b9d0-11bc8b0524dd",
    street: "Chalet en Costitx",
    totalAmount: "380000",
    businessModel: "House Flipping",
  },
  {
    projectId: "OZw7cVRPojjJOnKrmgQN",
    profitability: "17",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2FOZw7cVRPojjJOnKrmgQN%2F4d11e94e-aa97-4755-afd6-1b4d769cb561.jpg?alt=media&token=7f08762c-3f18-4227-8c61-9f558a9f654d",
    street: "Piso en General Riera, Palma",
    totalAmount: "235000",
    businessModel: "House Flipping",
  },
  {
    projectId: "cJJvQH8A1VCx7bIhpT9M",
    profitability: "14",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2FcJJvQH8A1VCx7bIhpT9M%2FIMG-20221213-WA0005.jpg?alt=media&token=3eb484c0-56c6-4076-975b-f0d6db89127e",
    street: "Chalet en Cala Vinyes",
    totalAmount: "740000",
    businessModel: "House Flipping",
  },
  {
    projectId: "sXGiqNobBNBI4eU9bV6b",
    profitability: "11",
    src: "https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/images-projects%2FsXGiqNobBNBI4eU9bV6b%2Fson%20vida00000%20(1).jpg?alt=media&token=b2531f2d-b8fe-4140-aa60-50d397e990d0",
    street: "Chalet en Son Vida, Palma",
    totalAmount: "1793000",
    businessModel: "House Flipping",
  },
];

export const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection_bg}>
      <div className={styles.projectsSection}>
        <h2 className={styles.projectsSection_title}>
          Algunos de nuestros proyectos finalizados
        </h2>

        <div className={styles.projectsSection_projects}>
          {projectList.map((project) => (
            <div
              key={project.projectId}
              className={styles.projectsSection_project}
            >
              <ProjectCard
                isVertical
                src={project.src}
                key={project.projectId}
                href={`/proyectos/${project.projectId}`}
                currentAmount={parseInt(project.totalAmount)}
                profitability={project.profitability}
                businessModel={project.businessModel}
                region={"Mallorca, Baleares"}
                status="finished"
                street={project.street}
                totalProjectAmount={parseInt(project.totalAmount)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
