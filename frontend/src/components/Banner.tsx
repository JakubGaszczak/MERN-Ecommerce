interface Props {
  image: string;
  title: string;
  buttonText: string;
}

const Banner: React.FC<Props> = ({ image, title, buttonText }) => {
  const style: React.CSSProperties = {
    height: "31rem",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <section
      className="banner container-fluid d-flex align-items-center"
      style={style} 
      id="home"
    >
      <div className="banner__container container">
        <h1 className="banner__title text-light mb-4" style={{maxWidth: "26rem"}}>{title}</h1>
        <button className="banner__btn btn btn-light">{buttonText}</button>
      </div>
    </section>
  );
};

export default Banner;
