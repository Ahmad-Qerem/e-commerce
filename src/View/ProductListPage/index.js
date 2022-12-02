import styles from './styles.module.css';
import React from 'react';
import { TopSlide } from './TopSlide';
import {SearchBar} from './SearchBar';
import {MainWrapper} from './MainWrapper';
import { useState } from 'react';
const ProductListPage = () => {


  const [Selected,SetSelected] = useState("Price");
  const [SelectedCat,SetCat] = useState("home-decoration");
  const optionsData = ["Price", "Rate", "Stock", "Top"];

  const HandelSelect=(e)=>{
    SetSelected(e.target.value);
  }
  const HandelSelectCat=(item)=>{
    SetCat(item);
  }
  return (
    <div className={styles.MainWrapper}>
      <TopSlide/>
      <SearchBar Options={optionsData} onChange={HandelSelect}/>
      <MainWrapper  CurrentCat={SelectedCat} Selected={Selected} onClick={HandelSelectCat}/>
    </div>
  )
}

export {ProductListPage}