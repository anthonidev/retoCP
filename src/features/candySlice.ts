import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CandyState, Icandy } from "../types/insterfaces/Candy";

const initialState: CandyState = {
    candies: null,
}

export const candySlice = createSlice({
    name: "candy",
    initialState,
    reducers: {
        candies_ok: (state, action: PayloadAction<Icandy[]>) => {
            state.candies = action.payload
        },
    }
});

export const {
    candies_ok,
} = candySlice.actions


export default candySlice.reducer
