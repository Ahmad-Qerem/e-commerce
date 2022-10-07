
import './App.css';
import React from "react"
import * as all from "./components/AllComponents"
const App = ( ) => {
  return (
    <div className='MainWrapper'>
      <all.Header/>
      <all.Slider/>
      <all.NewArrival/>
      <all.About/>
      <all.Explore/>
      <all.Shop/>
      <all.RecommendedVideos/>
      <all.SeenIn/>
      <all.Footer/> 
    </div>
  );
};

export default App;
