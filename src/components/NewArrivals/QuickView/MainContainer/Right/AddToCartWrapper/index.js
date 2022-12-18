import React, { useState } from "react";
import styles from "./styles.module.css";
import BTN from "../../../../../BTN";
import {
  AddToCart,
  RemoveFromCart,
} from "../../../../../../Redux/Slice/CartSlice.js";
import { useDispatch, useSelector } from "react-redux";
const AddToCartWrapper = ({ ProductId, handleClose }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const HandelClick = (WhatToDo) => {
    if (WhatToDo == "+") {
      setCounter(counter + 1);
    } else {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  };
  const HandelAddToCart = () => {
    dispatch(AddToCart({ ProductId, counter }));
    handleClose();
  };
  return (
    <div className={styles.AddToCart}>
      <span>Quantity</span>
      <div className={styles.AddToCartWrapper}>
        <div className={styles.QuantityCounter}>
          <div
            className={styles.QuantityCounterMark}
            onClick={() => HandelClick("-")}
          >
            -
          </div>
          <div className={styles.QuantityCounterText}>{counter}</div>
          <div
            className={styles.QuantityCounterMark}
            onClick={() => HandelClick("+")}
          >
            +
          </div>
        </div>

        <div onClick={HandelAddToCart}>
          <BTN Text={"ADD TO CART"} />
        </div>
        <div className={styles.QuantityWishList}>
          <img src="/images/questions.png" height={"40px"} />
          <span>add to wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default AddToCartWrapper;
