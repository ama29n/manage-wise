import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ text }) => {
  return <div className={styles.btn}>{text}</div>;
};

export default PrimaryButton;
