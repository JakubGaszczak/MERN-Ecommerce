import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="footer bg-body-secondary py-5" id="contact">
      <div className="footer__container container">
        <div className="row">
          <div className="col-sm text-center">
            <span>
              <MdLocationPin size={30} />
            </span>
            <p className="mt-3">
              ul. Warszawska <br></br> 25 41-807 Zabrze
            </p>
          </div>
          <div className="col-sm text-center">
            <span>
              <BsFillTelephoneFill size={23} />
            </span>
            <p className="mt-3">
              Telefon: <br></br>
              <a className="text-dark text-decoration-none" href="tel:+123456789">123-456-789</a>
            </p>
          </div>
          <div className="col-sm text-center">
            <span>
              <MdEmail size={26} />
            </span>
            <p className="mt-3">
              Email: <br></br>
              <a className="text-dark text-decoration-none" href="mailto:przykladowy@email.com">przykladowy@email.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
