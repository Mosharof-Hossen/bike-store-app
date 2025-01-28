export type TUser = {
    _id: string;
    name: string,
    email: string,
    password: string,
    role: "customer" | "admin",
    block: boolean,
}

export type TUserStatus = {
    block: boolean
}

export type TChangePassword = {
    newPassword: string;
    oldPassword: string
}