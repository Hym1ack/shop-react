import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { firestoreDatabase } from "../firebase";

const initialState = {
  userName: null,
  userId: null,
  phoneNumber: null,
  birthdayDate: null,
  email: null,
  bonuses: null,
  bonusCard: null,
  address: {
    city: null,
    street: null,
    apartment: null,
    floor: null,
    intercom: null,
    entrance: null,
  },
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
    bonuses: null,
    bonusCard: null,
    address: {
      city: null,
      street: null,
      apartment: null,
      floor: null,
      intercom: null,
      entrance: null,
    },
    orders: [],
    favoritesProductsId: [],
  };

  await setDoc(data, newUser);

  return newUser;
};

const saveOrderToUser = async (userId, orderId) => {
  const data = await doc(firestoreDatabase, "users", userId);

  await updateDoc(data, {
    orders: arrayUnion(orderId),
  });
};

export const newOrder = createAsyncThunk(
  "user/newOrder",
  async ({ userId, order }, { getState }) => {
    const orderId = Timestamp.now().seconds;
    const { cart } = getState();

    const {
      cartItems,
      totalAmount,
      totalDiscount,
      totalQuantity,
      totalWeight,
    } = cart;

    const cartIds = cartItems.map((item) => item.id);

    const newObj = {
      userId,
      cart: {
        totalAmount,
        totalDiscount,
        totalQuantity,
        totalWeight,
        cartIds,
      },
      order,
    };

    const ref = doc(firestoreDatabase, "orders", `${orderId}`);

    await setDoc(ref, newObj);
    await saveOrderToUser(userId, orderId);
  }
);

const addToFavorites = async (userId, products) => {
  try {
    const data = await doc(firestoreDatabase, "users", userId);

    await updateDoc(data, {
      favoritesProductsId: products,
    });

    return true;
  } catch (error) {
    return false;
  }
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
    useBonuses(state, action) {
      state.bonuses -= action.payload;
    },
    logout(state) {
      state.userName = null;
      state.userId = null;
      state.phoneNumber = null;
      state.birthdayDate = null;
      state.email = null;
      state.bonuses = null;
      state.address = {
        city: null,
        street: null,
        apartment: null,
        floor: null,
        intercom: null,
        entrance: null,
      };
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
        bonuses,
        address,
        orders,
        favoritesProductsId,
      } = action.payload;

      state.userName = userName;
      state.userId = userId;
      state.phoneNumber = phoneNumber;
      state.birthdayDate = birthdayDate;
      state.email = email;
      state.bonuses = bonuses;
      state.address = address;
      state.orders = orders;
      state.favoritesProductsId = favoritesProductsId;
    },
  },
});

export const { logout, toggleFavourite, useBonuses } = cartSlice.actions;
export default cartSlice.reducer;
