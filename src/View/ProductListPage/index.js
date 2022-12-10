import styles from "./styles.module.css";
import React from "react";
import { TopSlide } from "./TopSlide";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import { MainWrapperV2 } from "./MainWrapperV2";
import { FilterProvider } from "../../Context/FilterProvider";
const ProductListPage = () => {
  return (
    <div className={styles.MainWrapper}>
      <TopSlide />
      <FilterProvider>
        <SearchBar />
        <MainWrapperV2 />
      </FilterProvider>
    </div>
  );
};

export { ProductListPage };
