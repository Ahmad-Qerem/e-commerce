import React from "react";
import styles from "./styles.module.css";
import BTN from "../../../../Card/CardHover/BTN";
const AddToCart = () => {
  return (
    <div className={styles.AddToCart}>
      <span>Quantity</span>
      <div className={styles.AddToCartWrapper}>
        <div className={styles.QuantityCounter}>
          <div className={styles.QuantityCounterMark}>-</div>
          <div className={styles.QuantityCounterText}>{"1"}</div>
          <div className={styles.QuantityCounterMark}>+</div>
        </div>
        <div>
          <BTN Text={"ADD TO CART"} />
        </div>
        <div className={styles.QuantityWishList}>
          <img src="./images/questions.png" height={"40px"} />
          <span>add to wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
