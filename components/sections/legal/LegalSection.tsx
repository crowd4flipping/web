import { SectionLayout } from "@/components/layouts/SectionLayout";
import styles from "./styles/LegalSection.module.scss";
import { ReactElement } from "react";

type LegalSectionProps = {
  children: ReactElement | ReactElement[];
};

export const LegalSection = ({ children }: LegalSectionProps) => {
  return (
    <SectionLayout>
      <div className={styles.legalSection}>{children}</div>
    </SectionLayout>
  );
};
