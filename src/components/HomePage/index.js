import React from "react";
import {
    Slider,
    NewArrival,
    About,
    Explore,
    Shop,
    RecommendedVideos,
    SeenIn
    } from '../AllComponents'
const HomePage = () => {
  return (
    <div>
      <Slider />
      <NewArrival />
      <About />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <SeenIn />
    </div>
  );
};

export default HomePage;
