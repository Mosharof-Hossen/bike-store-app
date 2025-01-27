import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { UserServices } from "./user.services";

const userRegistration = catchAsync(async (req, res) => {
    const result = await UserServices.createUser(req.body);
    sendResponse(res, {
        data: result,
        message: "Registration Successfully done.",
        statusCode: 200,
        success: true,
    })
})


const userStatusChange = catchAsync(async (req, res) => {
    const result = await UserServices.userStatusChange(req.params.id, req.body);
    sendResponse(res, {
        data: result,
        message: "Status Change successfully done",
        statusCode: 200,
        success: true,
    })
})
const getAllUser = catchAsync(async (req, res) => {
    const result = await UserServices.allUsers();
    sendResponse(res, {
        data: result,
        message: "Successfully retrieved all users",
        statusCode: 200,
        success: true,
    })
})
const getSingleUser = catchAsync(async (req, res) => {
    // const id = req.user.email;
    const result = await UserServices.singleUser(req.params.id);
    sendResponse(res, {
        data: result,
        message: "Successfully retrieved user",
        statusCode: 200,
        success: true,
    })
})


export const UserControllers = {
    userRegistration, userStatusChange, getAllUser, getSingleUser
}