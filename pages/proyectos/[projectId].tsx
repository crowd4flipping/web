import React from "react";
import Head from "next/head";
import { ProjectPage } from "@/components/sections/projects-page/ProjectPage";
import { Routes } from "routes/Routes";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Index({ project }) {
  const title = project.name + " | Crowd4Flipping";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={project.description} />
      </Head>
      <ProjectPage project={{ ...project, media: project.projectMedia }} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const projectId = context.params.projectId as string;
  const api = Routes.cloud().projectId(projectId);
  const response = await fetch(api);
  const project = await response.json();

  return {
    props: {
      project,
    },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const api = Routes.cloud().projects();

  const projectsFound = await fetch(api);
  const projectsJSON = await projectsFound.json();

  const paths = projectsJSON["data"].map((project) => ({
    params: { projectId: project.id },
  }));

  return { paths, fallback: "blocking" };
};
