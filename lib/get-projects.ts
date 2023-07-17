import {
  ProjectLegacy,
  ProjectData,
} from "@/components/sections/projects-page/sections/types/types";
import { ProjectStatus, projectStatusList } from "@/routes/C4FCloudRoutes";
import { Routes } from "@/routes/Routes";
import { mapWithoutUndefined } from "utils/utils";

export const getProjects = async (): Promise<ProjectData[]> => {
  const api = Routes.cloud().projects();

  const projectsFound = await fetch(api);
  const projectsJSON = (await projectsFound.json())[
    "data"
  ] as Array<ProjectLegacy>;

  const { value } = mapWithoutUndefined(projectsJSON).do((project) => {
    try {
      return parseProjectData(project);
    } catch (err) {
      console.error(err);
      return;
    }
  });

  return value;
};

function parseProjectData(project: ProjectLegacy): ProjectData {
  const profit = getProfit(project);

  const projectData: Omit<ProjectData, "status"> = {
    id: project.id,
    businessModel: project.details.type,
    city: project.address.city,
    state: project.address.state,
    currentAmount: project.fund.quantityFunded,
    totalAmount: project.fund.quantityToFund,
    profitability: profit,
    images: project.projectMedia.map((img) => img.link),
  };

  const phase = project.phase.toLocaleLowerCase() as ProjectLegacy["phase"];

  if (!isValidStatus(phase)) {
    const status = convertFromLegacyStatusToNewStatus(phase);
    return {
      ...projectData,
      status,
    };
  }

  return {
    ...projectData,
    status: phase,
  };
}

function isValidStatus(value: string): value is ProjectStatus {
  const statusFound = projectStatusList.find((status) => status === value);
  if (!statusFound) return false;
  return true;
}

function convertFromLegacyStatusToNewStatus(
  status: ProjectLegacy["phase"]
): ProjectStatus {
  if (status === "crowd") return "funding";
  throw new Error(`Project status "${status}" is not valid`);
}

function getProfit(data: ProjectLegacy) {
  return data.fund.finalProfit
    ? data.fund.finalProfit
    : data.fund.estimatedRentability;
}
