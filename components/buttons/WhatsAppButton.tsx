import React from "react";
import { RiWhatsappLine } from "react-icons/ri";
import styles from "./styles/WhatsappButton.module.scss";

export const WhatsAppButton = () => {
  return (
    <div className={styles.whatsappBtn}>
      <a
        href={`https://wa.me/34672126268`}
        target="_blank"
        rel="noreferrer"
        aria-label="whatsapp"
      >
        <RiWhatsappLine className={styles.whatsappBtn_icon} />
      </a>
    </div>
  );
};
