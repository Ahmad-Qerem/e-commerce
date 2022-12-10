import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
const SearchBar = ({ Options, onChange }) => {
  const [Selected, SetSelected] = useState("Price");
  const [SelectedCat, SetCat] = useState("home-decoration");
  const optionsData = ["Price", "Rate", "Stock", "Top"];

  const HandelSelect = (e) => {
    SetSelected(e.target.value);
  };
  const HandelSelectCat = (item) => {
    SetCat(item);
  };
  return (
    <div className={styles.MainWrapper}>
      <span className={styles.LeftTitle}>Women</span>
      <div className={styles.RightText}>
        Sort by &nbsp;
        <Autocomplete
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
