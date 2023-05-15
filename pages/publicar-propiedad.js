import React, { useState }  from 'react';
import Head from 'next/head';
import styles from '../styles/propiedades_form.module.scss';
import Header from '../components/headers/header_pages_form';
import Footer from '../components/footers/index';
import PropertyForm from '../components/forms/Property';
import WhatsAppButton from '../components/buttons/WhatsAppButton';
import BlocksLoader from '../components/loaders/BlocksLoader';

function Index() {
    const [sendData, setSendData] = useState(false)
  return (
    <div className={styles.form_page}>
        <Head>
            <title>Descubre la forma más rentable de sacar provecho de tu propiedad.</title>
            <meta name="description" content="Con unos simples clicks podrás acceder a las oportunidades que ofremos en Crowd4Flipping para tu propiedad." />  
        </Head>
        <Header 
        />

        <WhatsAppButton />
        {sendData ? (
            <div className={styles.body}>
              <BlocksLoader />
            </div> 
        ) : (
          <>
            <div className={styles.body}>
              <PropertyForm type={'PropertyWebinar'} tag={'80'} _setSendData={setSendData}/>
            </div>
            <Footer />
          </>
        )}
       
    </div>
  )
}

export default Index
