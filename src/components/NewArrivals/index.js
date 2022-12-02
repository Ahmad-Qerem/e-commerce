import styles from "./styles.module.css";
import Card from "./Card";
import QuickView from "./QuickView";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const NewArrival = () => {
  const [Data,SetData]=useState(null);
  const GetData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((Response) =>{
        console.log(Response);
        SetData(Response.data.products);
        
    });
  };
  const [QuickViewFlag, setQVFlag] = useState(false);
  const [Index, SetIndex] = useState(0);
  const HandelButtonClick = (e, index) => {
    SetIndex(index);
    setQVFlag(!QuickViewFlag);
  };
  useEffect(()=>{
    GetData();
},[])
  return (
    <>
      {QuickViewFlag && (
        <QuickView DataCard={Data[Index]} onClickClose={HandelButtonClick} />
      )}
      <div className={styles.MainContainer}>
        <h1 className={styles.MyH1}>Featured</h1>

        <div className={styles.MyContainer}>
          {Data && Data.map((item, index) => {
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
export { NewArrival };
