import React, { useContext } from "react";
import styles from "./styles.module.css";
import { About } from "./About";
import { Explore } from "./Explore";
import { NewArrivals } from "../../components/NewArrivals";
import { RecommendedVideos } from "./RecommendedVideos";
import { SeenIn } from "./SeenIn";
import { Shop } from "./Shop";
import { Slider } from "./Slider";
import { useDataProvider } from "../../Context/DataProvider";
import { Button } from "@mui/material";

const HomePage = () => {
  const { AllProducts } = useDataProvider();
  return (
    <div className={styles.MainWrapper}>
      <Slider />
      <NewArrivals Title={"FEATURED"} Products={AllProducts} />
      <About />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <SeenIn />
    </div>
  );
};

export { HomePage };
