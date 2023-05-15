import { ReactElement } from "react";
import style from "./styles/MainPainPoints.module.scss";

type PainPointProps = {
  icon: ReactElement;
  title: string;
  text: string;
};

export const PainPoint = ({ icon, text, title }: PainPointProps) => {
  return (
    <div className={style.mainPainPoints_painPoint}>
      <div className={style.mainPainPoints_painPointTitle_withIcon}>
      <span className={style.mainPainPoints_painPointIcon}>{icon}</span>
        <h3 className={style.mainPainPoints_painPointTitle}>{title}</h3>
      </div>
      <p className={style.mainPainPoints_painPointParagraph}>{text}</p>
    </div>
  );
};
