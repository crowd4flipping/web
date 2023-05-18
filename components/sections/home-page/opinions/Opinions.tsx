import Opiniones from "@/components/carrousels/OpinionesHabitisimo";
import styles from "./styles/Opinions.module.scss";
import Image from "next/image";
import HabitissimoSrc from "@/public/images/brand/habitissimo_logo.png";
import Logo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.png";
import RefconLogo from "../../../logos/RefconLogo";
import { FaStar } from "react-icons/fa";

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

      <h2 className={styles.opinions_title}>Lo que opinan de nosotros</h2>

      <div className={styles.opinions_habitissimo}>
        <Image
          src={HabitissimoSrc}
          width={133}
          height={20}
          alt="Logo Habitissimo"
        />
      </div>
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
