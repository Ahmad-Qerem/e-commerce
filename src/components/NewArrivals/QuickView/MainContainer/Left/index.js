import React from 'react'
import styles from './styles.module.css'
import ImageComponent from './ImageComponent'
import { useState } from 'react'
const Left=({Images,thumbnail})=> {
  const [index,setIndex]=useState(4);
  const HandelImgHover = (index)=>{
    setIndex(index);
  }
  return (
    <div className={styles.Left}>
          <div className={styles.ImgArray}>
            {Images.map((item, i) => {
              return (
                <ImageComponent
                  onClick={()=>HandelImgHover(i)}
                  Path={item}
                  index={i}
                />
              );
            })}
          </div>
          <div>
            <img className={styles.Image} src={Images[index]?Images[index]:thumbnail} />
          </div>
        </div>
  )
}

export default Left