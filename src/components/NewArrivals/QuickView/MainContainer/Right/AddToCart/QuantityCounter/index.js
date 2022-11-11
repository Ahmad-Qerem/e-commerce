import styles from "./styles.module.css";
import React, { useState } from "react";

const  QuantityCounter=()=> {
    const [counter,setCounter]= useState(1);
    const HandelClick=(WhatToDo)=>{
         if (WhatToDo =="+"){
            setCounter(counter+1);
        }else {
            if (counter>1){
                setCounter(counter-1);
            }
        } 
    } 
  return (
      <div className={styles.QuantityCounter}>
        <div className={styles.QuantityCounterMark}  onClick={()=>HandelClick('-')}>-</div>
        <div className={styles.QuantityCounterText}>{counter}</div>
        <div className={styles.QuantityCounterMark} onClick={()=>HandelClick('+')}>+</div>
      </div>
  );
}

export default QuantityCounter;
