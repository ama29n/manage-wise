import styles from "./DontMissOut.module.css";
import { HeadingBefore, PrimaryButton } from "../../Common/app";
import Image from "../../../assets/footer-potential.png";

const DontMissOut = () => {
  return (
    <div className={styles.box}>
      <div className={styles.leftBox}>
        <HeadingBefore emoji="💁‍♂️" text="Don't miss out" />
        <div className={styles.heading}>
          Unleash your <span className="between-text-orange">Potential</span>{" "}
          with us
        </div>
        <div className={styles.text}>
          Join our community of ambitious individuals and organizations eager to
          make a difference.
        </div>
        <PrimaryButton text="Try Out Now" />
      </div>
      <div className={styles.rightBox}>
        <div className={styles.image}>
          <img src={Image} alt="potential" />
        </div>
      </div>
    </div>
  );
};

export default DontMissOut;
