
import { TResponse } from "../../../types/global.type";
import { TUserOwnOrder } from "../../../types/order.type";
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getUserOwnOrders: builder.query({
            query: () => {
                return {
                    url: `/order/user`,
                }
            },
            providesTags: ["ownOrders"]
        }),

        getAllOrders: builder.query<TResponse<TUserOwnOrder[]>, void>({
            query: () => {
                return {
                    url: `/order`,
                }
            },
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
    useGetUserOwnOrdersQuery,
    useGetAllOrdersQuery
} = orderApi;
