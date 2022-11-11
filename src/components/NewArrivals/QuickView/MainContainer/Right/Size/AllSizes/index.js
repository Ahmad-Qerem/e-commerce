import styles from './styles.module.css'
import React from 'react'

const AllSizes=()=> {
    const AllSizes=[1,2,3,4];
  return (
    <div>
        {AllSizes.map((item,index)=>{
            return(
                <>{index}</>
            );
        })}
    </div>
  );
}

export default AllSizes;