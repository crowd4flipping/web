import React, {useEffect, useState} from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import {motion} from 'framer-motion'
import GreenButton from '../buttons/GreenButton';

function HomeSection() {

  const [active, setActive] = useState(false);
  const [divHeight, setDivHeight] = useState(0);
  const [screen, setScreen] = useState(false)
  const fromWeb = 'fw'

  useEffect(() => {
    const handleScroll = () => {
      const height = document.getElementById('video_section').offsetHeight;
      setDivHeight(height);
      if (window.scrollY >= divHeight) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [divHeight]);

  useEffect(() => { 
      let document = window.screen.width;
      if(document < 991){
          setScreen(true)
          return
      }
  }, [])


  const effectVariants = {
    opened: {
        opacity: 1,
        y: 0
    },
    closed: {
        opacity: 0, 
        y: 100
    },
}


  return (
    <div className={styles.page_section}>
        <div className={`${styles.page_section_container} `}>
            <div className={`${styles.page_section_header}`}>
                <h1><span>Conoce de manera sencilla</span> cómo funciona Crowd4Flipping</h1>
            </div>
            <div className={`${styles.page_section_body_s2} ${styles.page_section_body_video_section}`}>
                <motion.div 
                  className={styles.video_container_}
                  initial={active}
                  variants={effectVariants}
                  animate= {active ? "opened" : "closed"}
                  transition={{delay: .1, duration: .1,  type: 'spring', stiffness: 100}}
                >
                  <video src='https://firebasestorage.googleapis.com/v0/b/c4f-backend-c3e81.appspot.com/o/videos-corporativos%2FCF4%20ANIMACION_BAJO.mp4?alt=media&token=7d70d3e5-d84e-48eb-8172-ea4abf987b1f' playsInline controls poster='images/video_poster.png'/>
                </motion.div>  
            </div>
            <div className={styles.page_section_footer}>
              <a href={`https://app.crowd4flipping.com/?${fromWeb}`}>
                <GreenButton 
                  Text={'Regístrate gratis'}
                />
              </a>
            </div>
        </div>
    </div>
  )
}

export default HomeSection
