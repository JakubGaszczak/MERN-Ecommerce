import { useLocation } from "react-router-dom";
import AddReview from "../components/AddReview";
import ReviewsGrid from "../components/ReviewsGrid";
import { useAppDispatch } from "../hooks";
import { addToCart } from "../slices/cartSlice";
import { toast } from "react-toastify";
import ScrollToTop from "../components/ScrollToTop";
import { useGetProductReviewsQuery } from "../slices/productsApiSlice";

const ProductScreen = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { product } = location.state;

  const { data: productsReviews, refetch } = useGetProductReviewsQuery(product._id);

  const addToCartHandler = () => {
    const { image, price, name, _id } = product;
    dispatch(addToCart({ image, price, name, _id }));
    toast.success("Added to cart");
  };

  return (
    <div className="container mt-6 mb-5">
      <ScrollToTop />
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
            Rating: <span>{product.rating} / 10</span>
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
          <button onClick={addToCartHandler} className="btn btn-secondary mt-1">
            Add to Cart
          </button>
        </div>
        <div className="row justify-content-center mt-3 mt-md-5">
          <div className="col-md-11">
            <h5 className="fw-bold">Product Description:</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <AddReview id={product._id} refetch={refetch} />
      <ReviewsGrid productsReviews={productsReviews!} />
    </div>
  );
};

export default ProductScreen;
