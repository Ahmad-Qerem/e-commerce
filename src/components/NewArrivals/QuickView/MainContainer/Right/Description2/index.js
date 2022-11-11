import React from "react";
import styles from "./styles.module.css";
const Description2 = ({ stock, brand, category }) => {
  return (
    <div className={styles.Description2}>
      <div className={styles.DescriptionItem}>
        <div className={styles.DescriptionTitle}>Stock</div>
        <span>{stock}</span>
      </div>
      <div className={styles.DescriptionItem}>
        <div className={styles.DescriptionTitle}>Brand</div>
        <span>{brand}</span>
      </div>
      <div className={styles.DescriptionItem}>
        <div className={styles.DescriptionTitle}>Category</div>
        <span>{category}</span>
      </div>
    </div>
  );
};

export default Description2;
