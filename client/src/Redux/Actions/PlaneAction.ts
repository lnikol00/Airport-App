import { AxiosError } from "axios";
import axios from "../../components/api/axios";
import { PlaneCreate, PlaneDelete, PlaneDetails, PlanesList } from "../Constants/PlaneConstants";
import { Dispatch } from "redux";

// Plane List
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

// Plane Details
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

// Plane Create
export const createNewPlane =
    (model: string, image: string, year: number, country: string, capacity: number, type: string, captain: string) =>
        async (dispatch: Dispatch) => {
            try {
                dispatch({ type: PlaneCreate.PLANE_CREATE_REQUEST })

                const { data } = await axios.post(
                    `/api/Airport`,
                    { model, image, year, country, capacity, type, captain }
                );
                dispatch({ type: PlaneCreate.PLANE_CREATE_SUCCESS, payload: data })

            } catch (error) {
                const err = error as AxiosError
                const message =
                    err.response && err.response.data ? err.response.data : err.message;

                dispatch({
                    type: PlaneCreate.PLANE_CREATE_FAIL,
                    payload: message
                });
            }
        }

// Plane Delete
export const deletePlane = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: PlaneDelete.PLANE_DELETE_REQUEST })

        await axios.delete(`/api/Airport/${id}`);
        dispatch({ type: PlaneDelete.PLANE_DELETE_SUCCESS })

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