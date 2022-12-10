import React from "react";
import styles from "./styles.module.css";
import ImageComponent from "./ImageComponent";
import { useState } from "react";
const Left = ({ image }) => {
  return (
    <div className={styles.Left}>
      <img className={styles.Image} src={image} />
    </div>
  );
};

export default Left;
