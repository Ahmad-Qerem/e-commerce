import React from 'react'
import styles from "./styles.module.css"

const ExploreItem = ({children ,style}) => {
  return (
    <div className={style}>{children}</div>
  )
}

export default ExploreItem;