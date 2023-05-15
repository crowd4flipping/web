import React from 'react'
import styles from '../../styles/buttons.module.scss'
import {motion} from 'framer-motion'

function CallToActionButton({Text}) {
  return (
    <div>
    <motion.div 
        className={`${styles.green_bg_button}`}
        whileHover={{y: -7  }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    ><span>{Text}</span>
    </motion.div>
    </div>
  )
}

export default CallToActionButton
