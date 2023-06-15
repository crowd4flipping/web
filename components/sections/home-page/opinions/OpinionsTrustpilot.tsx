import styles from "./styles/Opinions.module.scss";
import { StarTrustPilotIcon } from "@/components/icons/StarTrustPilotIcon";
import { Opinion } from "@/components/carrousels/types/Opinion";
import { OpinionsCarrousel } from "@/components/carrousels/OpinionsCarrousel";
import { getReadableDate } from "utils/utils";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { GrayStarTrustPilotIcon } from "@/components/icons/GrayStarTrustPilotIcon";
import { GreenStarTrustPilotIcon } from "@/components/icons/GreenStarTrustPilotIcon";
import { useEffect, useMemo, useState } from "react";

const data: Opinion[] = [
  {
    date: getReadableDate({ yyyy: "2023", mm: "6", dd: "13" }),
    name: "Jordi",
    text: `De las mejores opciones para poder invertir en propiedades sin necesidad de tener todo el dinero. 
    En mi caso, invertí en un proyecto de alquiler y hasta la fecha, cada mes he cobrado la rentabilidad estimada. 
    Sin lugar a duda, en el próximo proyecto participaré si o si!`,
  },
  {
    date: getReadableDate({ yyyy: "2023", mm: "6", dd: "13" }),
    name: "Javier Galmés",
    text: `Muy buena opción para poder invertir en inmuebles con poco capital. 
    Sobre todo parte de los proyectos han sido ejecutados en las Islas Baleares. 
    Han funcionado muy bien.`,
  },
  {
    date: getReadableDate({ yyyy: "2023", mm: "6", dd: "13" }),
    name: "Victoria",
    text: `Equipo profesional, atento y muy preparado. 
    Esa es la impresión que me han dado al contactar con ellos. 
    Se me escapó un proyecto de rentas que ofrecieron ya que en ¡¡3 horas se completó la financiación!! 
    Estaré atenta para el próximo por que no me lo pienso PermIdentityRounded.`,
  },
  {
    date: getReadableDate({ yyyy: "2023", mm: "6", dd: "13" }),
    name: "Pedro Reynés",
    text: `Empresa muy profesional y seria. 
    Siempre miran por el beneficio del propietario e inversores. 
    Total confianza.`,
  },
  {
    date: getReadableDate({ yyyy: "2023", mm: "6", dd: "12" }),
    name: "Ángel Giménez López",
    text: `Es un buen método para sacarle partido a tus ahorros, tanto yo como mi hermano invertimos y cada mes tenemos nuestras ganancias, 
    nunca ha fallado un pago, así que si sigue así de bien seguiremos invirtiendo nuestro dinero y sacándole ganancias!!`,
  },
];

export const OpinionsTrustpilot = () => {
  const [reviews, setReviews] = useState<Opinion[]>([]);

  useEffect(() => {
    setReviews(data);
  }, []);

  return (
    <div className={styles.opinions_trustPilot}>
      <h2 className={styles.opinions_title}>Lo que opinan de nosotros</h2>

      <div>
        <div className={styles.opinions_trustPilot_branding}>
          <div className={styles.opinions_trustPilot_icon}>
            <GreenStarTrustPilotIcon />
          </div>
          <h2 className={styles.opinions_trustPilot_title}>TrustPilot</h2>
        </div>
        <h3 className={styles.opinions_title}>4.1/5</h3>
        <div className={styles.opinions_starsWrapper}>
          <div className={styles.opinions_star_trustpilot}>
            <StarTrustPilotIcon />
          </div>
          <div className={styles.opinions_star_trustpilot}>
            <StarTrustPilotIcon />
          </div>
          <div className={styles.opinions_star_trustpilot}>
            <StarTrustPilotIcon />
          </div>
          <div className={styles.opinions_star_trustpilot}>
            <StarTrustPilotIcon />
          </div>
          <div className={styles.opinions_star_trustpilot}>
            <GrayStarTrustPilotIcon />
          </div>
        </div>

        <OpinionsCarrousel data={reviews} />
      </div>
    </div>
  );
};
