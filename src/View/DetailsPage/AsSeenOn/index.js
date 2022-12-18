import React from "react";
import styles from "./styles.module.css";
const AsSeenOn = ({ Title }) => {
  const ImageArray = [
    "/images/image_20.png",
    "/images/image_54.png",
    "/images/image_1.png",
    "/images/image_33.png",
  ];
  return (
    <div className={styles.MainWrapper}>
      <h1>{Title}</h1>
      <div className={styles.Images}>
        {ImageArray.map((item) => (
          <img
            src={item}
            alt="Images Seen on Instagram "
            className={styles.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default AsSeenOn;
