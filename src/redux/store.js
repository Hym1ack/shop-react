import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
