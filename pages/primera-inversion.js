import React from 'react'
import Layout from "../components/layouts/Layout";
import styles from '../styles/video_page.module.scss';
import { motion } from "framer-motion"
import Link from "next/link";
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/PNG_Files/Transparent_Logo_02.png'
import {BsCheck2Circle} from 'react-icons/bs'

export default function Index() {
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
                    <h1><span>Primera inversión</span></h1>
                </div>
              </Link>

            </motion.div>   

            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.75,
              }}
              className={`${styles.explore_page_hero_container} ${styles.right_}`}
            >
                <div className={styles.video_container}>
                    <video autoPlay controls>
                        <source src='https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/videos-corporativos%2F2.%20C%C3%B3mo%20hacer%20nuestra%20primera%20inversi%C3%B3n.mp4?alt=media&token=0b1bbd13-fd94-48ce-aed8-34dc2b523f63'/>
                    </video>
                </div>
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

