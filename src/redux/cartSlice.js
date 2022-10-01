import { createSlice } from "@reduxjs/toolkit";

const setItemsToStorage = (item, amount, quantity, weight, discount) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(amount));
  localStorage.setItem("totalQuantity", JSON.stringify(quantity));
  localStorage.setItem("totalWeight", JSON.stringify(weight));
  localStorage.setItem("totalDiscount", JSON.stringify(discount));
};

const calcTotalAmountWeight = (state) => {
  state.totalAmount = state.cartItems.reduce(
    (total, item) => Math.round((total + item.totalPrice) * 100) / 100,
    0
  );

  state.totalWeight = state.cartItems.reduce(
    (total, item) => Math.round((total + item.fullWeight) * 100) / 100,
    0
  );

  state.totalDiscount = state.cartItems.reduce(
    (total, item) => Math.round((total + item.fullDiscount) * 100) / 100,
    0
  );

  setItemsToStorage(
    state.cartItems,
    state.totalAmount,
    state.totalQuantity,
    state.totalWeight,
    state.totalDiscount
  );
};

const items = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const totalAmount = localStorage.getItem("totalAmount")
  ? JSON.parse(localStorage.getItem("totalAmount"))
  : 0;

const totalQuantity = localStorage.getItem("totalQuantity")
  ? JSON.parse(localStorage.getItem("totalQuantity"))
  : 0;

const totalWeight = localStorage.getItem("totalWeight")
  ? JSON.parse(localStorage.getItem("totalWeight"))
  : 0;

const totalDiscount = localStorage.getItem("totalDiscount")
  ? JSON.parse(localStorage.getItem("totalDiscount"))
  : 0;

const initialState = {
  cartItems: items,
  totalAmount,
  totalQuantity,
  totalWeight,
  totalDiscount,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemPrice = newItem.newPrice || newItem.price;

      const discount = newItem.newPrice ? newItem.price - newItem.newPrice : 0;

      const itemExist = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );

      if (itemExist?.quantity >= itemExist?.availableCount) {
        return undefined;
      }

      state.totalQuantity += 1;

      if (itemExist) {
        itemExist.quantity += 1;
        itemExist.fullWeight =
          Math.round((itemExist.fullWeight + newItem.weight) * 100) / 100;

        itemExist.totalPrice =
          Math.round((itemExist.totalPrice + itemPrice) * 100) / 100;

        itemExist.fullDiscount =
          Math.round((itemExist.fullDiscount + discount) * 100) / 100;
      } else {
        state.cartItems.push({
          availableCount: newItem.availableCount,
          favorited: newItem.favorited,
          id: newItem.id,
          image: newItem.image,
          oldPrice: newItem.newPrice && newItem.price,
          price: itemPrice,
          productName: newItem.productName,
          quantity: 1,
          totalPrice: itemPrice,
          baseWeight: newItem.weight,
          fullWeight: newItem.weight,
          baseDiscount: discount,
          fullDiscount: discount,
        });
      }

      return calcTotalAmountWeight(state);
    },
    removeItem(state, action) {
      const id = action.payload;
      const itemExist = state.cartItems.find((item) => item.id === id);

      state.totalQuantity -= 1;

      if (itemExist.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        itemExist.quantity -= 1;

        itemExist.fullWeight =
          Math.round((itemExist.fullWeight - itemExist.baseWeight) * 100) / 100;

        itemExist.totalPrice =
          Math.round((itemExist.totalPrice - itemExist.price) * 100) / 100;

        itemExist.fullDiscount =
          Math.round((itemExist.fullDiscount - itemExist.baseDiscount) * 100) /
          100;
      }

      calcTotalAmountWeight(state);
    },
    addItem(state, action) {
      const id = action.payload;
      const itemExist = state.cartItems.find((item) => item.id === id);

      state.totalQuantity += 1;
      itemExist.quantity += 1;

      itemExist.fullWeight =
        Math.round((itemExist.fullWeight + itemExist.baseWeight) * 100) / 100;

      itemExist.totalPrice =
        Math.round((itemExist.totalPrice + itemExist.price) * 100) / 100;

      itemExist.fullDiscount =
        Math.round((itemExist.fullDiscount + itemExist.baseDiscount) * 100) /
        100;

      calcTotalAmountWeight(state);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.totalWeight = 0;
      state.totalDiscount = 0;

      setItemsToStorage(
        state.cartItems,
        state.totalAmount,
        state.totalQuantity,
        state.totalWeight,
        state.totalDiscount
      );
    },
    setNewPrice(state, action) {
      state.totalAmount = action.payload;
    },
  },
});

export const { addToCart, removeItem, clearCart, addItem, setNewPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
