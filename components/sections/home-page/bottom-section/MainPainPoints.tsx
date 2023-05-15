import { PainPointIconOne } from "@/components/icons/PainPointIconOne";
import style from "./styles/MainPainPoints.module.scss";
import { PainPointIconFour } from "@/components/icons/PainPointIconFour";
import { PainPointIconThree } from "@/components/icons/PainPointIconThree";
import { PainPointIconTwo } from "@/components/icons/PainPointIconTwo";
import { PainPoint } from "./PainPoint";

export const MainPainPoints = () => {
  return (
    <div className={style.mainPainPoints}>
      <PainPoint
        title="Análisis"
        icon={<PainPointIconOne />}
        text="Estudiamos la oportunidad y analizamos a cada detalle el proyecto para
                garantizar que cumpla los estándares de nuestros inversores"
      />
      <PainPoint
        title="Financiación"
        icon={<PainPointIconTwo />}
        text="A través del Crowdlending, cualquier persona desde 500€ puede
        participar en la financiación"
      />
      <PainPoint
        title="Ejecución"
        icon={<PainPointIconThree />}
        text="Una vez completada la financiación, el proyecto será ejecutado por
        nuestro equipo e iremos proporcionando información puntual sobre su
        evolución"
      />
      <PainPoint
        title="Abono"
        icon={<PainPointIconFour />}
        text="Al finalizar el proyecto, se reembolsará el capital aportado y se
        repartirán las plusvalías generadas."
      />
    </div>
  );
};
