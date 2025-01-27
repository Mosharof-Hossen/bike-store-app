/* eslint-disable @typescript-eslint/no-explicit-any */
import { TResponse } from "../../../types/global.type";
import { TProduct } from "../../../types/productsType";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (params) => {
                return {
                    url: "/store/products",
                    params
                }
            },
            transformResponse: (res: TResponse<TProduct[]>) => {
                return {
                    data: res?.data,
                    meta: res?.meta
                }
            },
            providesTags: ["products"]
        }),


        createProduct: builder.mutation({
            query: (data) => {
                return {
                    url: "/store/products",
                    method: "POST",
                    body: data
                }
            },
            transformResponse: (res: TResponse<TProduct>) => {
                return {
                    data: res,
                }
            },
            invalidatesTags: ["products"]
        }),





    })
})

export const { useGetAllProductsQuery, useCreateProductMutation } = productApi