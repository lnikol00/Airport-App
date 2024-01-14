import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaneListState } from "../interfaces/types";

const initialState: PlaneListState = {
    planes: []
}

export const planeSlice = createSlice({
    name: "List Plane",
    initialState,
    reducers: {
        addPlane: (state, action: PayloadAction<any>) => {
            state.planes.push(action.payload)
        }
    }
})

export const { addPlane } = planeSlice.actions;
export const planeListReducer = planeSlice.reducer;

export const store = configureStore({
    reducer: {
        planeList: planeListReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch