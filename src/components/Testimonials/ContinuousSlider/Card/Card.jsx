import styles from "./Card.module.css";
import UserImage from "../../../../assets/user.jpg";

const Card = ({ quote, author, role }) => {
  return (
    <div className={styles.box}>
      <div className={styles.text}>"{quote}"</div>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src={UserImage} alt="author" />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{author}</div>
          <div className={styles.role}>{role}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
