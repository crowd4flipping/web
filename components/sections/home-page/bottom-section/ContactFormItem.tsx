import { Button } from "@/components/buttons/primary/Button";
import styles from "./styles/ContactForm.module.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

export const ContactFormItem = () => {
  const router = useRouter();

  const api =
    "https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api";
  const [sendData, setSendData] = useState(false);
  const [captchaa, setCaptchaa] = useState(false);
  const captcha = useRef(null);
  const fromWeb = "fw";
  const [state, setState] = useState({
    email: "",
    comments: "",
    termsAndConditions: false,
    type: "Inversor",
    tag: "79",
    created: new Date(),
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const onChangeCaptcha = () => {
    if (captcha.current.getValue()) {
      setCaptchaa(true);
    }
  };

  const sendContact = async (data) => {
    try {
      let res = await axios.post(`${api}/contact`, data);
      if (res.data.status === 200) {
        setSendData(false);
        router.push("/thanks-investment");
      }
    } catch (error) {
      setSendData(false);
    }
  };

  const handleSubmit = () => {
    if (!captchaa || !state.termsAndConditions) {
      alert("Debe validar su información");
      return setSendData(false);
    }
    sendContact(state);
  };

  return (
    <form className={styles.contactForm_form}>
      <div>
        <label className={styles.contactForm_formLabel}>Email</label>
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={handleChange}
          className={styles.contactForm_formInput}
        ></input>
      </div>

      <div className={styles.contactForm_formTextArea_expanded}>
        <label className={styles.contactForm_formLabel}>
          Cuentanos tus dudas
        </label>
        <textarea
          name="comments"
          value={state.comments}
          onChange={handleChange}
          className={styles.contactForm_formTextArea}
        ></textarea>
      </div>

      <div className={styles.contactForm_checkBoxWrapper}>
        <input
          type="checkbox"
          name="termsAndConditions"
          checked={state.termsAndConditions}
          onChange={(e) => handleChange(e)}
        />
        <label className={styles.contactForm_checkBoxLabel}>
          Autorizo el tratamiento de mis datos para recibir una respuesta a mi
          consulta según la{" "}
          <Link href="/docs/aviso-legal">Política de Privacidad</Link>
        </label>
      </div>
      <ReCAPTCHA
        ref={captcha}
        sitekey="6LeW0vYiAAAAABvzPB2SSZrvaz3d7ptD70HNJak4"
        onChange={onChangeCaptcha}
      />
      <div className={styles.contactForm_formButton}>
        <Button
          onClick={handleSubmit}
          size="md"
          button="primary"
          fullWidth
          type="submit"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};
