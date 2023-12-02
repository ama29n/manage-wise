import styles from "../components/Integrations/Integrations.module.css";
import { HeadingBefore } from "../components/Common/app";
import IntegrationImage from "../assets/features-integration.webp";

import { AnimatePresence } from "framer-motion";

import FramerDiv from "../Framer/FramerDiv";

const headingVariant = {
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
      opacity: { duration: 0.5, delay: 0.2 },
    },
  },
};

const cardVariant = {
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
      opacity: { duration: 0.5, delay: 0.2 },
    },
  },
};

function Integrations() {
  return (
    <AnimatePresence>
      <div className={styles.box}>
        <HeadingBefore text="Integrations" emoji="🛠️" />

        <FramerDiv variants={headingVariant}>
          <div className={styles.heading}>
            Enable <span className="between-text-orange">integration</span> with
            other popular tools and platforms
          </div>
        </FramerDiv>

        <div className={styles.text}>
          Seamlessly connect and amplify your workflow by enabling integration
          with a diverse array of widely-used tools and platforms.
        </div>

        <FramerDiv variants={cardVariant}>
          <div className={styles.image}>
            <img src={IntegrationImage} alt="integration" />
          </div>
        </FramerDiv>
      </div>
    </AnimatePresence>
  );
}

export default Integrations;
