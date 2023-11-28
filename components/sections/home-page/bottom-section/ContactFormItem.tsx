import styles from "./styles/ContactForm.module.scss";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { Routes } from "routes/Routes";
import { Loader } from "@/components/loaders/Loader";
import { Button } from "@crowd4flipping/ui-components";
import { TermsAndConditionsCheckbox } from "./TermsAndConditionsCheckbox";

export const ContactFormItem = () => {
  const router = useRouter();
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
      setSendData(true);
      const api = Routes.cloud().contact();
      let res = await axios.post(api, data);

      if (res.data.status === 200) {
        setSendData(false);
        router.push("/thanks-investment");
      }
    } catch (error) {
      setSendData(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaa || !state.termsAndConditions) {
      alert("Debe validar su información");
      return setSendData(false);
    }
    if (sendData) return;
    sendContact(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm_form}>
      <div>
        <label htmlFor="email" className={styles.contactForm_formLabel}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={handleChange}
          className={styles.contactForm_formInput}
        ></input>
      </div>

      <div className={styles.contactForm_formTextArea_expanded}>
        <label htmlFor="question" className={styles.contactForm_formLabel}>
          Cuentanos tus dudas
        </label>
        <textarea
          id="question"
          name="comments"
          value={state.comments}
          onChange={handleChange}
          className={styles.contactForm_formTextArea}
        ></textarea>
      </div>

      <div className={styles.contactForm__termsAndConditions}>
        <TermsAndConditionsCheckbox
          missingCheck={false}
          isChecked={state.termsAndConditions}
          onChange={handleChange}
        />
      </div>
     {/*  <ReCAPTCHA
        ref={captcha}
        sitekey="6LeW0vYiAAAAABvzPB2SSZrvaz3d7ptD70HNJak4"
        onChange={onChangeCaptcha}
      /> */}
      <div className={styles.contactForm_formButton}>
        <Button variant="primary" fullWidth type="submit">
          {sendData ? <Loader /> : "Enviar"}
        </Button>
      </div>
    </form>
  );
};
