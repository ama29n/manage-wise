import styles from "../components/FAQ/FAQ.module.css";
import { HeadingBefore } from "../components/Common/app";
import { FAQInfo } from "../components/FAQ/app";

function FAQ() {
  return (
    <div className={styles.box} id="faq">
      <div className={styles.leftBox}>
        <HeadingBefore emoji="🙋" text="FAQ" />
        <div className={styles.heading}>
          Need <span className="between-text-orange">Answers?</span>
        </div>
        <div className={styles.text}>
          Check out our most commonly asked questions below to find the
          information you need.
        </div>
      </div>

      <div className={styles.rightBox}>
        {FAQs.map((obj) => {
          return (
            <FAQInfo key={obj.id} question={obj.question} answer={obj.answer} />
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;

const FAQs = [
  {
    id: 1,
    question: "What is Manage Wise and what does it offer?",
    answer:
      "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
  },
  {
    id: 2,
    question:
      "Is Manage Wise suitable for small businesses and larger enterprises alike?",
    answer:
      "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
  },
  {
    id: 3,
    question: "Can I access Manage Wise from different devices and platforms?",
    answer:
      "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
  },
  {
    id: 4,
    question: "What kind of support options do you offer to users?",
    answer:
      "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
  },
  {
    id: 5,
    question: "How secure is the data stored within Manage Wise?",
    answer:
      "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
  },
];
