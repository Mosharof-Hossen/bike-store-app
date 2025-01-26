import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => {

                return {
                    url: "/store/products"
                }
            },
            transformResponse: (res) => {
                return res
                // {
                //     data: res?.data,
                //     meta: res?.meta
                // }
            }
        })
    })
})

export const { useGetAllProductsQuery } = productApi