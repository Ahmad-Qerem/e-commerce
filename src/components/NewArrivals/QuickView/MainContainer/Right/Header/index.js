import React from "react";
import styles from "./styles.module.css";
import { Rating } from "react-simple-star-rating";
const Header = ({ rating, price, title }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderTitle}>{title}</div>
      <div className={styles.Price}>
        <span>SGD {price}</span>
        <div>
          <Rating
            fillColor={"#FF6008"}
            allowFraction={true}
            initialValue={rating}
            readonly={true}
          />
          {rating} of 5
        </div>
      </div>
    </div>
  );
};

export default Header;
