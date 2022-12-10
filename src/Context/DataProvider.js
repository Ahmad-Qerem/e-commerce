import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const URL = "https://fakestoreapi.com/";

const MyProvider = createContext(null);

const useDataProvider = () => {
  return useContext(MyProvider);
};
const DataProvider = ({ children }) => {
  const [AllProducts, SetAllProducts] = useState(null);

  useEffect(() => {
    axios.get(URL + "products").then((Response) => {
      SetAllProducts(Response.data);
    });
  }, []);
  return (
    <MyProvider.Provider value={{ AllProducts }}>
      {children}
    </MyProvider.Provider>
  );
};

export { DataProvider, useDataProvider };
