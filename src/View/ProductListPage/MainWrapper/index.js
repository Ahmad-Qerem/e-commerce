import styles from "./styles.module.css";
import React from "react";
import FilterSide from "./FilterSide";
import { useState } from "react";
import QuickView from "../../../components/NewArrivals/QuickView";
import Card from "../../../components/NewArrivals/Card";
import { useEffect } from "react";
import axios from "axios";
/* import Data from "../../Data"; */

const MainWrapper = ({ CurrentCat, Selected, onClick }) => {
  const [Data, SetData] = useState(null);
  const GetData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((Response) => {
        console.log(Response);
        SetData(Response.data.products);
      });
  };
  
  const FilterdData = Data?.products?.filter(
    (item) => item.category === CurrentCat
  );
  const OrderdData = FilterdData?.sort((a, b) => {
    switch (Selected) {
      case "Price":
        return parseFloat(a.price) - parseFloat(b.price);
        break;
      case "Rating":
        return parseFloat(a.rating) - parseFloat(b.rating);
        break;
      case "Stock":
        return parseFloat(a.stock) - parseFloat(b.stock);
        break;
      case "Top":
        return parseFloat(a.rating) - parseFloat(b.rating);
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

  useEffect(() => GetData(), []);
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
          {FilterdData && FilterdData.map((item, index) => {
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

export { MainWrapper };
