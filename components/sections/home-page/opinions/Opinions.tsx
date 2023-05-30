import Opiniones from "@/components/carrousels/OpinionesHabitisimo";
import styles from "./styles/Opinions.module.scss";
import Image from "next/image";
import HabitissimoSrc from "@/public/images/brand/habitissimo_logo.png";
import Logo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.png";
import RefconLogo from "../../../logos/RefconLogo";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export const Opinions = () => {
  return (
    <div className={styles.opinions}>
      <div className={styles.opinions_logoWrapper}>
        <div className={styles.opinions_logo}>
          <Image
            src={Logo}
            width={900}
            height={372}
            alt="Crowd for Flipping logo"
          />

          <RefconLogo />
        </div>
      </div>

      <h2 className={styles.opinions_title}>Más de 20 años de experiencia</h2>
      <p className={styles.opinions_text}>
        Crowd4Flipping es un spin-off de <a className={styles.opinions_link} href="https://www.refcon.es/" target="_blank" rel="noreferrer">Refcon</a>, una constructora con una amplia
        experiencia en el sector inmobiliario, con más de 500 proyectos ejecutados.
      </p>
      <h2 className={styles.opinions_title}>4.8/5</h2>
      <div className={styles.opinions_starsWrapper}>
        <FaStar className={styles.opinions_star} />
        <FaStar className={styles.opinions_star} />
        <FaStar className={styles.opinions_star} />
        <FaStar className={styles.opinions_star} />
        <FaStar className={styles.opinions_star} />
      </div>

      <Opiniones />
    </div>
  );
};
