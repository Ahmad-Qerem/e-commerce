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
  const SortCategory = (SortBy) => {};
  const changeCategory = (CategoryName) => {
    const string = URL + "products" + "/category/" + CategoryName;
    console.log(string);
    axios
      .get(URL + "products" + "/category/" + CategoryName)
      .then((Response) => {
        console.log(Response.data);
        SetCatGlobalState({
          ...CatGlobalState,
          CurrentCategory: Response.data,
        });
      });
  };

  return (
    <MyProvider.Provider
      value={{ CatGlobalState, SetCatGlobalState, changeCategory }}
    >
      {children}
    </MyProvider.Provider>
  );
};

export { FilterProvider, useFilterProvider };
