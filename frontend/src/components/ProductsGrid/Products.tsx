import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MouseEvent } from "react";
import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} from "../../slices/productsApiSlice";

const ProductsGrid = () => {
  const [category, setCategory] = useState<string>("watches");
  const { data: ProductsByCategoryData } =
    useGetProductsByCategoryQuery(category);
  const { data: ProductsAllData } = useGetAllProductsQuery({});

  const uniqueCategories = [
    ...new Set(ProductsAllData?.map((product) => product.category)),
  ];

  return (
    <section className="container products" id="products">
      <h1 className="products__title">{category}</h1>
      <div className="products__categories btn-group mt-3 mb-5">
        {uniqueCategories?.map((category) => (
          <button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              setCategory(category)
            }
            className="btn btn-outline-secondary"
          >
            {category} <MdKeyboardArrowRight />
          </button>
        ))}
      </div>
      <div className="row products__grid">
        {ProductsByCategoryData?.map((product) => (
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
    </section>
  );
};

export default ProductsGrid;
