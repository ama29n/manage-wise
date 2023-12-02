import styles from "../components/Testimonials/Testimonials.module.css";
import { HeadingBefore } from "../components/Common/app";

import { AnimatePresence } from "framer-motion";

import FramerDiv from "../Framer/FramerDiv";

function Testimonials() {
  return (
    <AnimatePresence>
      <div className={styles.box} id="testimonials">
        <div className={styles.data}>
          <HeadingBefore emoji="❤️" text="Testimonials" />

          <FramerDiv variants={headingVariant}>
            <div className={styles.heading}>
              Hear from our{" "}
              <span className="between-text-orange">Satisfied</span> clients
            </div>
          </FramerDiv>

          <div className={styles.text}>
            Discover why our clients love working with us. Read their
            testimonials and learn how we has helped businesses.
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Testimonials;

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
