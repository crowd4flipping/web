import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import styles from "../../styles/SimpleSteper.module.scss";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function HorizontalLabelPositionBelowStepper({ data }) {
  const effectVariants = {
    opened: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -700,
    },
  };

  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={styles.steper_container}>
      {data.map((item, key) => (
        <motion.div
          initial={active}
          variants={effectVariants}
          animate={active ? "opened" : "closed"}
          transition={{
            delay: `.${key + 3}`,
            duration: `.${key + 3}`,
            type: "spring",
            stiffness: 100,
          }}
          key={key}
          className={styles.step_container}
        >
          <BsFillCheckCircleFill
            className={item.finalized ? styles.check_succes : styles.check}
          />
          <span
            className={
              item.finalized
                ? `${styles.step_description} ${styles.description_success}`
                : `${styles.step_description}`
            }
          >
            {item.description}{" "}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
