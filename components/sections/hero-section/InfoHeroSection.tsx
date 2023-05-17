import { ReactElement } from "react";
import styles from "./styles/InfoHeroSection.module.scss";
import { PainPoint } from "../home-page/bottom-section/PainPoint";
import { PainPointIconOne } from "@/components/icons/PainPointIconOne";
import { PainPointIconTwo } from "@/components/icons/PainPointIconTwo";
import { PainPointIconThree } from "@/components/icons/PainPointIconThree";
import { SectionLayout } from "@/components/layouts/SectionLayout";

type InfoHeroSectionProps = {
  header: ReactElement;
  elementOne: ReactElement;
  elementTwo?: ReactElement;
  elementThree?: ReactElement;
};

export const InfoHeroSection = (props: InfoHeroSectionProps) => {
  const contentLength = () => {
    if (props.elementTwo && props.elementThree) return 3;
    if (props.elementTwo || props.elementThree) return 2;
    return 1;
  };

  const painPointsContent =
    styles.infoHeroSection_painPointContent +
    ` ${
      contentLength() === 2
        ? styles.infoHeroSection_painPointContent_two
        : contentLength() === 3
        ? styles.infoHeroSection_painPointContent_three
        : ""
    }`;

  return (
    <div className={styles.infoHeroSection}>
      <div>
        <SectionLayout>
          <div>{props.header}</div>
        </SectionLayout>

        <div className={styles.infoHeroSection_painPointsWrapper}>
          <div className={painPointsContent}>
            {props.elementOne}
            {props.elementTwo && props.elementTwo}
            {props.elementThree && props.elementThree}
          </div>
        </div>
      </div>
    </div>
  );
};
