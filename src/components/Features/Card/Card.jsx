import styles from "./Card.module.css";

const Card = ({ image, heading, text }) => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <img src={image} alt="card" />
      </div>

      <div className={styles.content}>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
