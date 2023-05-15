import React, { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Layout.module.scss';
import Header from '../headers/header_pages'
import Link from 'next/link';
import { motion } from 'framer-motion';
import {linksContent} from '../headers/NavBarLinks';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import InstagramIcon from '../../public/images/icons/instagramIcon.webp';

function Layout({children}) {

  return (
    <div style={{position: 'relative'}}>
         <Head>
            <title>Crowd4Flipping</title>
            <meta name="description" content="La inversión inmobiliaria al alcance de todos." />
        </Head>
        <div className={styles.Layout}>
            <Header />
            {children}
        </div>
    </div>
  )
}

export default Layout
