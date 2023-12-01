import styles from "./Card.module.css";
import { PrimaryButton, SecondaryButton } from "../../Common/app";

const Card = ({ theme, type, price, features }) => {
  return (
    <div className={theme === "light" ? styles.lightBox : styles.darkBox}>
      <div className={styles.type}>{type}</div>

      <div className={styles.price}>
        <span className={styles.amount}>{`$${price}`}</span>/ month
      </div>

      <ul className={styles.list}>
        {features.map((feature, idx) => {
          return <li key={idx}>{feature}</li>;
        })}
      </ul>

      {theme === "dark" ? (
        <PrimaryButton text="Get Started" />
      ) : (
        <SecondaryButton text="Get Started" />
      )}
    </div>
  );
};

export default Card;
