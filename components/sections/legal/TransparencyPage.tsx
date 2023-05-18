import { PainPointIconThree } from "@/components/icons/PainPointIconThree";
import { InfoHeroSection } from "../hero-section/InfoHeroSection";
import { PainPoint } from "../home-page/bottom-section/PainPoint";
import { LegalSection } from "./LegalSection";
import styles from "./styles/LegalSection.module.scss";
import transparencyStyles from "./styles/Transparency.module.scss";
import { ReactElement } from "react";
import Image from "next/image";
import HouseLoupe from "@/public/images/house-loupe-transparency.png";
import { useBreakPoints } from "@/components/hooks/useBreakPoints";
import { EmptyInfoCard } from "@/components/cards/info-card/EmptyInfoCard";
import { InfoCard } from "@/components/cards/info-card/InfoCard";

type InfoHeroSectionProps = Parameters<typeof InfoHeroSection>[number];

export const TransparencyPage = () => {
  const { isSmallerSize } = useBreakPoints();

  const headerSection: Record<keyof InfoHeroSectionProps, ReactElement> = {
    header: (
      <h2 className={styles.legalSection_heroTitle}>
        <span className={styles.legalSection_heroTitle_highlight}>
          Transparencia.
        </span>
        <br />
        Uno de nuestros pilares.
      </h2>
    ),
    elementOne: (
      <PainPoint
        title="Participación proactiva"
        text="En caso de escenarios de inversión no favorables, barajamos las diferentes posibilidades y son los propios inversores del proyecto quienes toman las decisiones."
        icon={<PainPointIconThree />}
      />
    ),
    elementTwo: (
      <PainPoint
        title="Información financiera"
        text="Para tomar una decisión acertada, facilitamos el desglose de costes para realizar la inversión, contemplando diferentes escenarios: Desfavorable, moderado y favorable."
        icon={<PainPointIconThree />}
      />
    ),
    elementThree: (
      <PainPoint
        title="Estado del proyecto"
        text="Además de recibir información sobre la evolución del proyecto, los inversores podrán solicitar visitas presenciales a los inmuebles."
        icon={<PainPointIconThree />}
      />
    ),
  };

  return (
    <LegalSection>
      <InfoHeroSection
        header={headerSection.header}
        elementOne={headerSection.elementOne}
        elementTwo={headerSection.elementTwo}
        elementThree={headerSection.elementThree}
      />
      <div className={transparencyStyles.transparencyPolicy_contentWithImage}>
        <div
          className={
            transparencyStyles.transparencyPolicy_contentWithImage_content
          }
        >
          <h2 className={styles.legalSection_title}>
            El cumplimiento de la legislación, es uno de nuestros principales
            objetivos
          </h2>
          <p>
            A menudo, se concibe la inversión como comprar un activo que se
            revaloriza. Pero, en realidad, invertir es confiar en el trabajo de
            alguien. No olvidemos que detrás de los índices bursátiles, fondos
            de inversión, bonos y acciones hay empresas. Estas empresas no son
            máquinas programadas para fabricar dinero, sino organizaciones de
            personas que realizan un trabajo útil para otros: sus clientes.
          </p>
          <br />
          <p>
            Si esto no fuera así, la empresa en la que invertimos no podría
            pagar y perderíamos nuestra inversión. Básicamente, estamos
            arriesgando nuestro capital a cambio de tener el derecho a
            participar en el fruto de una actividad. Uno de nuestros principales
            VALORES es la TRANSPARENCIA, pero ¿de qué hablamos cuando nos
            referimos a la transparencia?
          </p>
        </div>
        <div
          className={
            transparencyStyles.transparencyPolicy_contentWithImage_image
          }
        >
          {isSmallerSize ? (
            <Image
              width={200}
              height={200}
              src={HouseLoupe}
              alt="house-loupe"
              objectFit="contain"
            />
          ) : (
            <Image
              width={310}
              height={310}
              src={HouseLoupe}
              alt="house-loupe"
              objectFit="contain"
            />
          )}
        </div>
      </div>

      <InfoCard title="Solicita una visita presencial">
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
          <strong>
            Como inversor puedes solicitar una visita presencial a los inmuebles
          </strong>
        </p>
        <br />
        <p>Para solicitar tu visita escribenos a: contacto@crowd4flipping.com </p>
      </InfoCard>
      <div>
        <p>
          Crowd4Flipping es una plataforma en la que publicitamos los proyectos
          que nosotros mismos tenemos a disposición para que tú también formes
          parte de ellos. Trabajamos de manera que, después de estudiar y
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
