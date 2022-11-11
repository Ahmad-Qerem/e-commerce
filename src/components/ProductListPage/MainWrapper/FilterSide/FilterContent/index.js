import styles from "./styles.module.css";
import React from "react";
import CategoryComponent from "./CategoryComponent";
import Data from "../../../../Data";
const AllCats=Data.AllCats;
const FilterContent = ({HandelArrowClick,onClick}) => {


  return (
    <div className={styles.MainWrapper} >
      {AllCats.length && AllCats.map((item,index)=>{
        return <CategoryComponent index={index} title={item} onClick={()=>onClick(item)}/>
      })} 
    </div>
  );
};

export default FilterContent;
