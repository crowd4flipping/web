import CookieConsent from "react-cookie-consent";

export const CookieBanner = () => {
  return (
    <CookieConsent
      enableDeclineButton
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
      <p>
        Respetamos tu privacidad y estamos comprometidos en preservar tu derecho
        al procesamiento legal y a la protección de tus datos personales.
      </p>
      <br/>
      <p> Utilizamos cookies para mejorar la experiencia de usuario</p>
    </CookieConsent>
  );
};
