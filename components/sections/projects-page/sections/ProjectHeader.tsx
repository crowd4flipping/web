import { SectionLayout } from "@/components/layouts/SectionLayout";
import { MdLocationPin } from "react-icons/md";
import styles from "./styles/TopHeader.module.scss";

type ProjectHeaderProps = {
  name: string;
  city: string;
};

export const ProjectHeader = ({ city, name }: ProjectHeaderProps) => {
  return (
    <SectionLayout>
      <div className={styles.topHeader}>
        <div>
          <h1 className={styles.topHeader_title}> {name} </h1>
          <div className={styles.topHeader_location}>
            <MdLocationPin />
            {city}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
