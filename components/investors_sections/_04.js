import React, {useState, useEffect} from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import {Data} from '../../data/cards/SimpleCardData';
import Steper from '../stepers/MaterialHorizontal';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Build3d from '../../public/images/pages_images/news/10.png'

function HomeSection() {

  const [eleTarget_, setEletarget_] = useState(null);
  const [active, setActive] = useState(false);
  const [screen, setScreen] = useState(false)

  useEffect(()=>{
    const doc = window.document;
    setEletarget_(doc.getElementById('4'))
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
    if(eleTarget_ === null)return
    setElementEffect(eleTarget_, setActive)
  },[eleTarget_])

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
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
        <div className={styles.page_section_header}>
                <h1>¿Por qué <strong>invertir en inmuebles con  <span>Crowd</span>4<span>Flipping</span></strong>?</h1>
            </div>
            <div className={styles.page_section_body_01}>
              <div 
                className={styles.empty_div_s4} 
              >
                <Image src={Build3d} objectFit='cover' />
              </div>
              <motion.div 
                id='steps_container_2'
                className={styles.steps_container}
                initial={active}
                variants={effectVariants}
                animate= {active ? "opened" : "closed"}
                transition={{delay: .1, duration: .1,  type: 'spring', stiffness: 100}}
              >
                <Steper 
                  data={Data}
                  active={active}
                />
              </motion.div>
            </div>
            <div className={styles.page_section_footer}>
             
            </div>
        </div>
    </div>
  )
}

export default HomeSection