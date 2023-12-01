import styles from "./HeadingBefore.module.css";

const HeadingBefore = ({ text, emoji }) => {
  return (
    <div className={styles.box}>
        <p>{emoji}</p>
        <p>{text}</p>
    </div>
  )
}

export default HeadingBefore