import styles from "../components/More/More.module.css";
import { HeadingBefore } from "../components/Common/app";
import { Card } from "../components/More/app";
import { BsFillPhoneFill } from "react-icons/bs";
import { TbBellFilled } from "react-icons/tb";
import { FaFire } from "react-icons/fa";

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

const More = () => {
  return (
    <AnimatePresence>
      <div className={styles.box}>
        <div className={styles.data}>
          <HeadingBefore text="AND MORE..." emoji="🤩" />

          <FramerDiv variants={headingVariant}>
            <p className={styles.heading}>
              Explore an array of features that elevate your{" "}
              <span className="between-text-orange">Productivity</span> to new
              heights
            </p>
          </FramerDiv>

          <div className={styles.subHeading}>
            Discover the tools that will revolutionize the way you manage and
            optimize your operations
          </div>

          <div className={styles.cardGroup}>
            <FramerDiv variants={cardVariant1}>
              <Card
                icon={<BsFillPhoneFill />}
                heading="Cross-Platform Compatibility"
                text="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
              />
            </FramerDiv>
            <FramerDiv variants={cardVariant2}>
              <Card
                icon={<TbBellFilled />}
                heading="Stay Informed with Essential Notifications"
                text="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
              />
            </FramerDiv>
            <FramerDiv variants={cardVariant3}>
              <Card
                icon={<FaFire />}
                heading="Secure Data Encryption at all times"
                text="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
              />
            </FramerDiv>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default More;
