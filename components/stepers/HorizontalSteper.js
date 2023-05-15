import React from 'react'
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';

function HorizontalSteper({image, title, text}) {
  return (
    <div className={styles.HorizontalSteper_step}>
       <div className={styles.image_container}>
            <Image src={image} width={75} height={75} alt={title} />
        </div> 
        <div className={styles.text_container}>
            <h1> {title} </h1>
            <p> {text} </p>
        </div>
    </div>
  )
}

export default HorizontalSteper
