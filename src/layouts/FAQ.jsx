import styles from "../components/FAQ/FAQ.module.css";
import { HeadingBefore } from "../components/Common/app";

function FAQ() {
  return (
    <div className={styles.box} id="faq">
      <HeadingBefore emoji="🙋" text="FAQ" />
    </div>
  )
}

export default FAQ