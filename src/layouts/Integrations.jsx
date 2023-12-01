import styles from "../components/Integrations/Integrations.module.css";
import { HeadingBefore } from "../components/Common/app";
import IntegrationImage from "../assets/features-integration.webp";

function Integrations() {
  return (
    <div className={styles.box}>
      <HeadingBefore text="Integrations" emoji="🛠️" />

      <div className={styles.heading}>
        Enable <span className="between-text-orange">integration</span> with
        other popular tools and platforms
      </div>

      <div className={styles.text}>
        Seamlessly connect and amplify your workflow by enabling integration
        with a diverse array of widely-used tools and platforms.
      </div>

      <div className={styles.image}>
        <img src={IntegrationImage} alt="integration" />
      </div>
    </div>
  );
}

export default Integrations;
