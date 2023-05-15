import React, {useState, useEffect} from 'react'
import styles from '../../styles/buttons.module.scss'
import {motion} from 'framer-motion';
import { Router } from 'next/router';

export default function ModalButton({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const menuVariants = { 
      opened: {
          top: "0vh",
          left: "0",
          position: "fixed",
          display: "flex",
          opacity: 1,

      },
      closed: {
          top: "-100vh", 
          display:"none",
          position: "relative",
          opacity: 0
      }
    }
    const open = () =>{ 
        setIsOpen(state => !state)
    }

    useEffect(()=>{
        if(!isOpen)return
        window.scrollBy(0, 500)
    },[isOpen])

  return ( 
    <>
        <div className={styles.modal_button} onClick={open}>
            <span>Solicitar información</span>
        </div>
        <motion.div 
            className={styles.modal_container}
            initial={false}
            variants={menuVariants}
            animate= {isOpen ? "opened" : "closed"}
    >   
            <div className={styles.close_button} onClick={open}>
                <span>Salir</span>
            </div>
            <div className={styles.modal_content}>
                {children}
            </div>
          
        </motion.div>
    </>
  )
}
