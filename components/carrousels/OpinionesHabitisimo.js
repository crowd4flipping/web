import React from "react";
import styles from "../../styles/carrousels.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import sliderStyles from "../sections/projects-page/sections/styles/MediaSlider.module.scss";

const data = [
  {
    date: "hace 1 mes",
    name: "Jose",
    text: `Esta no era mi primera reforma, así que hice lo mejor podía hacer, 
    escuchar a un amigo que había quedado muy contento con ellos, 
    y acerté, rápidos en el presupuesto, que respetaron totalmente,
     trabajadores limpios y profesionales, 
     solo puedo recalcar que estoy muy contento y que los puedo recomendar. 
    Gracias sinceras.`,
  },
  {
    date: "hace 1 mes",
    name: "José Vicente Rubio",
    text: `No vivimos en Mallorca y Alex se ha ocupado de q todo fuera en orden. Aunque hemos ido a la obra varias veces, hemos confiado en él por lo correcto de su trabajo y el de sus empleados. El trato de todos muy bueno y se ocupan de tener todo limpio y ordenado. Se cumplen los plazos ,lo que facilita la reforma sobre todo no viviendo en Mallorca.`,
  },
  {
    date: "hace 1 mes",
    name: "Elena Vela",
    text: `El servicio muy bueno. Los trabajadores cumplidores, saben su oficio. Mantienen la obra limpia y ordenada y el trato impecable. Los tiempos se cumplen, según la organización establecida al comienzo de la obra`,
  },
  {
    date: "hace 1 mes",
    name: "Avi",
    text: `I decided to renovate the apartment I bought with Refcon I'm glad I chose them, they did an excellent job, very attentive and most importantly humane. Definitely recommend them`,
  },
  {
    date: "hace 1 mes",
    name: "Stephanie",
    text: `Contratamos los servicios de Refcon para reformar completamente nuestro primer piso propio. La paciencia de todo el equipo ha sido infinita, han cumplido con los tiempos y tienen un equipo humano del 10 que ha hecho que esta experiencia haya sido muy satisfactoria.`,
  },
  {
    date: `hace 1 mes`,
    name: `Pedro Vilajoana`,
    text: `He marcado excelente porque así ha sido:
      Excelente a la realización del contrato.
      Excelente a la ejecución.
      Excelente ante un cambio de visión en tiempo real de determinados trabajos.
      Excelente velocidad de reacción.
      Excelente experiencia y consejo profesional de Alex.
      Excelente hasta el ultimo momento, sin sorpresas de último minuto.
      Excelente pulcritud en la recogida y limpieza del área de trabajo.
      Excelente en cumplimiento de plazos.
      Por supuesto contaré con ellos para el próximo proyecto.`,
  },
  {
    date: `Hace 1 mes`,
    name: `Tanit Iglesias`,
    text: `Profesionalidad, formalidad, pulcritud, solo tengo palabras de reconocimiento hacia Alex, dudo que hayan mejores profesionales en la isla. Un trabajo impecable y un trato excelente.`,
  },
  {
    date: `hace 3 meses`,
    name: `Marta`,
    text: `Hola, soy una fisioterapeuta de Son Espases, hace un año compré un piso para reformar integramente en Palma. Contacté varias empresas, incluso algún particular que no me dio ninguna confianza. Por suerte encontré esta pagina web y decidí realizar un presupuesto con Refcon; desde el principio todo fue maravilloso y tengo que decir que ha sido así hasta el final, 100% recomendable para cualquier trabajo.`,
  },
  {
    date: `hace 5 meses`,
    name: `Carol`,
    text: ` Contacto rapido, amable. Nos asesoro bien dando soluciones en reforma. Buen trabajo, serios, amables y buenos acabados en los detalles. Cumplieron con las fechas, calidad-precio muy bien. Buenos profesionales. Cuando tengamos otra reforma volveremos a contar con ellos.`,
  },
  {
    date: `hace 7 meses`,
    name: `Cristina`,
    text: ` Lo primero de todo agradecer profundamente la amabilidad y la profesionalidad de Alex, Víctor y todo su equipo. Han realizado una reforma integral de nuestra vivienda y ha quedado maravillosamente bien, estamos felices con nuestro nuevo hogar y son 100% recomendables..hemos tenido mucha suerte de haber contado con ellos.`,
  },
  {
    date: `hace 9 meses`,
    name: ` Xisco González`,
    text: ` Empresa muy profesional, se adaptan a las necesidades del cliente, asesoran y cumplen con lo acordado. Relacion calidad precio excelente. Muy recomendable.`,
  },
  {
    date: `hace 1 año`,
    name: ` Yazmina`,
    text: `Hemos hecho una reforma con Refcon.
  
      El trato humano y la profesionalidad ha sido excelente así como finalmente el trabajo realizado.`,
  },
  {
    date: `hace 1 año`,
    name: `Marti`,
    text: `Conocímos a Álex a través de esta página. Teníamos que hacer una gran reforma, nuestra primera reforma, y teníamos miedo a no poder con todo. Gracias a Refcon, y a Víctor y Álex en particular la reforma ha ido de maravilla. Se han ajustado exactamente a los tiempos que nos dijeron y casi no ha habido desvío en el presupuesto (En una reforma grande es normal que haya alguna sorpresa). Estamos muy contentos con el resultado final. La verdad es que hemos construido la casa que queríamos y todo gracias a su gran equipo.`,
  },
  {
    date: `hace 1 año`,
    name: ` Gabriel`,
    text: `Molt bona feina, serietat i compliment dels plassos pactats`,
  },
  {
    date: `hace 1 año`,
    name: `Maria`,
    text: `Un trabajo inmejorable. Se han preocupado de todo ellos y nosotros nos hemos desentendido. Han hecho muy buen trabajo en la reforma entera de nuestro piso. Siempre antentos y serviciales. Gracias refcon!`,
  },
  {
    date: `hace 1 año`,
    name: `Xuejun`,
    text: `Lo más importante es que cumple con las fechas que te dice, sin perder nada en la calidad del trabajo`,
  },
];

const Example = () => {
  return (
    <Carousel
      className={sliderStyles.mediaSlider_carousel}
      autoPlay
      showArrows
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={`${sliderStyles.mediaSlider_button} ${sliderStyles.mediaSlider_button_right}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className={sliderStyles.mediaSlider_buttonIcon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className={sliderStyles.mediaSlider_button}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className={sliderStyles.mediaSlider_buttonIcon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )
      }
    >
      {data.map((item, i) => {
        return (
          <div key={i}>
            <h2>{item.name}</h2>
            <p
              style={{
                fontSize: "0.8rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              {item.date}
            </p>
            <p style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
              {item.text}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Example;
