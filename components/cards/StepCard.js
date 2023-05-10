import React from 'react'
import styles from '../../styles/cards.module.scss'
import {BiDownArrow} from 'react-icons/bi'

function StepCard({step, title, text, image}) {
  return (
    <div className={styles.step_card}>
        <div className={styles.arrow_fixed}>
            <BiDownArrow  className={styles.arrow_fixed_icon}/>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default StepCard
