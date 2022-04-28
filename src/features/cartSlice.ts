import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getStoreLocal, setStoreLocal } from '../helpers/helpRedux';
import { CartState, itemCart } from "../types/insterfaces/Cart";

const initialState: CartState = {
    items: null,
    amount: null,
    total_items: null
}

export const cartSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        cart_ok: (state, action: PayloadAction<CartState>) => {
            state.items = action.payload.items
            state.amount = action.payload.amount
            state.total_items = action.payload.total_items
        },
        add_item_ok: (state, action: PayloadAction<CartState>) => {
            let cart
            let amount: number = 0
            let total_items = 0
            localStorage.setItem('cart', JSON.stringify(action.payload));

            if (getStoreLocal('cart')) {
                cart = JSON.parse(getStoreLocal("cart") || '{}')
                cart = cart.items
                cart.map((item: itemCart) => {
                    amount += parseFloat(item.candy.price) * parseFloat(item.count !== null ? item.count.toString() : "0");
                });
                total_items = cart.length

                state.items = cart
                state.amount = parseFloat(amount.toString())
                state.total_items = total_items
            }
        },
        get_item_ok: (state, action: PayloadAction<CartState>) => {
            state.items = action.payload.items
            state.amount = action.payload.amount
            state.total_items = action.payload.total_items
        },
        remove_item: (state, action: PayloadAction<CartState>) => {
            state.items = action.payload.items
            state.amount = action.payload.amount
            state.total_items = action.payload.total_items
        },
    }
});


export const {
    cart_ok, add_item_ok, get_item_ok
} = cartSlice.actions


export default cartSlice.reducer
