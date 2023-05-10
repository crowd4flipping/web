import styles from '../styles/Home.module.scss';
import styless from '../styles/transparencia.module.scss';
import Layout from "../components/layouts/Layout";
import { motion } from "framer-motion"
import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Header from '../components/headers/header_pages';
import Footer from '../components/footers';

export default function Transparencia() {
  return (
      <Layout>
       <div className={styless.transparency_page}>
        <S1 />
        <S2 />
       </div>
        <Footer />
      </Layout>
  );
};

const S1 = () => { 
  return (
    <div className={styles.explore_page_hero}>
      <div className={styles.page_grid_container}>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className={`${styles.explore_page_hero_container} ${styles.left}`}
        >
          <div className={styles.logo_container}>
            <Image src={Logo} width={900} height={400} alt='Crowd for Flipping' />
            <div className={styles.text_container}>
            <h1>Ser una empresa responsable, más allá del <span>cumplimiento de la legislación</span>, es uno de <span>nuestros principales objetivos</span>.</h1>
            </div>
          </div>
        </motion.div>   
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className={`${styles.explore_page_hero_container} ${styles.right}`}
        >
        </motion.div>   
      </div>
      <Mountains />
    </div>
  );
};
const S2 = () => { 
  return (
      <div className={styless.transparency_s2}>
        <div className={styless.transparency_s2_texcontainer}>
            <p>A menudo, se concibe la inversión como <span>comprar un activo que se revaloriza</span>. Pero, en realidad, <span>invertir es confiar en el trabajo de alguien</span>. No olvidemos que detrás de los índices bursátiles, fondos de inversión, bonos y acciones hay empresas. Estas empresas no son máquinas programadas para fabricar dinero, <span>sino organizaciones de personas que realizan un trabajo útil para otros: sus clientes</span>. 
            <br/>
            Si esto no fuera así, la empresa en la que invertimos no podría pagar y perderíamos nuestra inversión. Básicamente, estamos arriesgando nuestro capital a cambio de tener el derecho a <span>participar en el fruto de una actividad</span>. 
            <br/>
            Uno de nuestros principales <span>VALORES</span> es la <span>TRANSPARENCIA</span>, pero ¿de qué hablamos cuando nos referimos a la transparencia? 
            </p>
        </div>
        <div className={styless.transparency_s2_items_container}>
        <div className={styless.transparencia_card}>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_01}` }></div>
            <div className={styless.transparencia_card_text}>
                <h2><span>Actualización sobre información financiera del proyecto</span>. Para tomar una decisión acertada, facilitamos el desglose de costes para realizar la inversión, contemplando diferentes escenarios: Desfavorable, moderado y favorable. 
                </h2>
            </div>
        </div>
        <div className={`${styless.transparencia_card} ${styless.transparencia_card_02}`}>
            <div className={styless.transparencia_card_text}>
                <h2><span>Estado del proyecto</span>. Además de recibir información sobre la evolución del proyecto, los inversores podrán solicitar visitas presenciales a los inmuebles. </h2>
            </div>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_02}` }></div>
        </div>
        <div className={styless.transparencia_card}>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_03}` }></div>
            <div className={styless.transparencia_card_text}>
                <h2><span>Participación proactiva</span>. En caso de escenarios de inversión no favorables, barajamos las diferentes posibilidades y son los propios inversores del proyecto quienes toman las decisiones. </h2>
            </div>
        </div>
        <div className={`${styless.transparencia_card} ${styless.transparencia_card_02}`}>
            <div className={styless.transparencia_card_text}>
                <h2>¿Eres inversor de algún proyecto? <a href='https://app.crowd4flipping.com/' ><span> ¡Solicita tu visita presencial! </span></a></h2>
            </div>
            <div className={`${styless.transparencia_card_image} ${styless.transparencia_card_image_04}` }></div>
        </div>
        </div>
        <div className={styless.transparency_s2_texcontainer}>
            <p>
            <span>Crowd</span>4<span>Flipping</span> es una plataforma en la que publicitamos los proyectos que nosotros mismos tenemos a disposición para que tú también formes parte de ellos. Trabajamos de tal manera que, después de estudiar y negociar nosotros mismos los posibles proyectos de inversión existentes, ofrecemos la posibilidad de participar a cualquier persona interesada mediante la formalización de contratos de préstamo directos entre el interesado y Crowd4Flipping en los que fijamos las distintas condiciones remuneratorias y de devolución del préstamo. Todo perfectamente estudiado, transparente y realizado siempre pensando en el mayor beneficio del cliente.
            <br/>
            <br/>  
            En <span>Crowd</span>4<span>Flipping</span> no mostramos ni damos acceso a proyectos de cualquier otro tercero, todos y cada uno de los que mostremos serán siempre ejecutados y administrados por nosotros mismos. Nuestra amplia experiencia en el sector y el equipo formado por expertos en sus respectivas áreas nos avala para poder gestionarlo de manera directa y siempre tratando de tú a tú con nuestro cliente.
            <br/> 
            <br/> 
            Todo ello hace que la maquinaria funcione perfectamente, sin que haya información oculta, pérdidas de oportunidad o actuaciones sospechosas. Siempre sabrás en qué estado se encuentra la operación, su duración y los escenarios que se pueden dar gracias a la infraestructura organizativa creada y a la solidez legal de los contratos firmados entre las partes en cada proyecto. 

            </p>
        </div>
      </div>
  );
};
const Mountains = () => (
  <motion.div
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      duration: 0.75,
    }}
    className={`${styless.transparency_img} `}
  >
  </motion.div>
);
