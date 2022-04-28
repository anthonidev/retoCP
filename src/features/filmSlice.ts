import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilmState, Ifilm } from '../types/insterfaces/Film';

const initialState: FilmState = {
    films: null,
}

export const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        films_ok: (state, action: PayloadAction<Ifilm[]>) => {
            state.films = action.payload
        },
    }
});


export const {
    films_ok,
} = filmSlice.actions


export default filmSlice.reducer
