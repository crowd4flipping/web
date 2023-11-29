import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import styles from "./CookieBanner.module.scss";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const CookieBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
      onAccept={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'cookie_accepted' });
      }}
      onDecline={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'cookie_refused' });
      }}
      style={{
        padding: "2rem",
        background: "#010f24",
        display: "block",
        textAlign: "center",
        boxShadow: "0px -16px 20px rgb(0 0 0 / 0.3)",
      }}
      buttonStyle={{
        backgroundColor: "#02b3e8",
        color: "white",
        fontSize: "1rem",
        padding: ".5rem 1rem",
        borderRadius: ".3rem",
      }}
      declineButtonStyle={{
        border: "1px solid #02b3e8",
        backgroundColor: "transparent",
        color: "white",
        fontSize: "1rem",
        padding: ".5rem 1rem",
        borderRadius: ".3rem",
      }}
      buttonText="Aceptar"
      declineButtonText="Rechazar"
    >
      <p className={styles.cookieBanner_text}>
        Respetamos tu privacidad y estamos comprometidos en preservar tu derecho
        al procesamiento legal y a la protección de tus datos personales.
      </p>
      <br />
      <p className={styles.cookieBanner_text}>
        Utilizamos{" "}
        <span className={styles.cookieBanner_link}>
          <Link href="/politica-cookies">cookies</Link>{" "}
        </span>
        para mejorar la experiencia de usuario
      </p>
    </CookieConsent>
  );
};
