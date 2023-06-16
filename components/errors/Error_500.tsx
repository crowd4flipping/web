import React from 'react'
import { PageLayout } from "@/components/layouts/PageLayout";
import Image from 'next/image';
import Image_500 from '@/public/images/500.jpg';
import styles from '@/styles/404.module.scss';

export function Error_500() {
  return (
    <PageLayout fixedNavBar>
        <div className={styles.page_404}>   
            <h1 className={styles.page_404_title}>¡Ups! Parece que ha ocurrido un error.</h1>
            <p>Puedes navegar hacia otra página. Sentimos las molestias.</p>
            <Image 
                src={Image_500} 
                height={500} 
                width={500}
                alt='Error de servidor. Error.'
            />
        </div>
    </PageLayout>
  )
}
