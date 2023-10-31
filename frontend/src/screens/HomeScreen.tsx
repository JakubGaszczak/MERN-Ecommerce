import Banner from "../components/Banner";
import bannerWatch from "../assets/bannerWatch.jpg";
import bannerBelt from "../assets/bannerBelt.webp";
import Sercives from "../components/Services/Sercives";
import Products from "../components/Products/Products";
import TopRated from "../components/TopRated";
import About from "../components/About";

const HomeScreen = () => {
  return (
    <>
      <Banner
        image={bannerWatch}
        title="Class and Elegance Combined"
        buttonText="Shop Now"
      />
      <Sercives />
      <Products />
      <Banner image={bannerBelt} title="Unlock Exclusive Offers, Sign Up Today!" buttonText="Sign Up" />
      <TopRated />
      <About />
    </>
  );
};

export default HomeScreen;
