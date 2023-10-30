import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constans";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (category) => ({
                url: `${PRODUCTS_URL}/${category}`
            })
        }),
        getAllProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL
            })
        })
    })
})

export const { useGetProductsByCategoryQuery, useGetAllProductsQuery } = productsApiSlice