import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        SignUp: builder.mutation({
            query: (userInfo) => ({
                url: "/user/registration",
                method: "POST",
                body: userInfo
            })
        })
    })
})

export const {useSignUpMutation} = authApi