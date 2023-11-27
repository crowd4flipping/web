import React from "react";
import { RiWhatsappLine } from "react-icons/ri";
import styles from "./styles/WhatsappButton.module.scss";
import Link from "next/link";

export const WhatsAppButton = () => {
  return (
    <Link 
      href={`https://wa.me/34672126268`}
      passHref
    >
      <a
        className={styles.whatsappBtn}
        aria-label="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <RiWhatsappLine className={styles.whatsappBtn_icon} />
      </a>
    </Link>
  );
};
