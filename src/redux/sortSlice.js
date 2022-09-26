import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: {
    label: "По популярности",
    value: "rating",
  },
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
