import styles from "../components/Main/Main.module.css";
import { HeadingBefore, PrimaryButton, SecondaryButton } from "../components/Common/app";
import ApplicationImage from "../assets/main-application.webp";

function Main() {
  return (
    <div className={styles.box}>
      <HeadingBefore text="Welcome to manage Wise!" emoji="👋" />

      <div className={styles.heading}>
        <p>
          Empower your business with{" "}
          <span className="between-text-orange">Strategic</span> insights
        </p>
      </div>

      <div className={styles.subHeading}>
        <p>
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </p>
      </div>

      <div className={styles.buttonGroup}>
        <PrimaryButton text="Get Started" />
        <SecondaryButton text="Watch Demo" />
      </div>

      <div className={styles.application}>
        <img src={ApplicationImage} alt="application" />
      </div>

    </div>
  );
}

export default Main;
