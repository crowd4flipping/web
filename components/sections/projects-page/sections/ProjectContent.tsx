import { SectionLayout } from "@/components/layouts/SectionLayout";
import { MediaSlider } from "./MediaSlider";
import { Location } from "./Location";
import styles from "./styles/ProjectContent.module.scss";
import { LockedSection } from "./LockedSection";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";

type TimelineStep = "En Estudio" | "Abierto a inversión" | "En ejecucion" | "Finalizado";
type Timeline = { date: Date; description: TimelineStep; finalized: boolean };

type MediaProps = Parameters<typeof MediaSlider>[number];
type DescriptionAndLocationProps = Parameters<typeof Location>[number];

type ProjectContentProps = {
  description: string;
  timeline: Timeline[];
  projectId:string;
} & MediaProps &
  DescriptionAndLocationProps;

export const ProjectContent = ({
  media,
  description,
  timeline,
  projectId
}: ProjectContentProps) => {
  const {isXSmall, isLargerSize, isMedium} = useBreakPoints();

  const isProjectCompleted = timeline.find(step => step.description === "Finalizado").finalized;

  const getCurrentStateIndex = () => {
    let currentStateIndex = 0;

    if (isProjectCompleted) return timeline.length - 1;

    timeline.forEach((step, index) => {
      if (step.finalized) currentStateIndex = index++;
    });

    return currentStateIndex;
  };

  const currentTimeline = timeline[getCurrentStateIndex()];

  const stateStyle = `${
    isProjectCompleted
      ? styles.projectContent_state_completed
      : styles.projectContent_state_inProgress
  }`;

  return (
    <SectionLayout>
      <div className={styles.projectContent}>
        <MediaSlider media={media} />

        <div className={styles.projectContent_details}>
          <h2 className={styles.projectContent_title}>Detalles del proyecto</h2>
          <LockedSection showSignupCard={isXSmall || isMedium ||isLargerSize} projectId={projectId}>
            <p>{description}</p>
            <div>
              <div className={stateStyle}>
                <p>{currentTimeline.description}</p>
              </div>
            </div>
          </LockedSection>
        </div>
      </div>
    </SectionLayout>
  );
};
