import styles from "../components/Pricing/Pricing.module.css";
import { HeadingBefore } from "../components/Common/app";
import { Card } from "../components/Pricing/app";

import { AnimatePresence } from "framer-motion";

import FramerDiv from "../Framer/FramerDiv";

function Pricing() {
  return (
    <AnimatePresence>
      <div className={styles.box} id="pricing">
        <HeadingBefore emoji="💲" text="Pricing" />

        <FramerDiv variants={headingVariant}>
          <div className={styles.heading}>
            Select your ideal{" "}
            <span className="between-text-orange">Pricing</span> plan
          </div>
        </FramerDiv>

        <div className={styles.subHeading}>
          At Manage Wise, we believe in providing you with pricing plans that
          adapt to your unique needs.
        </div>

        <div className={styles.cardGroup}>
          <FramerDiv variants={cardVariant1}>
            <Card 
              theme="light" 
              type="free" 
              price="0" 
              features={features1} 
            />
          </FramerDiv>
          <FramerDiv variants={cardVariant3}>
            <Card
              theme="dark"
              type="standard"
              price="25"
              features={features2}
            />
          </FramerDiv>
          <FramerDiv variants={cardVariant2}>
            <Card
              theme="light"
              type="business"
              price="42"
              features={features3}
            />
          </FramerDiv>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Pricing;

const features1 = [
  "Access to all basic features",
  "Reporting and analytics",
  "Up to 5 individual users",
  "Chat and email support",
];

const features2 = [
  "Access to all basic features",
  "Reporting and analytics",
  "Up to 5 individual users",
  "Chat and email support",
  "3+ integrations",
  "Account performance reporting",
];

const features3 = [
  "Access to all basic features",
  "Reporting and analytics",
  "Up to 5 individual users",
  "Chat and email support",
  "3+ integrations",
];

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
