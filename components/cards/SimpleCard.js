import React from 'react'
import styles from '../../styles/cards.module.scss';
import Image from 'next/image';

function SimpleCard({image, title, text}) {
  return (
    <div className={styles.simple_card}>
        <div className={styles.simple_card_header}>
            <Image src={image} width={70} height={70} alt={`image ${title}`}/>
            <h1>{title}</h1>
        </div>
        <div className={styles.simple_card_text}>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SimpleCard
