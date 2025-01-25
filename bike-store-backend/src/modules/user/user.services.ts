import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
    const isUserExists = await UserModel.findOne({email:payload.email});
    if(isUserExists){
        throw new AppError(400,"This Email already used. please login");
    }
    const newUser = await UserModel.create(payload);
    return newUser
    
}


export const UserServices = {
    createUser
}