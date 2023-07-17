import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHeroSection } from "../hero-section/PageHeroSection";
import { InfoHeroSection } from "../hero-section/InfoHeroSection";
import styles from "./sections/styles/ProjectsPage.module.scss";
import { Options, Selector } from "@crowd4flipping/ui-components";
import { ProjectStatus, projectStatusList } from "@/routes/C4FCloudRoutes";
import { isValidStatus, unhandledType } from "utils/utils";
import { ProjectsPageContent } from "./sections/ProjectsPageContent";
import { useEffect, useState } from "react";
import { ProjectData } from "./sections/types/types";
import { useRouter } from "next/router";

const statusLabels: Record<ProjectStatus, string> = {
  in_progress: "En ejecución",
  finished: "Finalizados",
  funding: "En financiación",
  in_study: "En estudio",
};

export const ProjectsPage = (props: { projectsList: ProjectData[] }) => {
  const router = useRouter();
  const areProjectsFunding = props.projectsList.find(project => project.status === "funding")
  const firstStatusLabel: ProjectStatus = areProjectsFunding ? "funding" : "in_study";
  const [statusLabel, setStatusLabel] = useState(statusLabels[firstStatusLabel]);

  useEffect(() => {
    const queryStatus = router.query.status as string;
    if (!queryStatus || !isValidStatus(queryStatus)) return;
    setStatusLabel(statusLabels[queryStatus]);
  }, [router]);

  return (
    <PageLayout fixedNavBar>
      <PageHeroSection>
        <InfoHeroSection
          title={
            <>
              Todos nuestros{" "}
              <span className={styles.projectsPage_title_highlight}>
                proyectos inmobiliaros
              </span>
            </>
          }
        />
        <div className={styles.projectsPage_status_selector_content}>
          <div className={styles.projectsPage__status_options}>
            <Options
              arialLabel="estado del proyecto"
              onValueChange={onValueChange}
              value={statusLabel}
              values={getLabelsFromStatuses()}
              defaultValue={statusLabel}
              isHorizontal
            />
          </div>
          <div className={styles.projectsPage__selector_status}>
            <Selector
              options={[
                {
                  values: getLabelsFromStatuses().map((value) => ({
                    value,
                  })),
                },
              ]}
              value={statusLabel}
              onValueChange={onValueChange}
              ariaLabel="estado del proyecto"
            />
          </div>
        </div>
        <ProjectsPageContent
          filterByStatus={getStatusFromLabel(statusLabel)}
          projectsList={props.projectsList}
          label={statusLabel}
        />
      </PageHeroSection>
    </PageLayout>
  );

  function onValueChange(label: string) {
    setStatusLabel(label);
    router.push({ query: { status: getStatusFromLabel(label) } });
  }

  function getLabelsFromStatuses() {
    return projectStatusList.map((status) => {
      switch (status) {
        case "in_progress":
          return statusLabels.in_progress;
        case "finished":
          return statusLabels.finished;
        case "funding":
          return statusLabels.funding;
        case "in_study":
          return statusLabels.in_study;
        default:
          throw unhandledType(status);
      }
    });
  }

  function getStatusFromLabel(label: string): ProjectStatus {
    const statusFound = Object.keys(statusLabels).find(
      (status) => statusLabels[status] === label
    );
    if (!statusFound) return "funding";
    if (isValidStatus(statusFound)) return statusFound;
  }
};
