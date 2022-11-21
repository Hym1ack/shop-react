import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firestoreDatabase } from "../firebase";

const initialState = {
  userName: null,
  userId: null,
  phoneNumber: null,
  birthdayDate: null,
  email: null,
  orders: [],
  favoritesProductsId: [],
};

const createUserDatabase = async (userName, userId, email) => {
  const data = await doc(firestoreDatabase, "users", userId);

  const newUser = {
    userName,
    userId,
    phoneNumber: null,
    birthdayDate: null,
    email,
    orders: [],
    favoritesProductsId: [],
  };

  await setDoc(data, newUser);

  return newUser;
};

const addToFavorites = async (userId, products) => {
  const data = await doc(firestoreDatabase, "users", userId);

  await updateDoc(data, {
    favoritesProductsId: products,
  });
};

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async ({ displayName, email, uid }) => {
    const data = await doc(firestoreDatabase, "users", uid);
    const docs = await getDoc(data);
    const user = docs.data();

    if (!user) {
      return createUserDatabase(displayName, uid, email);
    }
    return user;
  }
);

export const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavourite(state, action) {
      if (state.favoritesProductsId.includes(action.payload)) {
        state.favoritesProductsId = state.favoritesProductsId.filter(
          (item) => item !== action.payload
        );
      } else {
        state.favoritesProductsId.push(action.payload);
      }

      addToFavorites(state.userId, [...state.favoritesProductsId]);
    },
    logout(state) {
      state.userName = null;
      state.userId = null;
      state.phoneNumber = null;
      state.birthdayDate = null;
      state.email = null;
      state.orders = [];
      state.favoritesProductsId = [];
    },
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      const {
        userName,
        userId,
        phoneNumber,
        birthdayDate,
        email,
        orders,
        favoritesProductsId,
      } = action.payload;

      state.userName = userName;
      state.userId = userId;
      state.phoneNumber = phoneNumber;
      state.birthdayDate = birthdayDate;
      state.email = email;
      state.orders = orders;
      state.favoritesProductsId = favoritesProductsId;
    },
  },
});

export const { logout, toggleFavourite } = cartSlice.actions;
export default cartSlice.reducer;
