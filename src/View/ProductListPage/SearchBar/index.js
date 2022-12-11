import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
const SearchBar = () => {
  const optionsData = ["Price", "Rate", "Name"];

  const HandelSelect = (e) => {};
  const HandelSelectCat = (item) => {};
  return (
    <div className={styles.MainWrapper}>
      <span className={styles.LeftTitle}>Women</span>
      <div className={styles.RightText}>
        Sort by &nbsp;
        <Autocomplete
          onChange={HandelSelect}
          disablePortal
          id="combo-box-demo"
          options={optionsData}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Filter By" />}
        />
      </div>
    </div>
  );
};

export { SearchBar };
