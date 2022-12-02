import "./App.css";
import React from "react";
import * as AllPages from "./View/AllPages";
import * as AllComponents from "./components/AllComponents";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className="MainWrapper">
        <AllComponents.Header />
        <Routes>
          <Route exact path="/" element={<AllPages.HomePage />}></Route>
          <Route exact path="/Login" element={<AllPages.Login />}></Route>
 {/*          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
           */}<Route
            exact
            path="/ProductList"
            element={<AllPages.ProductListPage />}
          />
        </Routes>
        <AllComponents.Footer />
      </div>
    </Router>
  );
};

export default App;
