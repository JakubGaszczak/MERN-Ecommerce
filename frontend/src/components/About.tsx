import aboutUsWatch from "../assets/aboutUsWatch.jpg";

const About = () => {
  return (
    <section className="about container mb-5" id="about">
      <div className="row align-items-center justify-content-center">
        <div className="col-md">
          <h1 className="about__title mb-3">About Us</h1>
          <p>
            Welcome to Elegance United - Your Source for Watches, Straps, and
            Sunglasses! We're all about style and functionality. Our handpicked
            collection of watches, straps, and sunglasses is designed to enhance
            your personal look. Our watches offer a blend of classic and
            contemporary styles, suitable for any occasion.
          </p>
        </div>
        <div className="col-md d-flex justify-content-center">
          <img 
          className="about__image rounded-4"
            src={aboutUsWatch}
            alt="watch on hand"
            style={{ maxWidth: "30rem", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
