import styles from './styles.module.css'
import React from 'react';

const AllSizes=()=> {
    const AllSizes=[1,2,3,4];

    const HandelBoxClick=()=>{

    }


  return (
    <div className={styles.MainBoxSize}>
        {AllSizes.map((item,index)=>{
            return(
                <div className={styles.BoxSize}>{item}</div>
            );
        })}
    </div>
  );
}

export default AllSizes;