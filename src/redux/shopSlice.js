import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import firestoreDatabase from "../firebase";

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (category) => {
    const data = await doc(firestoreDatabase, "products", category);
    const docs = await getDoc(data);

    return docs.data();
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: true,
    products: {},
  },
  reducers: {
    addCategory(state, action) {
      if (state.products.activeCategories.includes(action.payload)) {
        state.products.activeCategories =
          state.products.activeCategories.filter(
            (item) => item !== action.payload
          );
      } else {
        state.products.activeCategories.push(action.payload);
      }
    },
    clearCategories(state) {
      state.products.activeCategories = [];
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addCategory, clearCategories } = shopSlice.actions;
export default shopSlice.reducer;
