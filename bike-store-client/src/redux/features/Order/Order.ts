import { TResponse } from "../../../types/global.type";
import { TUserAdmin } from "../../../types/user.type";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getUserOwnOrders: builder.query({
            query: (params) => {
                console.log(params);
                return {
                    url: `/order/user`,
                }
            },
            transformResponse: (res: TResponse<TUserAdmin>) => {
                return {
                    data: res
                }
            },
            providesTags: ["ownOrders"]

        }),


        createOrder: builder.mutation({
            query: (orderInfo) => ({
                url: "/order/product",
                method: "POST",
                body: orderInfo,
            }),
            invalidatesTags: ["ownOrders"]
        }),


        verifyOrder: builder.query({
            query: (order_id) => ({
                url: "/order/verify",
                params: { order_id },
                method: "GET",
            }),
        }),


    }),
});

export const {
    useCreateOrderMutation,
    useVerifyOrderQuery,
    useGetUserOwnOrdersQuery
} = orderApi;
