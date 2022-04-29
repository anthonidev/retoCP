import axios from "axios";
import { AppDispatch } from "../app/store";
import { films_ok } from "../features/filmSlice";
import { setAlert } from "./alert";

export const productsHome = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_CP_RETO}/cp/v1/premieres`, config);
        if (res.status === 200) {
            dispatch(films_ok(res.data.premieres));
        } else {
            dispatch(setAlert('Error con el servidor', 'red'));
        }
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));

    }

}