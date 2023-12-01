import styles from "../components/Testimonials/Testimonials.module.css";
import { HeadingBefore } from "../components/Common/app";

function Testimonials() {
  return (
    <div className={styles.box} id="testimonials">
      <div className={styles.data}>
        <HeadingBefore emoji="❤️" text="Testimonials" />
        <div className={styles.heading}>
          Hear from our <span className="between-text-orange">Satisfied</span>{" "}
          clients
        </div>

        <div className={styles.text}>
          Discover why our clients love working with us. Read their testimonials
          and learn how we has helped businesses.
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
