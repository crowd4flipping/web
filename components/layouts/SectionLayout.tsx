import { ReactElement } from "react";
import styles from "./styles/SectionLayout.module.scss";

export const SectionLayout = ({
  children,
  bgStyles,
  isHeroSection = false,
}: {
  children: ReactElement | ReactElement[];
  bgStyles?: string;
  isHeroSection?: boolean;
}) => {
  const sectionStyles = isHeroSection
    ? `${styles.heroSectionLayout} ${bgStyles}`
    : bgStyles;

  const sectionContentStyles = isHeroSection
    ? styles.heroSectionLayout_content
    : styles.sectionLayout;

  return (
    <section className={sectionStyles}>
      <div className={sectionContentStyles}>{children}</div>
    </section>
  );
};
