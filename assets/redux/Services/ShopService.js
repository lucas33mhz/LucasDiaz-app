import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const ShopApi = createApi({
    reducerPath: 'ShopApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecomerce-lucas-default-rtdb.firebaseio.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query ({
            query: () => 'products.json',
        }),
    }),
})

export const { useGetProductsQuery } = ShopApi

