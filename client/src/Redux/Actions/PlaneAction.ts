import { AxiosError } from "axios";
import axios from "../../components/api/axios";
import { PlaneDetails, PlanesList } from "../Constants/PlaneConstants";
import { Dispatch } from "redux";

// PRODUCT LIST
export const getAllPlanes = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: PlanesList.PLANE_LIST_REQUEST })

        const { data } = await axios.get("/api/Airport");
        dispatch({ type: PlanesList.PLANE_LIST_SUCCESS, payload: data })

    } catch (error) {
        const err = error as AxiosError
        const message =
            err.response && err.response.data ? err.response.data : err.message;

        dispatch({
            type: PlanesList.PLANE_LIST_FAIL,
            payload: message
        });
    }
}

export const getPlaneDetails = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: PlaneDetails.PLANE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/Airport/${id}`);
        dispatch({ type: PlaneDetails.PLANE_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        const err = error as AxiosError
        const message =
            err.response && err.response.data ? err.response.data : err.message;

        dispatch({
            type: PlaneDetails.PLANE_DETAILS_FAIL,
            payload: message
        });
    }
}