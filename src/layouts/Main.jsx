import styles from "../components/Main/Main.module.css";
import {
  HeadingBefore,
  PrimaryButton,
  SecondaryButton,
} from "../components/Common/app";
import ApplicationImage from "../assets/main-application.webp";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FramerDiv from "../Framer/FramerDiv";

function Main() {
  // Logic to get screen width
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  // Method to return scale factor
  const getScaleFactor = () => {
    if(screenSize.width > 1400) {
      return 7.5;
    } else if(screenSize.width > 1100) {
      return 6;
    } else if(screenSize.width > 950) {
      return 5;
    } else if(screenSize.width > 750) {
      return 4;
    } else if(screenSize.width > 550) {
      return 3;
    } else {
      return 2;
    }
  }

  // Logic to add animation
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleFactor = getScaleFactor() + scrollY / 3000;

  return (
    <AnimatePresence>
      <div className={styles.box}>
        <FramerDiv variants={headingVariant}>
          <HeadingBefore text="Welcome to manage Wise!" emoji="👋" />
        </FramerDiv>

        <FramerDiv variants={headingVariant}>
          <div className={styles.heading}>
            <p>
              Empower your business with{" "}
              <span className="between-text-orange">Strategic</span> insights
            </p>
          </div>
        </FramerDiv>

        <FramerDiv variants={headingVariant}>
          <div className={styles.subHeading}>
            <p>
              Powerful management platform designed to streamline your business
              operations, boost productivity, and drive success
            </p>
          </div>
        </FramerDiv>

        <FramerDiv variants={buttonVariant}>
          <div className={styles.buttonGroup}>
            <PrimaryButton text="Get Started" />
            <SecondaryButton text="Watch Demo" />
          </div>
        </FramerDiv>

        <motion.div
          style={{
            width: "100%", // Initial width
            height: "auto", // Initial height
            backgroundColor: "none",
          }}
          animate={{
            width: `${200 * scaleFactor}px`, // Adjust the scale factor based on your preference
            height: `auto`, // Adjust the scale factor based on your preference
          }}
        >
          <div className={styles.application}>
            <img src={ApplicationImage} alt="application" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Main;

const buttonVariant = {
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

const headingVariant = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
      delay: 0.5,
      damping: 5,
      opacity: { duration: 0.5, delay: 0.2 },
    },
  },
};
