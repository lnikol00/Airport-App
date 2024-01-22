import { AllPlanesAction, CreatePlaneAction, SinglePlaneAction } from "../../interfaces/action-types";
import { PlaneCreate, PlaneDetails, PlanesList } from "../Constants/PlaneConstants";

export const planeListReducer = (state = { planes: [], loading: false, error: undefined }, action: AllPlanesAction) => {
    switch (action.type) {
        case PlanesList.PLANE_LIST_REQUEST:
            return { loading: true, planes: [] };
        case PlanesList.PLANE_LIST_SUCCESS:
            return { loading: false, planes: action.payload };
        case PlanesList.PLANE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const planeDetailsReducer = (state = {
    plane:
        { model: null, year: null, country: null, capacity: null, type: null, captain: null, image: "emptyImage" },
    loading: false,
    error: undefined
}, action: SinglePlaneAction) => {
    switch (action.type) {
        case PlaneDetails.PLANE_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PlaneDetails.PLANE_DETAILS_SUCCESS:
            return { loading: false, plane: action.payload };
        case PlaneDetails.PLANE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const planeCreateReducer = (state = { plane: {}, loading: false, success: false, error: null }, action: CreatePlaneAction) => {
    switch (action.type) {
        case PlaneCreate.PLANE_CREATE_REQUEST:
            return { loading: true };
        case PlaneCreate.PLANE_CREATE_SUCCESS:
            return { loading: false, success: true, plane: action.payload };
        case PlaneCreate.PLANE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PlaneCreate.PLANE_CREATE_RESET:
            return { plane: {}, loading: false, success: false, error: null };
        default:
            return state;
    }
}