import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcript from "bcrypt";
import config from "../../config";

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["customer", "admin"],
        default: "customer"
    },
    block: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function (next) {
    this.password = await bcript.hash(this.password, Number(config.salt_round));
    next();
})

export const UserModel = model<TUser>("User", userSchema);