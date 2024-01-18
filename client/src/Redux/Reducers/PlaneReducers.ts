import { AllPlanesAction, SinglePlaneAction } from "../../interfaces/action-types";
import { PlaneDetails, PlanesList } from "../Constants/PlaneConstants";

export const planeListReducer = (state = { planes: [] }, action: AllPlanesAction) => {
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

export const planeDetailsReducer = (state = { plane: {} }, action: SinglePlaneAction) => {
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