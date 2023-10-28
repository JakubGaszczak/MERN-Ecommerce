import React from "react";
import Banner from "../components/Banner";
import bannerWatch from "../assets/bannerWatch.jpg";
import Sercives from "../components/Services/Sercives";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const HomeScreen = () => {
  return (
    <>
      <Banner
        image={bannerWatch}
        title="Class and Elegance Combined"
        buttonText="Shop Now"
      />
      <Sercives />
      <ProductsGrid />
    </>
  );
};

export default HomeScreen;
