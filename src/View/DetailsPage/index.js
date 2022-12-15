import React from "react";
import MainContainer from "../../components/NewArrivals/QuickView/MainContainer";
import { useDataProvider } from "../../Context/DataProvider";
import styles from "./styles.module.css";
import DealateSlide from "./DealateSlide";
import ThreeImages from "./ThreeImages";
import PText from "./PText";
import AsSeenOn from "./AsSeenOn";
import { NewArrivals } from "../../components/NewArrivals";
import { CustomerReviews } from "./CustomerReviews";
const DetailsPage = ({ index = 0 }) => {
  const { AllProducts } = useDataProvider();
  const Product = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 599,
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      category: "women's clothing",
      image: "images/image_6.png",
      rating: { rate: 4.9, count: 10 },
    },
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 199,
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      category: "men's clothing",
      image: "images/image_49.png",
      rating: { rate: 3.9, count: 30 },
    },
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 320,
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      category: "men's clothing",
      image: "images/image_70.png",
      rating: { rate: 3.3, count: 40 },
    },
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 320,
      description: "Pueraria Mirifica And Study Phyto Estrogens",
      category: "men's clothing",
      image: "images/image_5.png",
      rating: { rate: 3.3, count: 40 },
    },
  ];

  return (
    <div className={styles.MainWrapper}>
      <MainContainer DataCard={AllProducts[index]} />
      <DealateSlide />
      <ThreeImages />
      <PText />
      <AsSeenOn Title="As Seen On Instagram" />
      <CustomerReviews Title="Customer Reviews" />
      <NewArrivals Products={Product} Title={"You May Also Like"} />
    </div>
  );
};

export default DetailsPage;
