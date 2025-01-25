import { compare } from "bcrypt";
import AppError from "../../errors/AppError";
import { UserModel } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import jwt from "jsonwebtoken";
import config from "../../config";

const loginUser = async (payload: TLoginUser) => {
    const user = await UserModel.findOne({ email: payload.email });
    if (!user) {
        throw new AppError(400, "This user is not found.")
    }

    const isPasswordMatched = await compare(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new AppError(400, "Wrong password.")
    }
    const jwtPayload = {
        email: user.email,
        role: user.role,
    }

    const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: "1d" });



    return {accessToken};
}

export const authServices = {
    loginUser
}