import { InfoCard } from "@/components/cards/info-card/InfoCard";
import style from "./styles/InvestFromFiftyEur.module.scss";
import { Button } from "@/components/buttons/primary/Button";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";

export const InvestFromFiftyEur = () => {
  const { isXSmall } = useBreakPoints();

  return (
    <div id="info-video" className={style.investFromFiftyEur}>
      <div className={style.investFromFiftyEur_videoWrapper}>
        <video
          className={style.investFromFiftyEur_video}
          src="https://firebasestorage.googleapis.com/v0/b/c4f-backend-c3e81.appspot.com/o/videos-corporativos%2FCF4%20ANIMACION_BAJO.mp4?alt=media&token=7d70d3e5-d84e-48eb-8172-ea4abf987b1f"
          playsInline
          controls
          poster="images/video_poster.png"
        />
      </div>
      <InfoCard title="Desde 500€" bgColor="white" width="100%">
        <p>
          Nuestra plataforma de préstamos colaborativos permite a nuestros
          usuarios invertir en proyectos inmobiliarios de alta calidad sin tener
          que comprometer grandes sumas de dinero.
        </p>
        <br />
        <Button size="md" button="primary" fullWidth={isXSmall && true}>
          Empezar a invertir
        </Button>
      </InfoCard>
    </div>
  );
};
