import React from 'react'
import styles from '../../styles/Footers.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';

export default function index() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_container}>

            <div className={styles.footer_logo_container}>
                <Image src={Logo} width={350} height={140} alt='logo crowd4flipping' />
            </div>
            <div className={styles.footer_content}>
                <h4> 
                    <span> Obraplus S.L. </span> 
                    Todos los derechos reservados. 
                    <br/>
                    <br/>
                     <ul>
                        <Link href={'/docs/politica-privacidad'}> Política de privacidad </Link>
                        <Link href={'/docs/aviso-legal'}> Aviso Legal </Link>
                        <Link href={'/docs/politica-cookies'}> Política de Cookies </Link>
                        <Link href={'/transparencia'}> Programa de transparencia </Link>
                        <Link href={`https://app.crowd4flipping.com`}>Acceso</Link>
                     </ul>
                </h4>
            </div>
        </div>
        
    </div>
  )
}  