import { useAppDispatch, useAppSelector } from "../hooks";
import { AiOutlineClose } from "react-icons/ai"
import { clearCart } from "../slices/cartSlice";

const Cart = () => {
  const { cartItems, itemsPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()

  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  return (
    <div className="container my-5">
      <div className="row gap-5 gap-md-0">
        <div className="col-md-7">
          <h2>Shopping cart</h2>
          <hr className="my-4"></hr>
          <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center">
              Image
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              Product
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              Quantity
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              Price
            </div>
          </div>
          <hr className="my-4"></hr>
          {cartItems.map((item, index) => (
            <div className="row mb-2" key={index}>
              <div className="col-4">
                <img className="img-fluid" src={item.image} />
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <p className="m-0">{item.name}</p>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <span>x{item.qty}</span>
              </div>
              <div className="col d-flex justify-content-center align-items-center">
                <span>${item.price}</span>
              </div>
            </div>
          ))}
          <button onClick={clearCartHandler} className="btn btn-danger mt-4">Clear Cart</button>
        </div>
        <div className="col-md-5">
          <h2>Cart totals</h2>
          <hr className="my-4"></hr>
          <div className="row">
            <div className="col">
              <p className="m-0">Shipping</p>
            </div>
            <div className="col text-end">
              <p className="m-0">Free shipping $0</p>
            </div>
          </div>
          <hr className="my-4"></hr>
          <div className="row">
            <div className="col">
              <p className="m-0">Total</p>
            </div>
            <div className="col text-end">${itemsPrice}</div>
          </div>
          <hr className="my-4"></hr>
          <button className="btn btn-dark w-100 mt-4">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
