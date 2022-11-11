import React from "react";
import styles from "./styles.module.css";
const SearchBar = ({Options,onChange}) => {
  return (
    <div className={styles.MainWrapper}>
      <span>Women</span>
      <div className={styles.RightText}>
        Sort by &nbsp;
        <select name="filterBy" id="Types" onChange={(e)=>onChange(e)}>
          {Options.map((item)=>{
            return <option value={item}>{item}</option>
          })}

        </select>
      </div>
    </div>
  );
};

export default SearchBar;