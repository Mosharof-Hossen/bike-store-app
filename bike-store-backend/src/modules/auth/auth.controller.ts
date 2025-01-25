import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { authServices } from "./auth.services";

const loginUser = catchAsync(async (req, res) => {
    // console.log(req.body);
    const result = await authServices.loginUser(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User Logged in successfully",
        data: result
    })
})

export const authController = {
    loginUser
}