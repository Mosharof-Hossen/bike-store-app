import { TResponse } from "../../../types/global.type";
import { TProduct } from "../../../types/productsType";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => {

                return {
                    url: "/store/products"
                }
            },
            transformResponse: (res: TResponse<TProduct>) => {
                return {
                    data: res?.data,
                    meta: res?.meta
                }
            }
        })
    })
})

export const { useGetAllProductsQuery } = productApi