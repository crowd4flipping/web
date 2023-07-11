import { ReactElement } from "react";
import styles from "./styles/InfoHeroSection.module.scss";
import { SectionLayout } from "@/components/layouts/SectionLayout";
import "@crowd4flipping/ui-components";

type Props = {
  title: ReactElement | string;
  subtitle?: ReactElement | string;
  children?: ReactElement;
};

export const InfoHeroSection = (props: Props) => {
  return (
    <div className={styles.infoHeroSection}>
      <div className={styles.infoHeroSection_content}>
        <SectionLayout>
          <h1 className={styles.infoHeroSection_title}>{props.title}</h1>
          {props.subtitle && (
            <p className={styles.infoHeroSection_subtitle}>{props.subtitle}</p>
          )}
        </SectionLayout>

        {props.children && <div className={styles.infoHeroSection_childrenWrapper}>
          <div className={styles.infoHeroSection_children}>
            {props.children}
          </div>
        </div>}
      </div>
    </div>
  );
};
