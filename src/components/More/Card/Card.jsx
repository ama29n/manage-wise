import styles from "./Card.module.css";

const Card = ({ icon, heading, text }) => {
  return (
    <div className={styles.box}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Card;
