import styles from "./FAQInfo.module.css";
import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const FAQInfo = ({ question, answer }) => {
  const [view, setView] = useState(false);
  const clickHandler = () => {
    setView((state) => !state);
  };
  return (
    <div className={styles.box} onClick={clickHandler}>
      <div
        className={view === false ? styles.questionClose : styles.questionOpen}
      >
        <div>{question}</div>
        <div className={styles.symbol}>
          {view === false ? <IoMdAdd /> : <RxCross2 />}
        </div>
      </div>

      <div className={view === true ? styles.answerOpen : styles.answerClose}>
        {answer}
      </div>
    </div>
  );
};

export default FAQInfo;
