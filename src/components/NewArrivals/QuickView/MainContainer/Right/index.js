import React from "react";
import AddToCartWrapper from "./AddToCartWrapper";
import Description from "./Description";
import Description2 from "./Description2";
import Header from "./Header";
import Size from "./Size";
import styles from "./styles.module.css";
const Right = ({ DataCard, handleClose }) => {
  return (
    <div className={styles.Right}>
      <Header
        rating={DataCard.rating.rate}
        price={DataCard.price}
        title={DataCard.title}
      />
      <Description description={DataCard.description} />
      <Description2 category={DataCard.category} />
      <Size />
      <AddToCartWrapper ProductId={DataCard.id} handleClose={handleClose} />
    </div>
  );
};

export default Right;
