import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useFilterProvider } from "../../../Context/FilterProvider";
import styles from "./styles.module.css";
const SearchBar = () => {
  const { CatGlobalState, SetCatGlobalState, SortCategory } =
    useFilterProvider();
  const optionsData = ["Price", "Rate", "Name"];
  const [Value, setValue] = useState("");

  const HandelSelect = (e) => {
    const temp = e.target.value;
    setValue(temp);
    SortCategory(temp);
    /*     SetCatGlobalState({
      ...CatGlobalState,
      SortBy: temp,
    }); */
    /*     console.log(CatGlobalState);
     */
  };

  return (
    <div className={styles.MainWrapper}>
      <span className={styles.LeftTitle}>Women</span>

      <div className={styles.RightWrapper}>
        <div className={styles.SortByTitle}>Sort by</div>

        <FormControl>
          <InputLabel id="FilterLabel">Filter</InputLabel>
          <Select
            sx={{
              minWidth: 120,
            }}
            labelId="FilterLabel"
            id="Filter"
            value={Value}
            label="Age"
            onChange={HandelSelect}
          >
            {optionsData.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export { SearchBar };
