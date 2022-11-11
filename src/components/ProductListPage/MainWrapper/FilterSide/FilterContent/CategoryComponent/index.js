import styles from './styles.module.css'
import React, { useState } from 'react';
import SupCat from './SupCat';
const CategoryComponent = ({title,onClick,index}) => {
  return (
    <div className={styles.MainWrapper} onClick={()=>onClick(index)}>
        <div className={styles.TopLevel}>
          <span className={styles.Title}>{title}</span> 
          <div className={styles.Arrow}>&#62;</div>
        </div>
    </div>
  )
}

export default CategoryComponent;