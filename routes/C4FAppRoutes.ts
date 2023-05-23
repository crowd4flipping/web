export class C4FAppRoutes {
  constructor(private c4fAppSite: string) {}

  host(): string {
    return this.c4fAppSite;
  }

  queryHostFW(): string {
    return this.c4fAppSite + "?fw";
  }

  projects(): string {
    return this.c4fAppSite + "proyectos/";
  }

  projectId(id: string): string {
    return this.c4fAppSite + `proyectos/${id}`;
  }

}
