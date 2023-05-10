import styles from '../../styles/investor_secctions/S1.module.scss' 
import styless from '../../styles/Home.module.scss';
import {motion} from 'framer-motion';
import Link from 'next/link';
import GreenButton from '../buttons/GreenButton'

function HomeSection() {
  const fromWeb = 'fw'
  return (
    <>
      <div className={styles.s1_container}>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className={styles.s1_background}
        >
          <div 
            className={styles.content}
            
          >
            <div class={styles.parallax_container} id='parallax_container'>
              <div class={styles.parallax_background} >
                <div className={styles.video_container}>
                  <video src='/videos/bg_video_s1.mp4' autoPlay loop="loop" muted playsInline/>
                </div>  
              </div>
              <div className={styles.parallax_content}>
                <div className={styles.text_container}>
                  <h1 className={styles.s1_pages_title}>Plataforma de inversión inmobiliaria participativa para ahorradores. <span>Inicia desde 500€</span></h1>
                  <p>Nuestra plataforma de <strong>préstamos colaborativos</strong> permite a nuestros usuarios <strong>invertir en proyectos inmobiliarios de alta calidad </strong>sin tener que comprometer grandes sumas de dinero. El equipo de expertos de <strong>Crowd4Flipping se encarga de los trámites debidos y el análisis de riesgos</strong> para asegurarse de presentar solo los mejores proyectos a los inversores.</p>
                </div>
                <div className={styles.buttons_container}>
                  <a
                    href={'#video_section'}
                  >
                    <motion.div 
                      className={`${styless.back_btn}`}
                      whileHover={{y: -7  }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                        Conoce Crowd<span>4</span>Flipping
                    </motion.div>
                  </a>
                  <a href={`https://app.crowd4flipping.com/?${fromWeb}`}>
                    <GreenButton 
                      Text={'Regístrate gratis'}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div> 
      </div>
    </>
  )
} 

export default HomeSection
 