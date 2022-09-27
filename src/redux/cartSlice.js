import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const totalAmount = localStorage.getItem("totalAmount")
  ? JSON.parse(localStorage.getItem("totalAmount"))
  : 0;

const totalQuantity = localStorage.getItem("totalQuantity")
  ? JSON.parse(localStorage.getItem("totalQuantity"))
  : 0;

const setItemsToStorage = (item, amount, quantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(amount));
  localStorage.setItem("totalQuantity", JSON.stringify(quantity));
};

const initialState = {
  cartItems: items,
  totalAmount,
  totalQuantity,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemPrice = newItem.newPrice || newItem.price;

      const itemExist = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );

      state.totalAmount += itemPrice;
      state.totalQuantity += 1;

      if (itemExist) {
        itemExist.quantity += 1;
        itemExist.totalPrice += itemPrice;
      } else {
        state.cartItems.push({
          availableCount: newItem.availableCount,
          favorited: newItem.favorited,
          id: newItem.id,
          image: newItem.image,
          newPrice: newItem.newPrice,
          price: itemPrice,
          productName: newItem.productName,
          quantity: 1,
          totalPrice: itemPrice,
        });
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => Math.round((total + item.totalPrice) * 100) / 100,
        0
      );

      setItemsToStorage(
        state.cartItems,
        state.totalAmount,
        state.totalQuantity
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const itemExist = state.cartItems.find((item) => item.id === id);
      state.totalQuantity -= 1;

      if (itemExist.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        itemExist.quantity -= 1;
        itemExist.totalPrice =
          Math.round((itemExist.totalPrice - itemExist.price) * 100) / 100;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => Math.round((total + item.totalPrice) * 100) / 100,
        0
      );

      setItemsToStorage(
        state.cartItems,
        state.totalAmount,
        state.totalQuantity
      );
    },
    addItem(state, action) {
      const id = action.payload;
      const itemExist = state.cartItems.find((item) => item.id === id);
      state.totalQuantity += 1;

      itemExist.quantity += 1;

      itemExist.totalPrice =
        Math.round((itemExist.totalPrice + itemExist.price) * 100) / 100;

      state.totalAmount = state.cartItems.reduce(
        (total, item) => Math.round((total + item.totalPrice) * 100) / 100,
        0
      );

      setItemsToStorage(
        state.cartItems,
        state.totalAmount,
        state.totalQuantity
      );
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;

      setItemsToStorage(
        state.cartItems,
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const { addToCart, removeItem, clearCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;
