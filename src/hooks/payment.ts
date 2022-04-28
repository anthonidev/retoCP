import axios from "axios";
import { AppDispatch } from "../app/store";
import { setAlert } from "./alert";

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
        const res = await axios.post(`http://ec2-3-138-85-219.us-east-2.compute.amazonaws.com:8080/cp/v1/complete`, body, config);
        console.log(res.status)
        if (res.status === 200) {
            dispatch(setAlert('La compra se ha realizado satisfactoriamente', 'red'));

        } else {
            dispatch(setAlert('Error al realizar la compra', 'red'));
        }
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));

    }

}