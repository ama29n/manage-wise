import styles from "../components/Features/Features.module.css";
import { HeadingBefore } from "../components/Common/app";
import { Featurete, Card } from "../components/Features/app";
import CardImage1 from "../assets/features-card-flexible_scheduling.webp";
import CardImage2 from "../assets/features-card-easy_communication.webp";
import CardImage3 from "../assets/features-card-analytics.webp";

import { AnimatePresence } from "framer-motion";

import FramerDiv from "../Framer/FramerDiv";

function Features() {
  return (
    <AnimatePresence>
      <div className={styles.box} id="features">
        <HeadingBefore text="PREMIER FEATURES" emoji="🔥" />

        <FramerDiv variants={variant}>
          <p className={styles.heading}>
            Discover our product's{" "}
            <span className="between-text-orange">Capabilities</span>
          </p>
        </FramerDiv>

        <div className={styles.subHeading}>
          <p>
            Don't settle for mediocrity - embrace the future of management with
            Manage Wise.
          </p>
        </div>

        <Featurete />

        <div className={styles.cardGroup}>
          <FramerDiv variants={cardVariant1}>
            <Card
              image={CardImage1}
              heading="Flexible Scheduling"
              text="Stay productive with our flexible scheduling system"
            />
          </FramerDiv>
          <FramerDiv variants={cardVariant2}>
            <Card
              image={CardImage2}
              heading="Easy Communication"
              text="Collaborate seamlessly with your team in real-time"
            />
          </FramerDiv>
          <FramerDiv variants={cardVariant3}>
            <Card
              image={CardImage3}
              heading="Analytics"
              text="Gain valuable insights with our advanced analytics feature"
            />
          </FramerDiv>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Features;

const variant = {
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

const cardVariant1 = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      damping: 5,
      duration: 0.8,
      delay: 0.2,
      opacity: { duration: 0.5, delay: 0.2 },
    },
  },
};

const cardVariant2 = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      damping: 5,
      duration: 0.8,
      delay: 0.4,
      opacity: { duration: 0.5, delay: 0.4 },
    },
  },
};

const cardVariant3 = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      damping: 5,
      duration: 0.8,
      delay: 0.6,
      opacity: { duration: 0.5, delay: 0.6 },
    },
  },
};
