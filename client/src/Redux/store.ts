import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { planeCreateReducer, planeDeleteReducer, planeDetailsReducer, planeListReducer, planeUpdateReducer } from "./Reducers/PlaneReducers";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    planeList: planeListReducer,
    planeDetails: planeDetailsReducer,
    planeCreate: planeCreateReducer,
    planeDelete: planeDeleteReducer,
    planeUpdate: planeUpdateReducer
})

const middleware = [thunk]

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(middleware)
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch