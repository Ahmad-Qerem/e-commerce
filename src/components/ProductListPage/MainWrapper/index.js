import styles from "./styles.module.css";
import React from "react";
import FilterSide from "./FilterSide";
import { useState } from "react";
import QuickView from "../../NewArrivals/QuickView";
import Card from "../../NewArrivals/Card";
import Data from "../../Data";
const MainWrapper = ({ CurrentCat, Selected, onClick }) => {
  const FilterdData = Data.products.filter(
    (item) => item.category === CurrentCat
  );
  const OrderdData = FilterdData.sort((a, b) => {
    switch (Selected) {
      case "Price":return parseFloat(a.price) - parseFloat(b.price);
        break;
      case "Rating":return parseFloat(a.rating) - parseFloat(b.rating);
        break;
      case "Stock":return parseFloat(a.stock) - parseFloat(b.stock);
        break;
      case "Top":return parseFloat(a.rating) - parseFloat(b.rating);
        break;

      default:
        break;
    }

    
  });
  const [QuickViewFlag, setQVFlag] = useState(false);
  const [Index, SetIndex] = useState(0);
  const HandelButtonClick = (e, index) => {
    SetIndex(index);
    setQVFlag(!QuickViewFlag);
  };
  return (
    <>
      {QuickViewFlag && (
        <QuickView
          DataCard={FilterdData[Index]}
          onClickClose={HandelButtonClick}
        />
      )}
      <div className={styles.MainWrapper}>
        <FilterSide Selected={Selected} onClick={onClick} />
        <div className={styles.DataSide}>
          {FilterdData.map((item, index) => {
            return (
              <Card
                onClick={HandelButtonClick}
                {...item}
                New={!Math.round(Math.random())}
                index1={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainWrapper;
