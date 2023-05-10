import React from 'react'
import styles from '../../styles/botcss.module.scss';

export default function Botcss() {
  return (
    <div className={styles.bot_css} >
        <div className={styles.face}></div>
        <div className={styles.head}></div>
        <div className={styles.body}></div>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
        <div className={styles.eye1}></div>
        <div className={styles.eye2}></div>
    </div>
  )
}
