import React from "react";
import styles from "./styles.module.css";
import ImageTitled from "./ImageTitled";
const ThreeImages = () => {
  const Data = [
    {
      image: "./images/image_67.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "./images/image_27.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "./images/image_63.png",
      title: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.ThreeImagesWrapper}>
        {Data.map((item) => {
          return <ImageTitled Data={item} />;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default ThreeImages;
