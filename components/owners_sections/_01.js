import React from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import styless from '../../styles/Home.module.scss';
import {motion} from 'framer-motion';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Image from 'next/image';

function HomeSection() { 
  return (
     <>
        <div className={`${styles.video_container} ${styles.video_container_invert}`}>
          <video src='/videos/real_state_01.mp4' autoPlay loop="loop" muted playsInline/>
        </div>
        <div className={styles.page_section}>
          <div className={styless.parallax_container}>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.75,
                }}
                className={`${styless.explore_page_hero_container} ${styless.left} ${styless.blue_container}`}
              >
                <div className={`${styless.logo_container} ${styless.logo_container_owner_page}`}>
                    <Image src={Logo} width={700} height={300} alt='Crowd4Flipping logo' className={``}/>
                    <div className={styless.text_container}>
                      <h1>Tanto si quieres vender como alquilar, <span> saca el máximo partido a tu propiedad.</span></h1>
                    </div>
                </div>
                
                <div className={`${styless.buttons_container} ${styless.buttons_container_owner_page}`}>
                    <a href={`#4`}>
                      <div className={`${styless.back_btn} ${styless.principal_button}`}>Solicitar información</div>
                    </a>
                </div>
              </motion.div>   
          </div>
        </div>
     </>
  )
} 

export default HomeSection
 