import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import InstagramIcon from '@/public/images/icons/instagramIcon.webp';
import styles from "./styles/ContactForm.module.scss";
import { ReactElement } from "react";
import Link from "next/link";
import { Routes } from "routes/Routes";
import Image from "next/image";

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
              <FaFacebookSquare className={`${styles.contactForm_icon} ${styles.contactForm_faceBook}`} />
            </a>
          </span>
          <span style={{ cursor: "pointer" }}>
            <a
              href={Routes.instagram()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                src={InstagramIcon}
                height={42}
                width={42}
                alt="Instagram icon"

                style={{
                  objectFit: 'cover',
                  margin: '0'
                }}
              />
            </a>
          </span>
          <span style={{ cursor: "pointer" }}>
            <a
              href={Routes.linkedin()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={`${styles.contactForm_icon} ${styles.contactForm_linkedin}`} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
