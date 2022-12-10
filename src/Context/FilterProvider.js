import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const URL = "https://fakestoreapi.com/";

const MyProvider = createContext(null);

const useFilterProvider = () => {
  return useContext(MyProvider);
};

const FilterProvider = ({ children }) => {
  const [CatGlobalState, SetCatGlobalState] = useState({
    AllCategorizes: [],
    CategoryName: "",
    SortBy: "",
    CurrentCategory: null,
  });

  useEffect(() => {
    axios.get(URL + "products" + "/categories").then((Response) => {
      console.log({ Response });
      SetCatGlobalState({
        ...CatGlobalState,
        AllCategorizes: Response.data,
      });
    });
  }, []);

  const changeCategory = (CategoryName) => {
    SetCatGlobalState({
      ...CatGlobalState,
      CategoryName: CategoryName,
    });
    axios
      .get(URL + "products" + "/category/" + CategoryName)
      .then((Response) => {
        console.log({ Response });
        SetCatGlobalState(
          { ...CatGlobalState },
          (CatGlobalState.CurrentCategory = Response.data)
        );
      });
  };

  // useEffect(() => {
  //   axios
  //     .get(URL + "products" + "/category/" + CatGlobalState.CategoryName)
  //     .then((Response) => {
  //       console.log({ Response });
  //       SetCatGlobalState(
  //         { ...CatGlobalState },
  //         (CatGlobalState.CurrentCategory = Response.data)
  //       );
  //     });
  // }, [CatGlobalState.CategoryName]);
  return (
    <MyProvider.Provider
      value={{ CatGlobalState, SetCatGlobalState, changeCategory }}
    >
      {children}
    </MyProvider.Provider>
  );
};

export { FilterProvider, useFilterProvider };
