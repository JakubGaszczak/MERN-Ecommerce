import { TbTruckDelivery } from "react-icons/tb";
import { TbAward } from "react-icons/tb";
import { BiCheckShield } from "react-icons/bi";

const Sercives = () => {
  return (
    <section className="services container my-5">
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-3">
          <div className="card p-3">
            <h3 className="card-title">
              <TbTruckDelivery /> Free Delivery
            </h3>
            <p className="card-text">
              Shop with ease thanks to our complimentary delivery service. Enjoy
              worry-free shopping
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-3">
          <div className="card p-3">
            <h3 className="card-title">
              <TbAward /> Quality
            </h3>
            <p className="card-text">
              Exceptional quality is our promise. We take pride in delivering
              products of the highest standard
            </p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-3">
          <div className="card p-3">
            <h3 className="card-title">
              <BiCheckShield /> Secure Payment
            </h3>
            <p className="card-text">
              Your payment, our priority. We ensure secure transactions for your
              peace of mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sercives;
