import styles from "./styles.module.css";
import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useFilterProvider } from "../../../Context/FilterProvider";
import { NewArrival } from "../../../components/NewArrivals";
import { useDataProvider } from "../../../Context/DataProvider";
import axios from "axios";
import { useEffect } from "react";
const URL = "https://fakestoreapi.com/";
const MainWrapperV2 = ({}) => {
  const { AllProducts } = useDataProvider();
  const [ProductsToShow, SetProductsToShow] = useState(null);
  const { CatGlobalState, SetCatGlobalState, changeCategory } =
    useFilterProvider();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    changeCategory(CatGlobalState.AllCategorizes[index]);
    SetCatGlobalState({
      ...CatGlobalState,
      CategoryName: CatGlobalState.AllCategorizes[index],
    });
    SetProductsToShow(CatGlobalState.CurrentCategory);
    console.log(CatGlobalState);
  };
  useEffect(() => {
    axios
      .get(URL + "products" + "/category/" + CatGlobalState.CategoryName)
      .then((Response) => {
        console.log(Response.data);
        SetCatGlobalState(
          { ...CatGlobalState },
          (CatGlobalState.CurrentCategory = Response.data)
        );
      });
  }, [CatGlobalState.CurrentCategory]);

  return (
    <div className={styles.MainWrapper}>
      <List
        sx={{ width: "100%", maxWidth: 260, bgcolor: "background.paper" }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <div className={styles.TopWrapper}>
              <span>FILTERS</span>
              <div
                className={styles.Reset}
                onClick={(event) => handleListItemClick(event, -1)}
              >
                RESET
              </div>
            </div>
            <hr />
          </ListSubheader>
        }
      >
        {CatGlobalState.AllCategorizes &&
          CatGlobalState.AllCategorizes.map((item, index) => {
            return (
              <>
                <ListItemButton
                  key={"ListItemButton-" + index}
                  selected={selectedIndex === index}
                  onClick={() => handleListItemClick(index)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </>
            );
          })}
      </List>
      <NewArrival Products={AllProducts} />
    </div>
  );
};
export { MainWrapperV2 };
