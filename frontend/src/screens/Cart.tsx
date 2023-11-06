const Cart = () => {
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
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid"
                src="https://img01.ztat.net/article/spp-media-p1/4b2e973d84de452d8e2871d8859340a6/fd1597cb1b3d4e11bab658b93c9b8d3b.jpg?imwidth=1800&filter=packshot"
              />
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <p className="m-0">Festina</p>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <span>x1</span>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <span>$1999</span>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <h2>Cart totals</h2>
          <hr className="my-4"></hr>
          <div className="row">
            <div className="col">
              <p className="m-0">Subtotal</p>
            </div>
            <div className="col text-end">$315.00</div>
            <hr className="my-4"></hr>
          </div>
          <div className="row">
            <div className="col">
              <p className="m-0">Shipping</p>
            </div>
            <div className="col text-end">
                <p className="m-0">Free shipping $0</p>
            </div>
          </div>
          <hr className="my-4"></hr>
            <button className="btn btn-dark w-100 mt-4">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
