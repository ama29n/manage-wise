import styles from "../components/Features/Features.module.css";
import { HeadingBefore } from "../components/Common/app";
import { Featurete, Card } from "../components/Features/app";
import CardImage1 from "../assets/features-card-flexible_scheduling.webp";
import CardImage2 from "../assets/features-card-easy_communication.webp";
import CardImage3 from "../assets/features-card-analytics.webp";

function Features() {
  return (
    <div className={styles.box} id="features">
      <HeadingBefore text="PREMIER FEATURES" emoji="🔥" />

      <p className={styles.heading}>
        Discover our product's{" "}
        <span className="between-text-orange">Capabilities</span>
      </p>

      <div className={styles.subHeading}>
        <p>
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </p>
      </div>

      <Featurete />

      <div className={styles.cardGroup}>
        <Card
          image={CardImage1}
          heading="Flexible Scheduling"
          text="Stay productive with our flexible scheduling system"
        />
        <Card
          image={CardImage2}
          heading="Easy Communication"
          text="Collaborate seamlessly with your team in real-time"
        />
        <Card
          image={CardImage3}
          heading="Analytics"
          text="Gain valuable insights with our advanced analytics feature"
        />
      </div>
    </div>
  );
}

export default Features;
