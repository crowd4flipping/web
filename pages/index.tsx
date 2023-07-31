import { HomePage } from "@/components/sections/home-page/HomePage";
import { ProjectData } from "@/components/sections/projects-page/sections/types/types";
import { getProjects } from "lib/get-projects";
import { GetStaticProps } from "next";

export default function Home({ projects }: { projects: ProjectData[] }) {
  return <HomePage projects={projects} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
};
