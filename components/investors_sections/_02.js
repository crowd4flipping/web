import React, {useEffect, useState} from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import {StepsData} from '../../data/cards/StepCardsData';
import Steper from '../stepers/MaterialHorizontal'; 
import Vsteper from '../stepers/VerticalMUI';
import {motion} from 'framer-motion'
import Link from 'next/link'; 
import GreenButton from '../buttons/GreenButton';

function HomeSection() {

  const [eleTarget, setEletarget] = useState(null);
  const [active, setActive] = useState(false);
  const [screen, setScreen] = useState(false);
  const fromWeb = 'fw'

  useEffect(()=>{
    const doc = window.document;
    setEletarget(doc.getElementById('2'))
  },[]);

  const setElementEffect = (ele, setActive) =>{
      let eleHight = ele?.offsetTop;
      let activeHight = eleHight - 500;
      window.addEventListener("scroll", ()=>{
        if(window.scrollY > (activeHight)){
          return setActive(true); 
        }
        if(window.scrollY < eleHight){return setActive(false)}
    })
  }

  useEffect(()=>{
    if(eleTarget === null)return
    setElementEffect(eleTarget, setActive)
  },[eleTarget]);

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

useEffect(() => { 
    let document = window.screen.width;
    if(document < 991){
        setScreen(true)
        return
    }
}, [])


  return (
    <div className={styles.page_section} id='steps_container'>
        <div className={`${styles.page_section_container} `}>
            <div className={`${styles.page_section_header}`}>
                <h1><span>Sácale partido  a tu dinero </span> con estos sencillos pasos</h1>
            </div>
              <div className={`${styles.page_section_body_s2} ${styles.page_section_body_s2_flex}`}>
              <motion.div 
                className={active ? `${styles.steps_container} ${styles.steps_container_active}` : styles.steps_container} 
                initial={active}
                variants={effectVariants}
                animate= {active ? "opened" : "closed"}
                transition={{delay: .1, duration: .1,  type: 'spring', stiffness: 100}}
              >
                <Steper data={StepsData} activeEffect={active} active={active}/> 
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
