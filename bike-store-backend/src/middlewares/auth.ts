/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../interface/global";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { UserModel } from "../modules/user/user.model";

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError(401, "You are not authorized.");
        }
        let decode;
        try {
            decode = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
        } catch (err) {
            throw new AppError(401, "You are not authorized.");
        }
        const role = decode.role;

        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(401, "You are not authorized.");
        }

        const user = await UserModel.findOne({ email: decode.email });

        if (!user) {
            throw new AppError(401, "This user in not found!");
        }
        if (user.block) {
            throw new AppError(400, "This user is blocked!")
        }
        req.user = decode;
        next();
    })
}

export default auth;