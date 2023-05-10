export const Route = () => {
  const c4fCloud = process.env.NEXT_PUBLIC_C4F_CLOUD;
  const c4f_app = process.env.NEXT_PUBLIC_C4F_APP;
  const apiProjects = "api/get-projects/";

  return {
    api: {
      projects: c4fCloud + apiProjects,
      project: (id: string) => c4fCloud + apiProjects + id,
    },
    site: {
      c4f_app: {
        host: c4f_app,
        projects: () => c4f_app + "proyectos",
        project: (id: string) => c4f_app + `proyectos/${id}`,
      },
    },
  };
};
