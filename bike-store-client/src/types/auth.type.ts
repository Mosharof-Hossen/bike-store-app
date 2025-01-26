export type TUserResponse = {
    success: boolean
    message: string
    data: TData
}

export type TData = {
    data: {
        name: string
        email: string
        password: string
        role: string
        block: boolean
        _id: string
        createdAt: string
        updatedAt: string
        __v: number
    }
}
