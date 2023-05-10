import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HorizontalLabelPositionBelowStepper({data, active}) {

  const effectVariants = {
    opened: {
        opacity: 1,
        y: 0
    },
    closed: {
        opacity: 0, 
        y: 700
    },
}

  return (
    <div 
      className={styles.steps_container}
    >
      {/* <Stepper activeStep={10} alternativeLabel 
      > */}
        {data.map((item, key) => {
            return(
              <div 
                  className={key === data.length - 1 ? `${styles.step} ${styles.step_no_border}` : styles.step}
                  key={key}
              >

                <motion.div
                    initial={active}
                    variants={effectVariants}
                    animate= {active ? "opened" : "closed"}
                    transition={{delay: `.${key+1}`, duration: `.${key+2}`,  type: 'just'}}
                    className={styles.card_step}
                >
                    <div className={styles.card_step_header}>
                        <Image src={item.image} width={80} height={80} alt={item.text} />
                        <h3 className={styles.step_title}> {item.title} </h3>
                    </div>
                    <p className={styles.step_p}> {item.text}</p>
                </motion.div>

              </div>
            )
        })}
     {/*  </Stepper> */}
    </div>
  );
} 