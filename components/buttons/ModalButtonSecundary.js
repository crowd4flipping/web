import React, {useState, useEffect} from 'react'
import styles from '../../styles/buttons.module.scss'
import {motion} from 'framer-motion';

export default function ModalButton({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const menuVariants = { 
      opened: {
          top: "0vh",
          left: "0",
          position: "fixed",
          display: "flex",
          opacity: 1 
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

  return (
    <>
        <div className={styles.modal_button_secundary} onClick={open}>
            <span>Lista de espera</span>
        </div>
        <motion.div 
            className={styles.modal_container}
            initial={false}
            variants={menuVariants}
            animate= {isOpen ? "opened" : "closed"}
        >
            
            {children}
            <div className={styles.close_button} onClick={open}>
                <span>Salir</span>
            </div>
        </motion.div>
    </>
  )
}
