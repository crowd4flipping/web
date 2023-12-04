import React from 'react'
import { PageLayout } from "@/components/layouts/PageLayout";
import Image from 'next/image';
import Logo from '@/public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import styles from '@/styles/404.module.scss';

export default function index() {
  return (
    <PageLayout fixedNavBar>
        <div className={styles.page_404}>   
            <h1 className={styles.page_404_title}>Muchas gracias por contactar con nosotros. <br/> Nos pondremos en contacto a la mayor brevedad posible.</h1>
            <Image 
                src={Logo} 
                height={500} 
                width={500}
                objectFit='contain'
                alt='Crowd4Flipping Logo'
            />
        </div>
    </PageLayout>
  )
}
