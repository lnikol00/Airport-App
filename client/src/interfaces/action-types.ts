// REDUX TYPES

import { PlaneCreate, PlaneDelete, PlaneDetails, PlanesList } from "../Redux/Constants/PlaneConstants"
import { Plane, PlaneList } from "./types"

// PLANE LIST
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

// PLANE DETAILS
export type PLANE_DETAILS_REQUEST = {
    type: PlaneDetails.PLANE_DETAILS_REQUEST
    payload: {}
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

// PLANE CREATE
export type PLANE_CREATE_REQUEST = {
    type: PlaneCreate.PLANE_CREATE_REQUEST
}

export type PLANE_CREATE_SUCCESS = {
    type: PlaneCreate.PLANE_CREATE_SUCCESS
    payload: Plane
}

export type PLANE_CREATE_FAIL = {
    type: PlaneCreate.PLANE_CREATE_FAIL
    payload: string
}

export type PLANE_CREATE_RESET = {
    type: PlaneCreate.PLANE_CREATE_RESET
}

export type CreatePlaneAction = PLANE_CREATE_REQUEST | PLANE_CREATE_FAIL | PLANE_CREATE_SUCCESS | PLANE_CREATE_RESET

// PLANE DELETE

export type PLANE_DELETE_REQUEST = {
    type: PlaneDelete.PLANE_DELETE_REQUEST
}

export type PLANE_DELETE_SUCCESS = {
    type: PlaneDelete.PLANE_DELETE_SUCCESS
}

export type PLANE_DELETE_FAIL = {
    type: PlaneDelete.PLANE_DELETE_FAIL
    payload: string
}

export type DeletePlaneAction = PLANE_DELETE_REQUEST | PLANE_DELETE_FAIL | PLANE_DELETE_SUCCESS 
