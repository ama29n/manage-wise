import styles from "./Featurete.module.css";
import TaskManagementImage from "../../../assets/features-task_management.webp";

const Featurete = () => {
  return (
    <div className={styles.box}>
      <div className={styles.leftBox}>
        <div className={styles.emoji}>⭐️</div>
        <p>
          Boost productivity and streamline workflow with us. Enjoy our
          intuitive interface and robust features.
        </p>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.image}>
          <img src={TaskManagementImage} alt="card" />
        </div>

        <div className={styles.content}>
          <p className={styles.heading}>Smart Task Management</p>
          <p className={styles.text}>
            Say goodbye to chaos with our smart task management system
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featurete;
