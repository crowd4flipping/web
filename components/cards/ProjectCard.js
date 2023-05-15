import {motion} from 'framer-motion';
import styles from '../../styles/project_card.module.scss';
import Image from 'next/image';
import {MdLocationPin} from 'react-icons/md';
import Carousel from 'react-material-ui-carousel' 
import StudyImage from '../../public/images/pages_images/transparencia_cards/01.jpg'
import BlocksLoader from '../loaders/BlocksLoader';
import MiniBlockLoader from '../loaders/MiniBlockLoader';
import Router from 'next/router';
import { useState } from 'react';

function ProjectCard({id, imgs, name, location, quantityFunded, estimatedRentability, finalProfit, phase}) {

    const formatterEuro = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
    const [loader, setLoader] = useState(false)
 
    const go = (url) =>{
        setLoader(true)
        Router.push(url)
    }
  return ( 
    <>
        {loader ? (<MiniBlockLoader />) : (
            <motion.div
                whileHover={{ 
                    y: -10,
                    boxShadow: '1px 1px 4px #131515',
                    zIndex: 1000
                }}
                transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                className={styles.card}
            > 

                <div className={styles.header}>
                    <Carousel
                        autoPlay
                        className={styles.carousel}
                    >
                        {imgs?.map((img, i) => (
                            <Image 
                                key={i}
                                src={img.link}
                                layout='fill'
                                objectFit='cover'
                                className={styles.img}
                            />
                        ))}
                    </Carousel> 
                </div>

                <div className={styles.body}>
                    <h1>{name}</h1>
                    <div className={styles.location}>  
                        <MdLocationPin />   
                        <span>{location}</span> 
                    </div>
                    <hr />
                    <div className={styles.financialInfo}>
                        {phase === 'IN_STUDY' ? (
                            <>
                                <h1>PROYECTO EN ESTUDIO</h1>
                                <Image
                                    src={StudyImage}
                                    width={100}
                                    height={100}
                                />
                            </>
                        ) : 
                        (
                        <>
                        <div className={styles.financialInfo_item}>
                                <h2>Fondo recaudado</h2>
                                <p> {formatterEuro.format(quantityFunded)} </p>
                            </div>
                            <div className={styles.financialInfo_item}>
                                <h2>Rentabilidad estimada</h2>
                                <p> {estimatedRentability}% </p>
                            </div>
                            <div className={styles.financialInfo_item}>
                                <h2>Rentabilidad obtenida</h2>
                                <p> {finalProfit || 'En proceso'}{finalProfit && '%'}</p>
                            </div>
                        </> 
                        )}
                    </div>
                </div>
                <div className={styles.footer}>
                    <div onClick={() => go(`/proyectos/${id}`)}>
                        <div 
                            className={styles.button}
                        >
                            <span>Ver proyecto</span>
                        </div>
                    </div>
                </div>
            </motion.div> 
        )}
    </>
  )
}

export default ProjectCard


