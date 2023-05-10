import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from '../../styles/Steper.module.scss';
import Image from 'next/image';
import {motion} from 'framer-motion';

export default function VerticalLinearStepper({data, active}) {

  const verticalEffectVariants = {
    opened: {
        opacity: 1,
        x: 0
    },
    closed: {
        opacity: 0, 
        x: -700
    },
}

  return (
    <Box className={styles.vertical_steper_container}>
      <Stepper activeStep={10} orientation="vertical">
        {data.map((step, key) => (
          <Step key={key} className={ key === data.length - 1 ? `${styles.vertical_step} ${styles.step_no_border_v}` : styles.vertical_step}>
            <motion.div
               initial={active}
               variants={verticalEffectVariants}
               animate= {active ? "opened" : "closed"}
               transition={{delay: `.${key+1}`, duration: `.${key+2}`,  type: 'spring', stiffness: 100}}
            >
              
              <StepLabel

              >
                <div className={styles.vertical_card_step}>
                  <div className={styles.steper_text_container}>
                    <h1 className={styles.step_title} >{step.title}</h1>
                    <p className={styles.step_p_v} >{step.text}</p>
                  </div>
                  <div className={styles.card_image_container}>
                    <Image src={step.image} width={100} height={100} alt={`${step.title} - Imagen`} className={styles.image}/>
                  </div>
                </div>
              </StepLabel>
            </motion.div>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
