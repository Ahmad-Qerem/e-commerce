import styles from './styles.module.css'
import React, { useState } from 'react'
import FilterHeader from './FilterHeader'
import FilterContent from './FilterContent'
import FilterSize from './FilterSize'
const FilterSide = ({onClick}) => {

  return (
    <div className={styles.MainWrapper}>
        <FilterHeader/>
        <FilterContent onClick={onClick}/>
        <FilterSize/>
    </div>
  )
}

export default FilterSide