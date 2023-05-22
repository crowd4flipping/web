import { Query } from "./types/types";

type ProjectStatus = "in-study" | "processing" | "finished";
type QueryProjects = { status: ProjectStatus };

export class C4FCloudRoutes {
  private apiProjects = "api/get-projects/";
  constructor(private c4fCloudSite: string) {}

  projectId(id: string): string {
    return this.c4fCloudSite + this.apiProjects + id;
  }

  projects(): string {
    return this.c4fCloudSite + this.apiProjects;
  }

  queryProjects(query: Query<QueryProjects>): string {
    const route = this.c4fCloudSite + "proyectos?";
    return this.query(route, query);
  }


  contact(): string {
    return this.c4fCloudSite + "api/contact/";
  }

  private query(route: string, queries: object) {
    const entries = Object.entries(queries);

    entries.forEach((q, index) => {
      const query = q[0];
      const data = q[1];

      route += `${query}=${data}`;

      if (index + 1 < entries.length) route += "&";
    });

    return route;
  }
}
