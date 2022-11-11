import React from "react";
import styles from "./styles.module.css";
function QVNave({fun,title}) {
  return (
    <div className={styles.Nave}>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Close} onClick={fun}>
        <div className={`${styles.arrow} ${styles.right}`}></div>
        <div className={`${styles.arrow} ${styles.left}`}></div>
      </div>
    </div>
  );
}

export default QVNave;
