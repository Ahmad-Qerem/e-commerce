import "./App.css";
import React from "react";
import * as AllPages from "./View/AllPages";
import * as AllComponents from "./components/AllComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataProvider";
import { UserProvider } from "./Context/UserProvider";

const App = () => {
  return (
    <DataProvider>
      <UserProvider>
        <Router>
          <div className="MainWrapper">
            <AllComponents.Header />
            <div className="Container">
              <Routes>
                <Route exact path="/" element={<AllPages.HomePage />}></Route>
                <Route exact path="/Login" element={<AllPages.Login />}></Route>
                <Route
                  exact
                  path="/DetailsPage"
                  element={<AllPages.DetailsPage />}
                ></Route>
                <Route
                  exact
                  path="/ProductList"
                  element={<AllPages.ProductListPage />}
                />
                <Route exact path="/Checkout" element={<AllPages.Checkout />} />
                <Route exact path="/SignUp" element={<AllPages.SignUp />} />
              </Routes>
            </div>

            <AllComponents.Footer />
          </div>
        </Router>
      </UserProvider>
    </DataProvider>
  );
};

export default App;
