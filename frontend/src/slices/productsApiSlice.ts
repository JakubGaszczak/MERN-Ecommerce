import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constans";
import { Product } from "../types/product";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductsByCategory: builder.query<Product[], string>({
            query: (category) => ({
                url: `${PRODUCTS_URL}/${category}`
            })
        }),
        getAllProducts: builder.query<Product[], {}>({
            query: () => ({
                url: PRODUCTS_URL
            })
        }),
        getTopRated: builder.query<Product[], {}>({
            query: () => ({
                url: `${PRODUCTS_URL}/top`
            })
        })
    })
})

export const { useGetProductsByCategoryQuery, useGetAllProductsQuery, useGetTopRatedQuery } = productsApiSlice