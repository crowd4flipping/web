import { ProjectStatus } from "@/routes/C4FCloudRoutes";
import styles from "../styles/Card.module.scss";
import { ProjectTag } from "./ProjectTag";
import Image from "next/image";

type ProjectCardTopImageProps = {
  region: string;
  street: string;
  projectStatus: ProjectStatus;
  isDarkMode?: boolean;
  src: string | undefined;
};

export const ProjectCardTopImage = (props: ProjectCardTopImageProps) => {
  const { region, street, projectStatus, isDarkMode = false, src } = props;

  return (
    <div className={styles.projectCardShowcaseTopImage_imageWrapper}>
      <div className={styles.projectCardShowcase_address}>
        <p className={styles.projectCardShowcase_region}>{region}</p>
        <p className={styles.projectCardShowcase_street}>{street}</p>
      </div>
      {src ? (
        <Image src={src} alt="imagen del proyecto" width={272} height={208} objectFit="cover" />
      ) : (
        <div className={styles.projectCardShowcaseTopImage_image} />
      )}
      <div className={styles.projectCardShowcaseTopImage_tagWrapper}>
        <ProjectTag isDarkMode={isDarkMode} status={projectStatus} />
      </div>
    </div>
  );
};
