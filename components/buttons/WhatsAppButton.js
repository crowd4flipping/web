import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri'
import styles from '../../styles/buttons.module.scss';

function WhatsAppButton() {
  return (
    <div className={styles.section_arrows_movil}> 
        <div className={styles.arrow_icon_container}>
          <a 
            href={`https://wa.me/34672126268?text=Hola, hola, soy ______, tengo una propiedad y quisiera tener más información acerca de Crowd4Flipping?`}
            target="_blank"
            rel="noreferrer" 
          > 
            <RiWhatsappLine className={`${styles.arrow_icon} ${styles.arrow_icon_whatsapp}`} /> 
          </a>
        </div>
    </div>
  )
}

export default WhatsAppButton
