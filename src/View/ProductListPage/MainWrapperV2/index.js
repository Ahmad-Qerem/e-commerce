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
const MainWrapperV2 = () => {
  const { AllProducts } = useDataProvider();

  const { CatGlobalState, SetCatGlobalState, changeCategory } =
    useFilterProvider();

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    if (index > -1) {
      console.log("sdfdafg");
      SetCatGlobalState({
        ...CatGlobalState,
        CategoryName: CatGlobalState.AllCategorizes[index],
      });
      changeCategory(CatGlobalState.AllCategorizes[index]);
    }
  };

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
                  <div className={styles.ListItemText}>{item}</div>
                </ListItemButton>
              </>
            );
          })}
      </List>
      {
        <NewArrival
          Title={false}
          Products={
            selectedIndex == -1 ? AllProducts : CatGlobalState.CurrentCategory
          }
        />
      }
    </div>
  );
};
export { MainWrapperV2 };
