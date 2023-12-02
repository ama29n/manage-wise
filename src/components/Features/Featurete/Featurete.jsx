import styles from "./Featurete.module.css";
import TaskManagementImage from "../../../assets/features-task_management.webp";

import { motion, AnimatePresence } from "framer-motion";

const variant1 = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.4,
      opacity: { duration: 0.5, delay: 0.4 },
    },
  },
};

const variant2 = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.6,
      opacity: { duration: 0.5, delay: 0.6 },
    },
  },
};

const Featurete = () => {
  return (
    <AnimatePresence>
      <div className={styles.box}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variant1}
        >
          <div className={styles.leftBox}>
            <div className={styles.emoji}>⭐️</div>
            <p>
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={variant2}
        >
          <div className={styles.rightBox}>
            <div className={styles.image}>
              <img src={TaskManagementImage} alt="card" />
            </div>

            <div className={styles.content}>
              <p className={styles.heading}>Smart Task Management</p>
              <p className={styles.text}>
                Say goodbye to chaos with our smart task management system
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Featurete;
