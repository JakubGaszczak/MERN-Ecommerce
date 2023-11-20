import Banner from "../components/Banner";
import bannerWatch from "../assets/bannerWatch.jpg";
import bannerBelt from "../assets/bannerBelt.webp";
import Sercives from "../components/Services/Sercives";
import Products from "../components/Products/Products";
import TopRated from "../components/TopRated";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner
        image={bannerWatch}
        title="Class and Elegance Combined"
        buttonText="Join us"
      />
      <Sercives />
      <Products />
      <Banner image={bannerBelt} title="Unlock Exclusive Offers, Sign Up Today!" buttonText="Sign Up" />
      <TopRated />
      <About />
      <Footer />
    </>
  );
};

export default HomeScreen;
