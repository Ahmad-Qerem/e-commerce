import styles from './styles.module.css'
import React from 'react'

const FilterHeader = () => {
  return (
    <div className={styles.MainWrapper}>
        <span className={styles.Class1}>filters</span>
        <span className={styles.Class2}>reset</span>
    </div>
  )
}

export default FilterHeader