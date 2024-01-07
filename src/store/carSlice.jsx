import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carList: [],
};

const carsSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.carList.push(action.payload);
    },
    removeCar: (state, action) => {
      state.carList = state.carList.filter((car) => car.vehicle !== action.payload.vehicle); 
    }
  },
});

export const { addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
