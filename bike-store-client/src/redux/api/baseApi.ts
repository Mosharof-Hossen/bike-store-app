import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api',
    credentials: "include",
    prepareHeaders: (header, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            header.set("authorization", `${token}`)
        }
        return header;
    }
})

const baseQueryResponse: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    return result;
};



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryResponse,
    endpoints: () => ({}),
    tagTypes: ["products","users"],
})