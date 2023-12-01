import styles from "../components/More/More.module.css";
import { HeadingBefore } from "../components/Common/app";
import { Card } from "../components/More/app";
import { BsFillPhoneFill } from "react-icons/bs";
import { TbBellFilled } from "react-icons/tb";
import { FaFire } from "react-icons/fa";

const More = () => {
  return (
    <div className={styles.box}>
      <div className={styles.data}>
        <HeadingBefore text="AND MORE..." emoji="🤩" />

        <p className={styles.heading}>
          Explore an array of features that elevate your{" "}
          <span className="between-text-orange">Productivity</span> to new
          heights
        </p>

        <div className={styles.subHeading}>
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </div>

        <div className={styles.cardGroup}>
          <Card
            icon={<BsFillPhoneFill />}
            heading="Cross-Platform Compatibility"
            text="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
          />
          <Card
            icon={<TbBellFilled />}
            heading="Stay Informed with Essential Notifications"
            text="Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
          />
          <Card
            icon={<FaFire />}
            heading="Secure Data Encryption at all times"
            text="Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
          />
        </div>
      </div>
    </div>
  );
};

export default More;
