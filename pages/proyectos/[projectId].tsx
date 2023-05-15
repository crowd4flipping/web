import React from "react";
import Head from "next/head";
import { ProjectsPage } from "@/components/sections/projects-page/ProjectsPage";
import { Route } from "routes/Routes";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Index({ project }) {
  return (
    <>
      <Head>
        <title>{project?.name}</title>
        <meta name="description" content={project.description} />
      </Head>
      <ProjectsPage project={{ ...project, media: project.projectMedia }} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projectId = context.params.projectId as string;
  const api = Route().api.project(projectId);
  const project = (await fetch(api).then((res) => res.json())) as object;

  return {
    props: {
      project,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const api = Route().api.projects;

  const projectsFound = await fetch(api);
  const projectsJSON = await projectsFound.json();

  const paths = projectsJSON["data"].map((project) => ({
    params: { projectId: project.id },
  }));

  return { paths, fallback: "blocking" };
};
