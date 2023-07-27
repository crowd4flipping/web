import style from "./styles/FAQs.module.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "@/components/icons/ChevronButton";
type FAQ = { id: string; question: string; answer: string };

const questions: FAQ[] = [
  {
    id: "q9",
    question: "Tributación de rendimientos generados",
    answer: `En relación a la tributación de los ingresos que se puedan obtener a raíz del préstamo que se realiza, es decir, 
    los porcentajes que se distribuyen de las rentas obtenidas en el proyecto, 
    serán considerados como rendimientos de capital mobiliario y deberán ser declarados dentro de la base del ahorro en la declaración de la renta.

    Sobre dichos rendimientos se le aplicarán los tramos establecidos para la base del ahorro, que van desde el 19% al 26% máximo en caso de que superen los 200.000€.

    Hay que tener presente que únicamente se declararán los porcentajes distribuidos, no la cantidad prestada, 
    ya que el préstamo estará exento de tributación al no considerarse ni ganancia o ingreso ni pérdida.`,
  },
  {
    id: "q10",
    question: "Marco legal Crowd4Flipping",
    answer: `Crowd4Flipping no está supervisado actualmente por la CNMV puesto que, 
    por el tipo de actividad que realiza y la metodología implementada para la financiación de cada proyecto, 
    no tiene la obligación impuesta por la Ley sobre Plataformas de Financiación Participativa de estar controlada por dicho organismo.

    Se ha realizado un profundo estudio de la normativa aplicable y hemos creado una estructura 
    por la cual trabajamos a través de contratos de préstamo directamente entre Crowd4Flipping 
    y el prestamista para que seamos nosotros mismos los que ejecutemos el proyecto. 
    Como no se produce una intermediación para financiar proyectos ajenos de tal manera que se promocionan en nuestra web o plataforma, 
    sino que es el propio Crowd4Flipping el que va a desarrollar el proyecto, siempre manteniendo total transparencia y comunicación con nuestros clientes, 
    no existe obligación de cumplir con la supervisión de la Comisión Nacional del Mercado de Valores.
    `,
  },
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
            <div
              className={style.faqs_question_container}
              onClick={() => toggle(question.id)}
            >
              <p className={style.faqs_question}>{question.question}</p>
              <div>
                <div className={style.faqs_icon}>
                  {selected === question.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </div>

            {selected === question.id && (
              <p className={style.faqs_answer}>{question.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
