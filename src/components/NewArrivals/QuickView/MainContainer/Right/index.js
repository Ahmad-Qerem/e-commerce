import React from "react";
import AddToCart from "./AddToCart";
import Description from "./Description";
import Description2 from "./Description2";
import Header from "./Header";
import Size from "./Size";
import styles from "./styles.module.css";
const Right=({DataCard})=> {
  return (
    <div className={styles.Right}>
        <Header rating={DataCard.rating} price={DataCard.price} title={DataCard.title} />
        <Description description={DataCard.description}/>
        <Description2 stock={DataCard.stock} brand={DataCard.brand} category={DataCard.category} />
        <Size/>
        <AddToCart/>
    </div>
  );
}

export default Right;
