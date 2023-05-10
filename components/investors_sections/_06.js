import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import BasicAccordion from '../accordions/BasicAccordion';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Build3d from '../../public/images/pages_images/news/12.png'
function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={`${styles.page_section_header} ${styles.page_section_header_principal}`}>
                <h1>Crowdlending inmobiliario transparente y sencillo. [FAQS]</h1>
                <p>Olvídate de las complicaciones y sorpresas desagradables en la letra pequeña. <strong>Somos expertos en financiamiento colaborativo y estamos aquí para responder tus preguntas de forma clara y directa.</strong> ¿Tienes dudas? No te quedes con ellas, estamos a tu disposición. Te invitamos a revisar nuestras preguntas frecuentes para obtener más información o a <strong>contactarnos directamente para obtener una respuesta personalizada.</strong> ¡Confía en nosotros y aprovecha las oportunidades de inversión inmobiliaria! <strong>Asegúrate de tener toda la información necesaria antes de tomar una decisión de inversión.</strong></p>
            </div>
            <div className={styles.page_section_body}>
              
              <div className={styles.acordion_container}>
                <BasicAccordion />
              </div>
              <motion.div 
                className={styles.empty_div} 
                animate={{ y: [-15, 15]}} 
                transition={{
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut",
                }}
              >
                <Image src={Build3d} objectFit='contain' width={700} height={700}/>
              </motion.div>
            </div>
            <div className={styles.page_section_footer}>
             
            </div>
        </div>
    </div>
  )
}

export default HomeSection
