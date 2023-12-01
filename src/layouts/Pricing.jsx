import styles from "../components/Pricing/Pricing.module.css";
import { HeadingBefore } from "../components/Common/app";
import { Card } from "../components/Pricing/app";

function Pricing() {
  return (
    <div className={styles.box} id="pricing">
      <HeadingBefore emoji="💲" text="Pricing" />
      <div className={styles.heading}>
        Select your ideal <span className="between-text-orange">Pricing</span>{" "}
        plan
      </div>

      <div className={styles.subHeading}>
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </div>

      <div className={styles.cardGroup}>
        <Card theme="light" type="free" price="0" features={features1} />
        <Card theme="dark" type="standard" price="25" features={features2} />
        <Card theme="light" type="business" price="42" features={features3} />
      </div>
    </div>
  );
}

export default Pricing;

const features1 = [
  "Access to all basic features",
  "Reporting and analytics",
  "Up to 5 individual users",
  "Chat and email support",
];

const features2 = [
  "Access to all basic features",
  "Reporting and analytics",
  "Up to 5 individual users",
  "Chat and email support",
  "3+ integrations",
  "Account performance reporting",
];

const features3 = [
  "Access to all basic features",
  "Reporting and analytics",
  "Up to 5 individual users",
  "Chat and email support",
  "3+ integrations",
];
