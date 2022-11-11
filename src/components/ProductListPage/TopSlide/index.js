import styles from './styles.module.css'
import React from 'react'

const TopSlide = () => {
  return (
    <div className={styles.MainWrapper}>
        <img className={styles.BackGroundImage} src={"./images/image_18.png"} alt={"Top Slide Image"}/>
        <div className={styles.TopText}>
          <h1>
            Apparels
          </h1>
          <p>
            White Gold began gaining popularity in the early 1900’s as an alternative to platinum. 
          </p>
        </div>
        
    </div>
  )
}

export default TopSlide