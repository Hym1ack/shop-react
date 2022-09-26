import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,

    cart: cartReducer,
  },
});
