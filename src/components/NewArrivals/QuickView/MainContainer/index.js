import React from "react";
import styles from "./styles.module.css";
import Left from "./Left";
import Right from "./Right";
import BTN from "../../../BTN";
import { Link } from "react-router-dom";
const MainContainer = ({ ActiveBtn, DataCard }) => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.TopDiv}>
        <Left image={DataCard.image} />
        <Right DataCard={DataCard} />
      </div>
      <div className={styles.Button}>
        {ActiveBtn && (
          <Link to={"/DetailsPage"}>
            <BTN Text={"View Full Product"} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
