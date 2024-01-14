import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { addPlane } from "../store";

// PRODUCT LIST
export const getAllPlanes = () => async (dispatch: Dispatch) => {
    try {
        dispatch(addPlane({ loading: true, planes: [] }))

        const url = 'http://localhost:5079/api/Airport'
        const { data } = await axios.get(url);

        dispatch(addPlane({ loading: false, planes: data }))

    } catch (error) {

        const err = error as AxiosError

        dispatch(addPlane({
            loading: false,
            planes: [],
            error: err.message
        }))
    }
}
