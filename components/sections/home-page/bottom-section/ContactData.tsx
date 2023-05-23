import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import styles from "./styles/ContactForm.module.scss";
import { ReactElement } from "react";
import Link from "next/link";
import { Routes } from "routes/Routes";

type ContactFormDataProps = { children?: ReactElement | ReactElement[] };

export const ContactData = ({ children }: ContactFormDataProps) => {
  return (
    <div>
      <div className={styles.contactForm_customerService_top}>
        <h2 className={styles.contactForm_title}>¿Alguna duda?</h2>
        <p>
          Estamos aquí para responder tus preguntas de forma clara y directa. No
          te quedes con ellas, estamos a tu disposición.
        </p>
      </div>

      {children}

      <div className={styles.contactForm_customerService_bottom}>
        <p className={styles.contactForm_titleSchedule}>Servicio al cliente</p>
        <p>De lunes a viernes, de 09:00h a 18:00h</p>
        <br />
        <p>+34 971 105 648</p>
        <p>+34 672 126 268</p>
        <br />
        <p>contacto@crowd4flipping.com</p>
        <div className={styles.contactForm_iconsWrapper}>
          <span style={{ cursor: "pointer" }}>
            <a
              href={Routes.facebook()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className={styles.contactForm_icon} />
            </a>
          </span>
          <span style={{ cursor: "pointer" }}>
            <a
              href={Routes.instagram()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className={styles.contactForm_icon} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
