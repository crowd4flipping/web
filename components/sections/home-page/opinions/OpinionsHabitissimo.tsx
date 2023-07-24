import { Opinions } from "@/components/carrousels/Opinions";
import styles from "./styles/Opinions.module.scss";
import Image from "next/image";
import HabitissimoSrc from "@/public/images/brand/habitissimo_logo.png";
import Logo from "@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.png";
import { ByRefcon } from "@/components/logos/ByRefcon";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { OpinionsCarrousel } from "@/components/carrousels/OpinionsCarrousel";
import { Opinion } from "@/components/carrousels/types/Opinion";
import { getReadableDate } from "utils/utils";

const data: Opinion[] = [
  {
    date: getReadableDate({ dd: "1", mm: "4", yyyy: "2023" }),
    name: "Jose",
    text: `Esta no era mi primera reforma, así que hice lo mejor podía hacer, 
    escuchar a un amigo que había quedado muy contento con ellos, 
    y acerté, rápidos en el presupuesto, que respetaron totalmente,
     trabajadores limpios y profesionales, 
     solo puedo recalcar que estoy muy contento y que los puedo recomendar. 
    Gracias sinceras.`,
  },
  {
    date: getReadableDate({ dd: "1", mm: "4", yyyy: "2023" }),
    name: "José Vicente Rubio",
    text: `No vivimos en Mallorca y Alex se ha ocupado de q todo fuera en orden. Aunque hemos ido a la obra varias veces, hemos confiado en él por lo correcto de su trabajo y el de sus empleados. El trato de todos muy bueno y se ocupan de tener todo limpio y ordenado. Se cumplen los plazos ,lo que facilita la reforma sobre todo no viviendo en Mallorca.`,
  },
  {
    date: getReadableDate({ dd: "1", mm: "4", yyyy: "2023" }),
    name: "Elena Vela",
    text: `El servicio muy bueno. Los trabajadores cumplidores, saben su oficio. Mantienen la obra limpia y ordenada y el trato impecable. Los tiempos se cumplen, según la organización establecida al comienzo de la obra`,
  },
  {
    date: getReadableDate({ dd: "1", mm: "3", yyyy: "2023" }),
    name: "Avi",
    text: `I decided to renovate the apartment I bought with Refcon I'm glad I chose them, they did an excellent job, very attentive and most importantly humane. Definitely recommend them`,
  },
  {
    date: getReadableDate({ dd: "1", mm: "3", yyyy: "2023" }),
    name: "Stephanie",
    text: `Contratamos los servicios de Refcon para reformar completamente nuestro primer piso propio. La paciencia de todo el equipo ha sido infinita, han cumplido con los tiempos y tienen un equipo humano del 10 que ha hecho que esta experiencia haya sido muy satisfactoria.`,
  },
  {
    date: getReadableDate({ dd: "13", mm: "9", yyyy: "2022" }),
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
    date: getReadableDate({ dd: "13", mm: "9", yyyy: "2022" }),
    name: `Tanit Iglesias`,
    text: `Profesionalidad, formalidad, pulcritud, solo tengo palabras de reconocimiento hacia Alex, dudo que hayan mejores profesionales en la isla. Un trabajo impecable y un trato excelente.`,
  },
  {
    date: getReadableDate({ dd: "13", mm: "5", yyyy: "2022" }),
    name: `Marta`,
    text: `Hola, soy una fisioterapeuta de Son Espases, hace un año compré un piso para reformar integramente en Palma. Contacté varias empresas, incluso algún particular que no me dio ninguna confianza. Por suerte encontré esta pagina web y decidí realizar un presupuesto con Refcon; desde el principio todo fue maravilloso y tengo que decir que ha sido así hasta el final, 100% recomendable para cualquier trabajo.`,
  },
  {
    date: getReadableDate({ dd: "13", mm: "5", yyyy: "2022" }),
    name: `Carol`,
    text: ` Contacto rapido, amable. Nos asesoro bien dando soluciones en reforma. Buen trabajo, serios, amables y buenos acabados en los detalles. Cumplieron con las fechas, calidad-precio muy bien. Buenos profesionales. Cuando tengamos otra reforma volveremos a contar con ellos.`,
  },
];

export const OpinionsHabitissimo = () => {
  return (
    <div className={styles.opinions}>
      <div className={styles.opinions_logoWrapper}>
        <div className={styles.opinions_logo}>
          <Image
            src={Logo}
            width={900}
            height={372}
            alt="Crowd for Flipping logo"
          />

          <ByRefcon />
        </div>
      </div>

      <div>
        <h2 className={styles.opinions_title}>Más de 20 años de experiencia</h2>
        <p className={styles.opinions_text}>
          Crowd4Flipping es un spin-off de{" "}
          <a
            className={styles.opinions_link}
            href="https://www.refcon.es/"
            target="_blank"
            rel="noreferrer"
            aria-label="habitissimo"
          >
            Refcon
          </a>
          , una constructora con una amplia experiencia en el sector
          inmobiliario, con más de 500 proyectos ejecutados.
        </p>
      </div>

      <div>
        <h2 className={styles.opinions_title}>4.8/5</h2>
        <div className={styles.opinions_starsWrapper}>
          <FaStar className={styles.opinions_star} />
          <FaStar className={styles.opinions_star} />
          <FaStar className={styles.opinions_star} />
          <FaStar className={styles.opinions_star} />
          <FaStar className={styles.opinions_star} />
        </div>

        <OpinionsCarrousel data={data} />
      </div>
    </div>
  );
};
