import { ProjectsPage } from "@/components/sections/projects-page/ProjectsPage";
import {
  Project,
  ProjectData,
} from "@/components/sections/projects-page/sections/types/types";
import { ProjectStatus, projectStatusList } from "@/routes/C4FCloudRoutes";
import { Routes } from "@/routes/Routes";
import { GetStaticProps } from "next";
import { mapWithoutUndefined } from "utils/utils";

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return <ProjectsPage projectsList={projects} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const api = Routes.cloud().projects();

  const projectsFound = await fetch(api);
  const projectsJSON = (await projectsFound.json())["data"] as Array<Project>;

  const { value } = mapWithoutUndefined(projectsJSON).do((project) => {
    try {
      return parseProjectData(project);
    } catch (err) {
      console.error(err);
      return;
    }
  });

  return {
    props: {
      projects: value,
    },
    revalidate: 60,
  };
};

function parseProjectData(data: Project): ProjectData {
  const profit = data.fund.finalProfit
    ? data.fund.finalProfit
    : data.fund.estimatedRentability;

  const projectData: Omit<ProjectData, "status"> = {
    id: data.id,
    businessModel: data.details.type,
    city: data.address.city,
    state: data.address.state,
    currentAmount: data.fund.quantityFunded,
    totalAmount: data.fund.quantityToFund,
    profitability: profit,
    images: data.projectMedia.map((img) => img.link),
  };

  const phase = data.phase.toLocaleLowerCase() as Project["phase"];

  if (!isValidStatus(phase)) {
    const status = convertFromOldStatusToNewStatus(phase);
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

function convertFromOldStatusToNewStatus(
  status: Project["phase"]
): ProjectStatus {
  if (status === "crowd") return "funding";
  throw new Error(`Project status "${status}" is not valid`);
}
