
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
            providesTags: ["allOrder"]
        }),

        createOrder: builder.mutation({
            query: (orderInfo) => ({
                url: "/order/product",
                method: "POST",
                body: orderInfo,
            }),
            invalidatesTags: ["ownOrders"]
        }),


        verifyOrder: builder.mutation({
            query: (id) => ({
                url: `/order/verify/${id}`,
                method: "PUT",
            }),
            invalidatesTags: ["allOrder"]
        }),

        updateOrderStatus: builder.mutation({
            query: (args) => ({
                url: `/order/status-update/${args._id}`,
                method: "POST",
                body: { status: args.status }
            }),
            invalidatesTags: ["allOrder"]
        }),


    }),
});

export const {
    useCreateOrderMutation,
    useVerifyOrderMutation,
    useGetUserOwnOrdersQuery,
    useGetAllOrdersQuery,
    useUpdateOrderStatusMutation
} = orderApi;
