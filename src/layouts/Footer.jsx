import styles from "../components/Footer/Footer.module.css";
import { DontMissOut, FooterNavbar } from "../components/Footer/app";

function Footer() {
  return (
    <div className={styles.box}>
      <DontMissOut />
      <FooterNavbar />
    </div>
  )
}

export default Footer