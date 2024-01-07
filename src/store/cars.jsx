/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    vehicle: "",
}

const cars = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        updateId: (state, action) => {
            state.id = action.payload.id;
            state.vehicle = action.payload.vehicle;
        },
        resetId: (state) => {
            state.id = "";
            state.vehicle = "";
        }
    }
});


export const {updateId, resetId} = cars.actions;
export default cars.reducer