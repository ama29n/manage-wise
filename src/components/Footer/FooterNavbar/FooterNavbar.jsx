import styles from "./FooterNavbar.module.css";
import Logo from "../../../assets/logo.webp";

const FooterNavbar = () => {
  return (
    <div className={styles.box}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>

      <ul className={styles.list}>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavbar;
