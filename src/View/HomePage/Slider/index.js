import styles from "./styles.module.css";
import React from "react";
import { useState } from "react";
const Slider = () => {
  const [index, SetIndex] = useState(0);
  const Images = ["./images/SlideImage1.png", "./images/image_17.png", "./images/image_48.png","./images/image_47.png","./images/image_7.png"];
  const HandelClick = (Direction) => {
    if (Direction === 1) {
        console.log(index);
        SetIndex((index+1)%5);
    } else {
        let temp = (index-1)%5;
        SetIndex(temp);
      console.log(index);
    }
  };
  return (
    <div className={styles.SlidesContainer}>

      <img src={Images[index<0?-1*index:index]} className={styles.BackGroundImage} />
      <div
        className={`${styles.LeftArrow} ${styles.arrowHover}`}
        onClick={() => HandelClick(0)}
      >
        <div className={`${styles.arrow} ${styles.left}`}></div>
      </div>
      <div
        className={`${styles.RightArrow} ${styles.arrowHover}`}
        onClick={() => HandelClick(1)}
      >
        <div className={`${styles.arrow} ${styles.right}`}></div>
      </div>

      <div className={styles.content}>
        <span className={styles.MySpan}>
          Perfume Tips <br></br>Tricks
        </span>
        <button className={styles.MyButton}>shop now</button>
      </div>
    </div>
  );
};
export { Slider };
