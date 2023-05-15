import { LegalSection } from "./LegalSection";
import styles from "./styles/LegalSection.module.scss";

export const TransparencyPage = () => {
  return (
    <LegalSection>
      <div>
        <h2 className={styles.legalSection_title}>
          El cumplimiento de la legislación, es uno de nuestros principales
          objetivos
        </h2>
        <p>
          A menudo, se concibe la inversión como comprar un activo que se
          revaloriza. Pero, en realidad, invertir es confiar en el trabajo de
          alguien. No olvidemos que detrás de los índices bursátiles, fondos de
          inversión, bonos y acciones hay empresas. Estas empresas no son
          máquinas programadas para fabricar dinero, sino organizaciones de
          personas que realizan un trabajo útil para otros: sus clientes.
        </p>
        <br />
        <p>
          Si esto no fuera así, la empresa en la que invertimos no podría pagar
          y perderíamos nuestra inversión. Básicamente, estamos arriesgando
          nuestro capital a cambio de tener el derecho a participar en el fruto
          de una actividad. Uno de nuestros principales VALORES es la
          TRANSPARENCIA, pero ¿de qué hablamos cuando nos referimos a la
          transparencia?
        </p>
      </div>
      <div>
        <h2 className={styles.legalSection_title}>
          Actualización sobre información financiera del proyecto.
        </h2>
        <p>
          Para tomar una decisión acertada, facilitamos el desglose de costes
          para realizar la inversión, contemplando diferentes escenarios:
          Desfavorable, moderado y favorable.
        </p>
      </div>
      <div>
        <h2 className={styles.legalSection_title}>Estado del proyecto.</h2>
        <p>
          Además de recibir información sobre la evolución del proyecto, los
          inversores podrán solicitar visitas presenciales a los inmuebles.
        </p>
      </div>
      <div>
        <h2 className={styles.legalSection_title}>Participación proactiva</h2>
        <p>
          En caso de escenarios de inversión no favorables, barajamos las
          diferentes posibilidades y son los propios inversores del proyecto
          quienes toman las decisiones.
        </p>
      </div>
      <div>
        <h2 className={styles.legalSection_title}>
          ¿Eres inversor de algún proyecto?
        </h2>
        <p>
          Crowd4Flipping es una plataforma en la que publicitamos los proyectos
          que nosotros mismos tenemos a disposición para que tú también formes
          parte de ellos. Trabajamos de tal manera que, después de estudiar y
          negociar nosotros mismos los posibles proyectos de inversión
          existentes, ofrecemos la posibilidad de participar a cualquier persona
          interesada mediante la formalización de contratos de préstamo directos
          entre el interesado y Crowd4Flipping en los que fijamos las distintas
          condiciones remuneratorias y de devolución del préstamo. Todo
          perfectamente estudiado, transparente y realizado siempre pensando en
          el mayor beneficio del cliente.
        </p>
        <br />
        <p>
          En Crowd4Flipping no mostramos ni damos acceso a proyectos de
          cualquier otro tercero, todos y cada uno de los que mostremos serán
          siempre ejecutados y administrados por nosotros mismos. Nuestra amplia
          experiencia en el sector y el equipo formado por expertos en sus
          respectivas áreas nos avala para poder gestionarlo de manera directa y
          siempre tratando de tú a tú con nuestro cliente.
        </p>
        <br />
        <p>
          Todo ello hace que la maquinaria funcione perfectamente, sin que haya
          información oculta, pérdidas de oportunidad o actuaciones sospechosas.
          Siempre sabrás en qué estado se encuentra la operación, su duración y
          los escenarios que se pueden dar gracias a la infraestructura
          organizativa creada y a la solidez legal de los contratos firmados
          entre las partes en cada proyecto.
        </p>
      </div>
    </LegalSection>
  );
};
