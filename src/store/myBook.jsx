import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [], // Mengganti book menjadi bookList
};

const book = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => { // Mengganti addCar menjadi addBook
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => { // Mengganti removeCar menjadi removeBook
      state.bookList = state.bookList.filter((book) => book.vehicle !== action.payload.vehicle); 
    }
  },
});

export const { addBook, removeBook } = book.actions; // Mengganti addCar dan removeCar menjadi addBook dan removeBook
export default book.reducer;
