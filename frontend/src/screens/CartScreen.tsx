import { useAppDispatch, useAppSelector } from "../hooks";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { PiSmileySad } from "react-icons/pi"
import { addToCart, clearCart, removeFromCart } from "../slices/cartSlice";
import { CartItem } from "../types/product";
import ScrollToTop from "../components/ScrollToTop";

const CartScreen = () => {
  const { cartItems, itemsPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const addToCartHandler = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const removeFromCartHandler = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="container my-5">
      <ScrollToTop />
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
          {cartItems.length < 1 ? (
            <p className="text-muted fs-5">Your cart is empty <PiSmileySad /></p>
          ) : (
            cartItems.map((item, index) => (
              <div className="row mb-2" key={index}>
                <div className="col-4">
                  <img className="img-fluid" src={item.image} alt={item.name} />
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
                <div className="row">
                  <div className="col-4 d-flex justify-content-center">
                    <button
                      onClick={() => removeFromCartHandler(item)}
                      className="btn"
                    >
                      <AiOutlineMinus />
                    </button>
                    <button
                      onClick={() => addToCartHandler(item)}
                      className="btn"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          <button onClick={clearCartHandler} className="btn btn-danger mt-4">
            Clear Cart
          </button>
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

export default CartScreen;
