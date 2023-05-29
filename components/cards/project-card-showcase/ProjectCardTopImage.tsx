import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import styles from "../styles/Card.module.scss";
import { Tag, TagColor } from "@/components/tags/Tag";
import { ReactElement } from "react";
import { ProjectTag } from "./ProjectTag";

type ProjectCardTopImageProps = {
  region: string;
  street: string;
  projectStatus: ProjectStatus;
};

export const ProjectCardTopImage = (props: ProjectCardTopImageProps) => {
  const { region, street, projectStatus } = props;

  /* const statusText: Record<ProjectStatus, ReactElement> = {
    in_study: <p>En estudio</p>,
    funding: <p>En financiación</p>,
    active: <p>Activo</p>,
    finished: <p>Finalizado</p>,
  }; */

  /* const statusColor: Record<ProjectStatus, TagColor> = {
    in_study: "blue-darkmod",
    funding: "green-darkmod",
    active: "green-darkmod",
    finished: "yellow-darkmod",
  }; */

  return (
    <div className={styles.projectCardShowcaseTopImage_imageWrapper}>
      <div className={styles.projectCardShowcase_address}>
        <p className={styles.projectCardShowcase_region}>{region}</p>
        <p className={styles.projectCardShowcase_street}>{street}</p>
      </div>
      <div className={styles.projectCardShowcaseTopImage_image} />
      <div className={styles.projectCardShowcaseTopImage_tagWrapper}>
        <ProjectTag status={projectStatus} />
      </div>
    </div>
  );
};
