import React from "react"; 
import styles from './styles.module.css'
import { About } from "./About";
import { Explore } from "./Explore";
import { NewArrival } from "../../components/NewArrivals"; 
import { RecommendedVideos } from "./RecommendedVideos";
import { SeenIn } from "./SeenIn";
import { Shop } from "./Shop";
import { Slider } from "./Slider";

const HomePage = () => {
  return (
    <div className={styles.MainWrapper}>
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

export {HomePage};
