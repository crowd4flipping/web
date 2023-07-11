import { SectionLayout } from "@/components/layouts/SectionLayout";
import styles from "../legal/styles/LegalSection.module.scss";
import { ReactElement } from "react";

type Props = {
  children: ReactElement | ReactElement[];
};

export const PageHeroSection = ({ children }: Props) => {
  return (
    <SectionLayout>
      <div className={styles.legalSection}>{children}</div>
    </SectionLayout>
  );
};
