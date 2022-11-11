import React from "react";
import styles from "./styles.module.css";
import AllSizes from "./AllSizes";
const Size = () => {
  return (
    <div className={styles.Size}>
      <span>SIZE</span>
      <div className={styles.SizeH}>
        
        <AllSizes/>
  
        <span>Size Guidelines</span>
      </div>
      <div>
        <span>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</span>
      </div>
    </div>
  );
};

export default Size;
