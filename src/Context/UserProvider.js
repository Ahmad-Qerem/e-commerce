import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useMemo } from "react";
import { SetCart } from "../Redux/Slice/CartSlice";
import { useDispatch } from "react-redux";
const URL = "https://fakestoreapi.com/";

const MyContext = createContext(null);
const useUserProvider = () => {
  return useContext(MyContext);
};

const UserProvider = ({ children }) => {
  const [User, SetUser] = useState({});
  const [AllUsers, SetAllUsers] = useState();
  const [Authenticated, SetAuthenticated] = useState(false);
  const [Token, SetToken] = useState();
  const despatch = useDispatch();
  const UserLogIn = (Email, password) => {
    const NewUser = AllUsers.find((item) => item.email === Email);
    console.log(NewUser);
    if (NewUser) {
      if (NewUser.password === password) {
        console.log('yes u can');

        SetUser(NewUser);
        axios
          .post(URL + "auth/login", {
            username: NewUser.username,
            password: password,
          })
          .then((Response) => {
            console.log(Response.data);
            SetToken(Response.data.Token);
            SetAuthenticated(true);
            const id = NewUser.id;
            despatch(SetCart({ id }));
          });

        return false;
      } else {
        return true;
      }
    }
  };
  const Logout = () => {
    alert("Logged Out");
    SetUser(null);
    SetAuthenticated(false);
  };

  useEffect(() => {
    axios.get(URL + "users").then((Response) => {
      SetAllUsers(Response.data);
      console.log(AllUsers);
    });
  }, []);
  return (
    <MyContext.Provider value={{ User, Authenticated, UserLogIn, Logout }}>
      {children}
    </MyContext.Provider>
  );
};
export { UserProvider, useUserProvider };
