import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.services";

const userRegistration = catchAsync(async (req, res) => {
    console.log(req.body);
    const result = await UserServices.createUser(req.body);
    sendResponse(res,{
        data:result,
        message:"Registration Successfully done.",
        statusCode:200,
        success:true,
    })
})


export const UserControllers = {
    userRegistration
}