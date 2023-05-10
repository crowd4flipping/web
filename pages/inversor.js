import Layout from '../components/layouts/Layout';
import styles from '../styles/Investor&Owner_pages.module.scss'
import Head from 'next/head';
import { useEffect, useRef, useState } from "react";
import {  motion, useScroll, useSpring} from "framer-motion";
import Section01 from '../components/investors_sections/_01';
import Section02 from '../components/investors_sections/_02';
import Section03 from '../components/investors_sections/_03';
import Section04 from '../components/investors_sections/_04';
import Section05 from '../components/investors_sections/_05';
import Section06 from '../components/investors_sections/_06';
import Section07 from '../components/investors_sections/_07';
import Section08 from '../components/investors_sections/_08';
import VideoSection from '../components/investors_sections/VideoSection';
import Footer from '../components/footers';
import { RiWhatsappLine } from 'react-icons/ri'


function HomeSection({id, css, children}) {
  return (
    <section className={`${styles.section} ${css}`} id={id}>   
      <div>
          {children}
      </div>
    </section>
  );
}

export default function App({projectsInStudy, projectsFinished}) { 

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 70,
    restDelta: 0.1
  }); 

  return (
    <Layout>
      <div className={styles.page}>
      <Head>
          <title>Crowd4Flipping</title>
          <meta name="description" content="Invierte en proyectos inmobiliarios de las Islas Baleares desde tan solo 500€ " />        
      </Head>
      
      <div className={styles.section_arrows_movil}> 
        <div className={styles.arrow_icon_container}>
          <a 
            href={`https://wa.me/34672126268?text=Hola, quiero participar en proyectos inmobiliarios con Crowd4Flipping. ¿Podrías darme más información?`}
            target="_blank"
            rel="noreferrer" 
          > 
            <RiWhatsappLine className={`${styles.arrow_icon} ${styles.arrow_icon_whatsapp}`} /> 
          </a>
        </div>
      </div>

      <HomeSection id={1} css={styles.s1}> 
        <Section01 />
      </HomeSection>
      <HomeSection id='video_section' css={styles.videoSection}> 
        <VideoSection />
      </HomeSection>
      <HomeSection id={2} css={styles.s2}>
        <Section02 />
      </HomeSection>
      <HomeSection id={3} css={styles.s3}>
        <Section03 />
      </HomeSection>
      <HomeSection id={4} css={styles.s4}>
        <Section04 />
      </HomeSection>
      <HomeSection id={5} css={styles.s5}>
        <Section05 projectsInStudy={projectsInStudy.data} projectsFinished={projectsFinished.data}/>
      </HomeSection>
      <HomeSection id={6} css={styles.s6}>
        <Section06 />
      </HomeSection>
      <HomeSection id={7} css={styles.s7}>
        <Section07 />
      </HomeSection> 
      <HomeSection id={8} css={styles.s8}>
        <Section08 />
      </HomeSection> 
      <Footer />
      <motion.div className={styles.progress}  style={{ scaleX }} />
    </div>
    </Layout>
  );
}


export async function getStaticProps(){

  const api = 'https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/get-projects-by-phase'
  const [projectsInStudy, projectsFinished] = await Promise.all([
    fetch(`${api}/IN_STUDY`).then((res) => res.json()),
    fetch(`${api}/FINISHED`).then((res) => res.json())
  ])

  return{
      props: {
        projectsInStudy,
        projectsFinished
      }
  }

}
