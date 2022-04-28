import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import alertReducer from "../features/alertSlice";
import filmReducer from "../features/filmSlice";
import candyReducer from "../features/candySlice";
import cardReducer from "../features/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        alert: alertReducer,
        film: filmReducer,
        candy: candyReducer,
        cart: cardReducer
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch