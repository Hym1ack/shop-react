import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const initialState = {
  userName: null,
  userId: null,
  phoneNumber: null,
  birthdayDate: null,
  email: null,
  orders: [],
  favoritesProducts: [],
};

export const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      const { displayName, email, phoneNumber, uid } = action.payload;

      state.userName = displayName;
      state.userId = uid;
      state.phoneNumber = phoneNumber;
      state.email = email;
    },
    async logout() {
      await signOut(auth);
    },
  },
});

export const { login, logout } = cartSlice.actions;
export default cartSlice.reducer;
