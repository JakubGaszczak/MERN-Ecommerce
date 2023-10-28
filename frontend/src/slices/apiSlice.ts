import { BASE_URL } from "../constans";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["User", "Product"],
    endpoints: (builder) => ({})
})