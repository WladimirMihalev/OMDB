import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Search: [],
  message: "",
};

export const filmReducers = createSlice({
  name: "@films",
  initialState: initialState,

  reducers: {
    getFilms: (state, { type, payload }) => ({
      ...state,
      ...payload,
    }),

    errorMesage: (state, action) => ({
      ...state,
      message: action.payload,
    }),

    getOneFilm: (state, { type, payload }) => ({
      ...state,
      ...payload,
    }),
  },
});
export const { getFilms, errorMesage } = filmReducers.actions;
export default filmReducers.reducer;
