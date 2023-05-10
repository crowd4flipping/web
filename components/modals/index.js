import React from 'react'
import styles from '../../styles/modals.module.scss';
import {motion} from 'framer-motion';

export default function Index({children, setShowModal}) {

  return (
    <motion.div 
        onClick={() => setShowModal(false) }
        className={styles.modal}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
        delay: 0.2,
        duration: 0.3,
    }}
    >
        {children}
    </motion.div>
  )
}
