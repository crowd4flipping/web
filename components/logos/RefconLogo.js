

import React, {useEffect, useState} from 'react';
import styles from '../../styles/Logo.module.scss';
import Link from 'next/link';

function Index() {

  return (
    <div className={styles.active}>
        <a 
            href='https://refcon.es/'  
            target="_blank" 
            rel="noreferrer"
        >
            <div className={styles.logo}>
                <div className={styles.logoContent}>
                    <h1>by refcon</h1>
                </div>
            </div>
        </a>
    </div>
  )
}

export default Index