import style from "./styles/FAQs.module.scss";
import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

type FAQ = { id: string; question: string; answer: string };

const questions: FAQ[] = [
  {
    id: "q1",
    question: "¿Qué es el crowdlending inmobiliario?",
    answer: `El crowdlending inmobiliario es el método de financiación colectiva
        por el cual, cualquier usuario puede acceder a la participación de
        un proyecto inmobiliario. Esto quiere decir que el usuario
        financiará una micro parte de un proyecto completo, relacionado con
        el sector inmobiliario.`,
  },
  {
    id: "q2",
    question: "¿Qué coste tiene participar en el proyecto?",
    answer: `Solo se aplica una comisión del 10% del total del proyecto si se
    ejecuta.`,
  },
  {
    id: "q3",
    question: `¿Qué seguridad tiene participar en un proyecto inmobiliario?`,
    answer: `Antes de ofrecer un proyecto de financiación colectiva, se
    selecciona cuidadosamente por un equipo de expertos su viabilidad
    técnica, financiera, comercial y jurídica. Tu
    inversión está respaldada por un activo inmobiliario concreto y
    tangible.`,
  },
  {
    id: "q4",
    question: `¿Estaré informado del proceso del proyecto?`,
    answer: `A través del programa de transparencia de Crowd4flipping, 
    se realizará un seguimiento de todo el proyecto
    hasta su conclusión, informando puntualmente a los participantes de
    la evolución del mismo.`,
  },
  {
    id: "q5",
    question: `¿Cuál es la cantidad mínima?`,
    answer: `El capital mínimo para participar varía en función de cada proyecto.
    En la mayoría de los casos se establece un ticket mínimo que variará
    entre los 500€ y 1000€.`,
  },
  {
    id: "q6",
    question: `¿Cómo se seleccionan los proyectos?`,
    answer: `Con la seguridad que te brinda una compañía con más de 20 años de
    experiencia en el sector, solo publicamos en nuestra plataforma
    aquellos proyectos inmobiliarios que ofrecen la mejor relación
    rentabilidad/riesgo.
    
    Nuestro equipo de arquitectos, abogados y economistas son
    especialistas en valorar la rentabilidad potencial de los proyectos
    que se proponen en Crowd4flipping.`,
  },
  {
    id: "q7",
    question: `¿Quién puede darse de alta?`,
    answer: `Personas físicas, mayores de edad con nacionalidad española.
   
    Personas físicas, mayores de edad, en posesión de un número de
    identificación de extranjero (NIE).
   
    Cualquier sociedad con CIF español.`,
  },
  {
    id: "q8",
    question: `¿Si tengo alguna duda con quién puedo contactar?`,
    answer: `Si tienes alguna duda puedes contactar con nosotros a
    contacto@crowd4flipping.com o en el +34 672 126 268.
   
    Estaremos encantados de poder ayudarte.`,
  },
];

export const FAQs = () => {
  const [selected, setSelected] = useState<string>(null);

  const toggle = (i: string) => {
    if (selected === i) return setSelected(null);
    setSelected(i);
  };

  return (
    <div id="faqs" className={style.faqs}>
      <h2 className={style.faqs_title}>FAQs</h2>
      {questions.map((question) => {
        return (
          <div className={style.faqs_wrapper} key={question.id}>
            <a
              className={style.faqs_question}
              onClick={() => toggle(question.id)}
            >
              {question.question}
            </a>
            {selected === question.id && (
              <p className={style.faqs_answer}>{question.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
