import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constans";
import { Product } from "../types/product";
import { Review } from "../types/product";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => ({
        url: `${PRODUCTS_URL}/${category}`,
      }),
    }),
    getAllProducts: builder.query<Product[], {}>({
      query: () => ({
        url: PRODUCTS_URL,
      }),
    }),
    getTopRated: builder.query<Product[], {}>({
      query: () => ({
        url: `${PRODUCTS_URL}/top`,
      }),
    }),
    createReview: builder.mutation<
      Review,
      { id: string; comment: string; rating: number }
    >({
      query: ({ id, comment, rating }) => ({
        url: `${PRODUCTS_URL}/${id}/reviews`,
        method: "POST",
        body: {
          comment,
          rating,
        },
      }),
    }),
    getProductReviews: builder.query<Review[], string>({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}/reviews`,
      }),
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetAllProductsQuery,
  useGetTopRatedQuery,
  useCreateReviewMutation,
  useGetProductReviewsQuery,
} = productsApiSlice;
