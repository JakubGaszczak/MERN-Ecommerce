import React from "react";
import { Product } from "../../types/product";

interface Props {
    productsData: Product[] 
}

const ProductsGrid: React.FC<Props> = ({ productsData }) => {
  return (
    <div className="row products__grid">
      {productsData?.map((product) => (
        <div className="col-6 col-md-4 col-lg-3 mb-3">
          <div className="card p-0 border-0">
            <img
              className="card-img-top object-fit-cover rounded-3 shadow-sm"
              src={product.image}
            />
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <div className="d-flex justify-content-between">
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;