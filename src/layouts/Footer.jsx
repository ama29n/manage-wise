import styles from "../components/Footer/Footer.module.css";
import { DontMissOut, FooterNavbar } from "../components/Footer/app";

import FramerDiv from "../Framer/FramerDiv";

function Footer() {
  return (
    <div className={styles.box}>
      <FramerDiv variants={variant}>
        <DontMissOut />
      </FramerDiv>
      <FooterNavbar />
    </div>
  );
}

export default Footer;

const variant = {
  offscreen: {
    rotateX: 60, // Rotate the div in 3D when offscreen
    opacity: 0, // Start with opacity set to 0
  },
  onscreen: {
    rotateX: 0, // No rotation when on screen
    opacity: 1, // Fade in the div
    perspective: "300px",
    transition: {
      type: "tween",
      duration: 0.8,
      delay: 0.2, // Add a delay for a staggered effect
    },
  },
};
