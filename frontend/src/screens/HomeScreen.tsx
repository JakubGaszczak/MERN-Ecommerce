import Banner from "../components/Banner";
import bannerWatch from "../assets/bannerWatch.jpg";
import bannerBelt from "../assets/bannerBelt.webp";
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
      <Banner image={bannerBelt} title="Unlock Exclusive Offers, Sign Up Today!" buttonText="Sign Up" />
    </>
  );
};

export default HomeScreen;
