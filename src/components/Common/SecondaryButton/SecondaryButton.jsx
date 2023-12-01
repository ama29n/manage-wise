import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default SecondaryButton;
