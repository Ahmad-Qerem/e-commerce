import React from "react";
import styles from "./styles.module.css";
const Description = ({ description }) => {
  return (
    <div className={styles.Description}>
      <div>
        Description
        <br />
      </div>
      {description}
      <br />
      <span>SEE MORE</span>
    </div>
  );
};

export default Description;
