import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import sortReducer from "./sortSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    sort: sortReducer,
  },
});
