import { ProjectsPage } from "@/components/sections/projects-page/ProjectsPage";
import { ProjectData } from "@/components/sections/projects-page/sections/types/types";
import { getProjects } from "lib/get-projects";
import { GetStaticProps } from "next";

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return <ProjectsPage projectsList={projects} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 300,
  };
};
