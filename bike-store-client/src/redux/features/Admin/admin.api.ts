import { TResponse } from "../../../types/global.type"
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
                    data:res?.data
                }
            }
        }),


        getAllUsers: builder.query({
            query: (params) => {
                console.log(params);
                return {
                    url: `/user/${params}`,
                }
            },
            transformResponse: (res: TResponse<TUserAdmin>) => {
                return {
                    data:res?.data
                }
            }
        })
    })
})


export const { useGetSingleUserQuery } = productApi