import React from 'react'
import Layout from "../components/layouts/Layout";
import styles from '../styles/Home.module.scss';
import { motion } from "framer-motion"
import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/PNG_Files/Transparent_Logo_02.png'
import {BsCheck2Circle} from 'react-icons/bs'

export default function ThanksInvestment() {
  return (
    <>
      <Layout>
        <div className={styles.explore_page_hero}>
          <div className={styles.page_grid_container}>
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.75,
              }}
              className={`${styles.explore_page_hero_container} ${styles.left}`}
            >
              <Link href='/' className={styles.logo_container}>
                <div className={styles.text_container}>
                    <Image src={Logo} width={700} height={300} alt='Crowd for Flipping' />
                    <h1>La inversión inmobiliaria <span>al alcance de todos</span></h1>
                </div>
              </Link>
              <div className={styles.thanks_message_container}>
                < BsCheck2Circle className={styles.BsCheck2Circle}/>
                <h2><span>Estamos confirmando tu dirección de correo electrónico.</span></h2>
              </div>
            </motion.div>   
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.75,
              }}
              className={`${styles.explore_page_hero_container} ${styles.right}`}
            >
            </motion.div>   
          </div>
          <motion.div
              className={styles.mountains}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.75,
              }}
            >
          </motion.div>
        </div>
      </Layout>
    </>
  )
}

