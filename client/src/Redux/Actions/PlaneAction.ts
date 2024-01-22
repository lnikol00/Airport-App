import { AxiosError } from "axios";
import axios from "../../components/api/axios";
import { PlaneCreate, PlaneDetails, PlanesList } from "../Constants/PlaneConstants";
import { Dispatch } from "redux";
import { Plane } from "../../interfaces/types";

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

export const createNewPlane =
    (model: string, image: string, year: number, country: string, captain: string, capacity: number, type: string) =>
        async (dispatch: Dispatch) => {
            try {
                dispatch({ type: PlaneCreate.PLANE_CREATE_REQUEST })

                const { data } = await axios.post(
                    `/api/Airport`,
                    { model, image, year, country, captain, type, capacity }
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