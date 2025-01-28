export type TUserOwnOrder = {
    transaction: TTransaction
    _id: string
    user: string
    email: string
    products: TOrderedProduct[]
    totalPrice: number
    status: string
    verified: boolean
    createdAt: string
    updatedAt: string
    __v: number
}

export type TTransaction =  {
    id: string
    transactionStatus: string
    bank_status: string
    date_time: string
    method: string
    sp_code: string
    sp_message: string
}

export type TOrderedProduct = {
    product: string
    quantity: number
    _id: string
}
