import React from "react";
import { RiWhatsappLine } from "react-icons/ri";
import styles from "./styles/WhatsappButton.module.scss";

export const WhatsAppButton = () => {
  return (
    <div className={styles.whatsappBtn}>
      <a
        href={`https://wa.me/34672126268?text=Hola, hola, soy ______, tengo una propiedad y quisiera tener más información acerca de Crowd4Flipping?`}
        target="_blank"
        rel="noreferrer"
      >
        <RiWhatsappLine className={styles.whatsappBtn_icon} />
      </a>
    </div>
  );
};
