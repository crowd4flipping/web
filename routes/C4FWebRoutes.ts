export class C4FWebRoutes {
    constructor(private c4fAppSite: string) {}
  
    host(): string {
      return this.c4fAppSite;
    }
  }
  