import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
    const isUserExists = await UserModel.findOne({email:payload.email});
    console.log(isUserExists);
    console.log(payload);
    if(isUserExists){
        throw new AppError(400,"This Email already used. please login");
    }
    
}


export const UserServices = {
    createUser
}