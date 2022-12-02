import React from "react";
import styles from "./styles.module.css";
import BTN from "../../../BTN";
import Left from "./Left";
import Right from "./Right";
const  MainContainer=({ DataCard })=> {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.TopDiv}>
        {console.log(DataCard)}
        <Left Images={DataCard.images} thumbnail={DataCard.thumbnail}/>
        <Right DataCard={DataCard}/>

      </div>
      <div className={styles.Button}>
        <BTN Text={"View Full product Details"}/>
      </div> 
    </div>
  );
}

export default MainContainer;
