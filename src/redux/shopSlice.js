import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import firestoreDatabase from "../firebase";

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (category) => {
    const data = await doc(firestoreDatabase, "products", category);
    const docs = await getDoc(data);
    return docs.data();
  }
);

export const fetchRecommendedProducts = createAsyncThunk(
  "shop/fetchRecommended",
  async () => {
    const data = await collection(firestoreDatabase, "products");
    const docs = await getDocs(data);
    const allProducts = [];

    docs.forEach((el) => allProducts.push(el.data().products));

    return allProducts.flat().filter((product) => product.rating > 5);
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: true,
    products: {},
    recommendedProducts: [],
    sort: { value: "rating", label: "По популярности" },
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
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [fetchRecommendedProducts.fulfilled]: (state, action) => {
      state.recommendedProducts = action.payload;
    },
  },
});

export const { addCategory, clearCategories, setSort } = shopSlice.actions;
export default shopSlice.reducer;
