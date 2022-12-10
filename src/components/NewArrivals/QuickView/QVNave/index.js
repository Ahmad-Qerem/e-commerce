import React from "react";
import styles from "./styles.module.css";
function QVNave({ fun, title }) {
  return (
    <div className={styles.Nave}>
      <div className={styles.Title}>{title}</div>
    </div>
  );
}

export default QVNave;
