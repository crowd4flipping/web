import React from 'react';
import styles from '../../styles/BurgerButton.module.scss';

export default function BurgerButton({_isOpen}) {
  return (
    <div 
        className={_isOpen ? `${styles.header_page_burger} ${styles.open}` : styles.header_page_burger}
    >
            <div className={styles.heder_page_btn_burger}></div>
    </div>
  )
}


