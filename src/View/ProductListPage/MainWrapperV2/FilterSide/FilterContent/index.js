import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import CategoryComponent from "./CategoryComponent";
import axios from "axios";
const FilterContent = ({HandelArrowClick,onClick}) => {
  const [AllCats,SetCats]= useState(null);
  const GetData = ()=>{
    axios.get("https://dummyjson.com/products/categories").then((Response)=>{
      console.log(Response);
      SetCats(Response.data);
    })}
    useEffect(GetData,[]);

  return (
    <div className={styles.MainWrapper} >
      
      {AllCats && AllCats.map((item,index)=>{
        return <CategoryComponent index={index} title={item} onClick={()=>onClick(item)}/>
      })} 
    </div>
  );
};

export default FilterContent;
