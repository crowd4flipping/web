import { C4FAppRoutes } from "./C4FAppRoutes";
import { C4FCloudRoutes } from "./C4FCloudRoutes";
import { C4FWebRoutes } from "./C4FWebRoutes";

export class Routes {
  private static cloudRoute = process.env.NEXT_PUBLIC_C4F_CLOUD;
  private static appRoute = process.env.NEXT_PUBLIC_C4F_APP;
  private static webSiteRoute = process.env.NEXT_PUBLIC_BASE_URL;

  static web() {
    return new C4FWebRoutes(this.webSiteRoute);
  }

  static app() {
    return new C4FAppRoutes(this.appRoute);
  }

  static cloud() {
    return new C4FCloudRoutes(this.cloudRoute);
  }

  static facebook() {
    return "https://www.facebook.com/Crowd4Flipping/";
  }

  static instagram() {
    return "https://www.instagram.com/crowd4flipping/";
  }
  static linkedin() {
    return "https://www.linkedin.com/company/crowd4flipping/";
  }
}
