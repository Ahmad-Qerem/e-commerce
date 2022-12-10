import React from "react";
import styles from "./styles.module.css";
const ImageTitled = ({ Data }) => {
  return (
    <div className={styles.MainWrapper}>
      <img className={styles.Image} src={Data.image} />
      <h6>{Data.title}</h6>
    </div>
  );
};

export default ImageTitled;
