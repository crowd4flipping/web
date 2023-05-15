import React, {useState, useEffect} from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import { HorizontalStepsData } from '../../data/cards/StepCardsData'
import Steper from '../stepers/VerticalMUI';
import { motion } from "framer-motion";
import Image from 'next/image';
import Build3d from '../../public/images/pages_images/news/11.png'

function HomeSection() { 
  
  const [eleTarget, setEletarget] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(()=>{
    const doc = window.document;
    setEletarget(doc.getElementById('3'))
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
  },[eleTarget])

  const effectVariants = {
    opened: {
        opacity: 1,
        x: 0
    },
    closed: {
        opacity: 0, 
        y: 100
    },
}
  return (
   <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Qué hacemos en <span>Crowd</span>4<span>Flipping</span>?</h1>
            </div>
            <div className={styles.page_section_body}>

              <div className={styles.horizontal_steper_container}>


                <Steper data={HorizontalStepsData} active={active}/>

              </div>

              <motion.div 
                className={styles.s3_empty_div} 
                initial={active}
                variants={effectVariants}
                transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
              >
                <Image src={Build3d} objectFit='cover' />
              </motion.div>

              
            </div>
            <div className={styles.page_section_footer}>
             
            </div>
        </div>
    </div>
  )
} 

export default HomeSection
  