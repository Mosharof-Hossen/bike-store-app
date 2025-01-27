import AppError from "../../errors/AppError";
import { TUser, TUserStatus } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
    const isUserExists = await UserModel.findOne({ email: payload.email });
    if (isUserExists) {
        throw new AppError(400, "This Email already used. please login");
    }
    const newUser = await UserModel.create(payload);
    return newUser

}
const userStatusChange = async (id: string, payload: TUserStatus) => {
    const result = await UserModel.findByIdAndUpdate(id, payload, { new: true });
    return result

}
const allUsers = async () => {
    const result = await UserModel.find();
    return result
}
const singleUser = async (payload: string) => {
    const result = await UserModel.findOne({ email: payload });
    return result
}


export const UserServices = {
    allUsers, createUser, userStatusChange,singleUser
}