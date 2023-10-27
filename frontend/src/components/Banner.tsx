interface BannerProps {
  image: string;
  title: string;
  buttonText: string;
}

const Banner: React.FC<BannerProps> = ({ image, title, buttonText }) => {
  const style: React.CSSProperties = {
    height: "34rem",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <section
      className="banner container-fluid d-flex align-items-center"
      style={style}
    >
      <div className="banner__container container">
        <h1 className="banner__title text-light" style={{maxWidth: "24rem"}}>{title}</h1>
        <button className="banner__btn btn btn-light">{buttonText}</button>
      </div>
    </section>
  );
};

export default Banner;
