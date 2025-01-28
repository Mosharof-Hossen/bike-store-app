import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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
    reducers: {
        addToCart(state, action: PayloadAction<ICartItem>) {
            const isExistItem = state.items.find((item) => item.product === action.payload.product)
            if (isExistItem) {
                isExistItem.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += action.payload.price;
            } else {
                state.items.push(action.payload);
                state.totalQuantity += 1;
                state.totalPrice += action.payload.price * action.payload.quantity;
            }
        },
        decreaseQuantityOfItem(state, action: PayloadAction<ICartItem>) {
            console.log(action);
            const isExistItem = state.items.find((item) => item.product === action.payload.product)
            if (isExistItem) {
                isExistItem.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= action.payload.price;
            }
        },

        removeItemFromCart(state, action: PayloadAction<string>) {
            console.log(action);
            const isExistItem = state.items.find((item) => item.product === action.payload)
            if (isExistItem) {
                state.totalQuantity -= isExistItem.quantity;
                state.totalPrice -= isExistItem.quantity * isExistItem.price;
                state.items = state.items.filter((item) => item.product !== action.payload)
            }
        },




        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },



})


export const totalCartItems = (state: RootState) => state.cart

export const { addToCart, clearCart, decreaseQuantityOfItem, removeItemFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer;
