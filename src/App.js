
import './App.css';
import React from "react"
import * as all from "./components/AllComponents"
const App = ( ) => {
  return (
    <div className='MainWrapper'>
      <all.Header/>
      {/* <all.HomePage/> */}
      <all.ProductListPage/>
      <all.Footer/> 
    </div>
  );
};

export default App;
