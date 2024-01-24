import { AllPlanesAction, CreatePlaneAction, DeletePlaneAction, SinglePlaneAction, UpdatePlaneAction } from "../../interfaces/action-types";
import { PlaneCreate, PlaneDelete, PlaneDetails, PlaneUpdate, PlanesList } from "../Constants/PlaneConstants";

// Plane List  
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

// Plane Details
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

// Plane Create
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

// Plane Delete
export const planeDeleteReducer = (state = { loading: false, success: false, error: null }, action: DeletePlaneAction) => {
    switch (action.type) {
        case PlaneDelete.PLANE_DELETE_REQUEST:
            return { loading: true };
        case PlaneDelete.PLANE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PlaneDelete.PLANE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

// Plane Update
export const planeUpdateReducer = (state = {
    plane: {
        id: null,
        model: null, year: null, country: null, capacity: null, type: null, captain: null, image: "emptyImage"
    }, loading: false, success: false, error: null
}, action: UpdatePlaneAction) => {
    switch (action.type) {
        case PlaneUpdate.PLANE_UPDATE_REQUEST:
            return { loading: true };
        case PlaneUpdate.PLANE_UPDATE_SUCCESS:
            return { loading: false, success: true, plane: action.payload };
        case PlaneUpdate.PLANE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}