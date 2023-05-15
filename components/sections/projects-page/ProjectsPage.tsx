import { PageLayout } from "@/components/layouts/PageLayout";
import { useState } from "react";
import { ProjectHeader } from "./sections/ProjectHeader";
import { ProjectModal } from "./sections/ProjectModal";
import { ProjectContent } from "./sections/ProjectContent";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import { Location } from "./sections/Location";
import { LockedSection } from "./sections/LockedSection";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";

type Timeline = Pick<
  Parameters<typeof ProjectContent>[number],
  "timeline"
>["timeline"];

type Project = {
  id: string;
  name: string;
  timeline: Timeline;
  media: { link: string }[];
  description: string;
  address: {
    city: string;
    positions: {
      latitude: string;
      longitude: string;
    };
  };
};

export const ProjectsPage = ({ project }: { project: Project }) => {
  const {isXSmall} = useBreakPoints()
  return (
    <PageLayout>
      <ProjectHeader city={project.address.city} name={project.name} />

      <ProjectContent
        projectId={project.id}
        description={project.description}
        media={project.media}
        coordenates={project.address.positions}
        timeline={project.timeline}
      />

      <SectionLayout>
        <LockedSection showSignupCard={!isXSmall} projectId={project.id}>
          <Location coordenates={project.address.positions} />
        </LockedSection>
      </SectionLayout>
    </PageLayout>
  );
};
