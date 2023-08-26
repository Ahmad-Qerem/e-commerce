import React from "react";
import styles from "./styles.module.css";
const Button = (title, type, image) => {
  return (
    <button>
      <span>{{ title }}</span>
      <img src={image} class={type ? styles.class1 : styles.class2} alt="" />
    </button>
  );
};

export { Button };
