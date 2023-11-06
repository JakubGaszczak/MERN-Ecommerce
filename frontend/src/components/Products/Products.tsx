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
    <section className="container" id="products">
      <h1>Products</h1>
      <h4 className="text-muted">{category}</h4>
      <div className="btn-group mt-3 mb-5">
        {uniqueCategories?.map((category, index) => (
          <button
            key={index}
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
