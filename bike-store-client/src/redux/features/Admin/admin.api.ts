import { TResponse } from "../../../types/global.type"
import { TDeleteResponse } from "../../../types/productsType";
import { TUserAdmin } from "../../../types/user.type"
import { baseApi } from "../../api/baseApi"

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleUser: builder.query({
            query: (params) => {
                console.log(params);
                return {
                    url: `/user/${params}`,
                }
            },
            transformResponse: (res: TResponse<TUserAdmin>) => {
                return {
                    data: res?.data
                }
            }
        }),

        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    url: `/store/products/${id}`,
                    method: "DELETE"
                }
            },
            invalidatesTags: ["products"],

            transformResponse: (res: TResponse<TDeleteResponse>) => {
                return {
                    data: res
                }
            }
        }),


        getAllUsers: builder.query({
            query: (params) => {
                console.log(params);
                return {
                    url: `/user/all-user`,
                }
            },
            transformResponse: (res: TResponse<TUserAdmin[]>) => {
                console.log("allUser:", res);

                return {
                    data: res?.data
                }
            }
        })
    })
})


export const { useGetSingleUserQuery, useGetAllUsersQuery, useDeleteProductMutation } = productApi