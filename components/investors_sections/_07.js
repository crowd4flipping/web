import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Image from 'next/image';
import Opiniones from '../../components/carrousels/OpinionesHabitisimo';
import habitissimo_img from '../../public/images/brand/habitissimo_logo.png'
import { FaStar } from "react-icons/fa";
import RefconLogo from '../logos/RefconLogo';

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Qué dicen <span>nuestros clientes</span>?</h1>
            </div>
            <div className={styles.page_section_body}>

              <div className={styles.s5_body_container_left}>
                <div className={styles.logo_container}>
                  <Image src={Logo} width={900} height={372} alt='Crowd for Flipping logo'/>
                  <RefconLogo />
                </div>
              </div>
              
              <div className={styles.s5_body_container}>
                <Opiniones />
                <div className={styles.container_habitisimo}>
                  <div className={styles.call_to_action_habitisshmo}>
                    <div className={styles.rate_opnions}>
                      <a 
                        className={styles.habitissimo_link}
                        href='https://empresas.habitissimo.es/pro/refcon/opiniones'
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <Image src={habitissimo_img} width={200} height={30} alt='Logo Habitissimo' />
                        <span> Ver 119 opiniones</span> 
                      </a>
                      <h3>4.8/5</h3>
                      <div className={styles.stars_container}>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className={styles.page_section_footer}>
                
            </div>
        </div>
    </div>
  )
}

export default HomeSection