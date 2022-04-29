import axios from "axios";
import { AppDispatch } from "../app/store";
import { setAlert } from "./alert";
import { clear } from "./cart";

export const post_payment = (name: string, mail: string, dni: string, operation_date: string) => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const body = JSON.stringify({
        name,
        mail,
        dni,
        operation_date,
    });

    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_CP_RETO}/cp/v1/complete`, body, config);
        console.log(res.status)
        if (res.status === 200) {
            dispatch(setAlert('La compra se ha realizado satisfactoriamente', 'red'));
            dispatch(clear());

        } else {
            console.log('Error con el servidor');
        }
    } catch (err) {
        console.log('Error con el servidor');
        dispatch(clear());


    }

}