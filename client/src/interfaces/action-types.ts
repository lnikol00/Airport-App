// REDUX TYPES

import { PlaneDetails, PlanesList } from "../Redux/Constants/PlaneConstants"
import { Plane, PlaneList } from "./types"

// Plane List
export type PLANE_LIST_REQUEST = {
    type: PlanesList.PLANE_LIST_REQUEST
    payload: []
}

export type PLANE_LIST_SUCCESS = {
    type: PlanesList.PLANE_LIST_SUCCESS
    payload: PlaneList
}

export type PLANE_LIST_FAIL = {
    type: PlanesList.PLANE_LIST_FAIL
    payload: string
}

export type AllPlanesAction = PLANE_LIST_FAIL | PLANE_LIST_REQUEST | PLANE_LIST_SUCCESS

// Single Plane Type
export type PLANE_DETAILS_REQUEST = {
    type: PlaneDetails.PLANE_DETAILS_REQUEST
    payload: Plane
}

export type PLANE_DETAILS_SUCCESS = {
    type: PlaneDetails.PLANE_DETAILS_SUCCESS
    payload: Plane
}

export type PLANE_DETAILS_FAIL = {
    type: PlaneDetails.PLANE_DETAILS_FAIL
    payload: string
}

export type SinglePlaneAction = PLANE_DETAILS_FAIL | PLANE_DETAILS_REQUEST | PLANE_DETAILS_SUCCESS