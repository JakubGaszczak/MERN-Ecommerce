import { useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ProductScreen = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="container my-5">
      <div className="row gap-4 gap-md-0">
        <div className="col-md-5 d-flex justify-content-center">
          <img
            className="img-fluid"
            src={product.image}
            alt="product image"
            style={{ maxHeight: "40rem", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center">
          <span className="text-muted">{product.category}</span>
          <h1>{product.name}</h1>
          <hr className="mb-3"></hr>
          <h5 className="fw-bold">${product.price}</h5>

          <p className="fs-5 mt-4">
            Rating: <span>{product.rating}</span>
          </p>

          <p className="fs-5 mt-4">Product properties:</p>
          <ul className="list-unstyled">
            <li>
              <p>
                <span className="fw-bold">Marka: </span>
                {product.name}
              </p>
            </li>
            <li>
              <p>
                <span className="fw-bold">Materials: </span>
                {product.materials}
              </p>
            </li>
            <li>
              <p>
                <span className="fw-bold">Weight: </span>
                {product.weight}g
              </p>
            </li>
          </ul>
          <button className="btn btn-secondary mt-1">Add to Cart</button>
        </div>
        <div className="row justify-content-center mt-3 mt-md-5">
          <div className="col-md-11">
            <p className="fs-5 fw-bold">Product Description:</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;