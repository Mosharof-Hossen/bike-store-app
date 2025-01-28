import { createSlice } from "@reduxjs/toolkit";

export interface ICartItem {
    product: string; // Product ID
    name: string;
    price: number;
    quantity: number;
    InStock: number;
    image: string; // Optional: for displaying in the UI
}

interface CartState {
    items: ICartItem[];
    totalQuantity: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})


export const cartReducer = cartSlice.reducer;