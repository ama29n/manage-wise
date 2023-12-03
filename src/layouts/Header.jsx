import styles from "../components/Header/Header.module.css";
import { SecondaryButton } from "../components/Common/app";
import Logo from "../assets/logo.webp";

const Header = () => {
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

      <div className={styles.button}>
        <SecondaryButton text="Buy Template" />
      </div>
    </div>
  );
};

export default Header;
