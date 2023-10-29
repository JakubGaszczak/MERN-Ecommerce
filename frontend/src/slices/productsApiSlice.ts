import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constans";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (category) => ({
                url: `${PRODUCTS_URL}/${category}`
            })
        })
    })
})

export const { useGetProductsByCategoryQuery } = productsApiSlice