import Image from "next/image";
import styles from "./styles/TheMostForMoney.module.scss";
import { InfoCard } from "@/components/cards/info-card/InfoCard";
import ThreeDHouse from "@/public/images/home-page/invertir-en-bienes-inmuebles.png";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";

export const GetTheMostForYourMoneySection = () => {
  const { isSmallerSize, isMedium } = useBreakPoints();

  return (
    <div className={styles.theMostForMoneySection}>
      <div className={styles.theMostForMoneySection_content}>
        <InfoCard
          width={`${isSmallerSize ? "100%" : "63%"}`}
          title="Sácale partido a tu dinero"
        >
          <p>
            Nuestra plataforma de préstamos colaborativos permite a nuestros
            usuarios invertir en proyectos inmobiliarios de alta calidad sin
            tener que comprometer grandes sumas de dinero.
          </p>
          <br />
          <p>
            El equipo de expertos de Crowd4Flipping se encarga de los trámites
            debidos y el análisis de riesgos para asegurarse de presentar solo
            los mejores proyectos a los inversores.
          </p>
        </InfoCard>

        <div className={styles.theMostForMoneySection_imageWrapper}>
          {isSmallerSize || isMedium ? (
            <Image
              alt="proyecto-inmobiliario-para-invertir"
              width={510}
              height={300}
              src={ThreeDHouse}
            />
          ) : (
            <Image
              alt="proyecto-inmobiliario-para-invertir"
              width={598}
              height={350}
              src={ThreeDHouse}
            />
          )}
        </div>
      </div>
    </div>
  );
};
