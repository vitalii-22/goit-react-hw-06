import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "Rosie",
    },
  },
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilte } = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
