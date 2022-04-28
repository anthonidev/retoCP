import axios from "axios";
import { AppDispatch } from "../app/store";
import { candies_ok } from "../features/candySlice";
import { setAlert } from "./alert";

export const get_candies = () => async (dispatch: AppDispatch) => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`http://ec2-3-138-85-219.us-east-2.compute.amazonaws.com:8080/cp/v1/candystore`, config);
        if (res.status === 200) {
            dispatch(candies_ok(res.data.items));
        } else {
            dispatch(setAlert('Error con el servidor', 'red'));
        }
    } catch (err) {
        dispatch(setAlert('Error con el servidor', 'red'));

    }

}