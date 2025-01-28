import { compare, hash } from "bcrypt";
import AppError from "../../errors/AppError";
import { TChangePassword, TUser, TUserStatus } from "./user.interface";
import { UserModel } from "./user.model";
import config from "../../config";

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

const changePasswordIntoDB = async (email: string, payload: TChangePassword) => {
    const user = await UserModel.findOne({ email: email })
    const isCorrectOldPassword = await compare(payload.oldPassword, user?.password as string);
    if (!isCorrectOldPassword) {
        throw new AppError(400, "Provide Correct Old Password.")
    }
    const hashedNewPassword =await hash(payload.newPassword, Number(config.salt_round))
    const res = await UserModel.findOneAndUpdate({email:email}, {password:hashedNewPassword}, { new: true });
    
    return res

}

export const UserServices = {
    allUsers, createUser, userStatusChange, singleUser, changePasswordIntoDB
}