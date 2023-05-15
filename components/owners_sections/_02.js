import React, {useState, useEffect} from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import styless from '../../styles/Home.module.scss';
import {CardsData} from '../../data/cards/StepCardsData' 
import ModalButton from '../buttons/ModalButton';
import Form from './form_modal';
import Steper from '../stepers/VerticalMUI';


function HomeSection() { 
   
  const [active, setActive] = useState(false);
  const [eleTarget, setEletarget] = useState(null);
  const [screen, setScreen] = useState(false)
  const fromWeb = 'fw'
  
  useEffect(()=>{
    const doc = window.document;
    setEletarget(doc.getElementById('ownerS2'))
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

console.log(active);

  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
             
                <h1> Ventajas de ofrecer propiedad a <span>Crowd</span>4<span>Flipping</span></h1>
            </div>
            <div className={styles.page_section_body}>
              <div className={styles.box_2}>

                <div className={styles.image_s3} />

              </div>
              <div className={styles.box_1}>
                <div className={styles.cards_container}>
                  <Steper data={CardsData}  active={active}/>
                </div>
              </div>
            </div>
            <div className={styles.page_section_footer}>
              <div className={styless.buttons_container}>
                  <a href={`#4`}>
                    <div className={`${styless.back_btn} ${styless.principal_button}`}>Solicitar información</div>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection