import React from 'react'
import { PageLayout } from "@/components/layouts/PageLayout";
import Image from 'next/image';
import Image_404 from '@/public/images/404.jpg';
import styles from '@/styles/404.module.scss';

export default function index() {
  return (
    <PageLayout fixedNavBar>
        <div className={styles.page_404}>   
            <h1 className={styles.page_404_title}>¡Ups! Parece que esta página no existe</h1>
            <Image 
                src={Image_404} 
                height={500} 
                width={500}
                alt='Página no encontrada'
            />
        </div>
    </PageLayout>
  )
}
