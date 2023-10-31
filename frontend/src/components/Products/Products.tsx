import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MouseEvent } from "react";
import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} from "../../slices/productsApiSlice";
import ProductsGrid from "./ProductsGrid";

const Products = () => {
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
      <ProductsGrid productsData={ProductsByCategoryData!} />
    </section>
  );
};

export default Products;