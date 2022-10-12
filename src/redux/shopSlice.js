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

export const fetchProductById = createAsyncThunk(
  "shop/fetchProductById",
  async (id) => {
    const data = await collection(firestoreDatabase, "products");
    const docs = await getDocs(data);
    const allProducts = [];

    docs.forEach((el) => allProducts.push(el.data().products));

    return allProducts
      .flat()
      .find((product) => (product.id === Number(id) ? product : null));
  }
);

export const fetchRecommendedProducts = createAsyncThunk(
  "shop/fetchRecommended",
  async () => {
    const data = await collection(firestoreDatabase, "products");
    const docs = await getDocs(data);
    const allProducts = [];

    docs.forEach((el) => allProducts.push(el.data().products));

    return allProducts.flat().filter((product) => product.rating > 8);
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: true,
    products: [],
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
    [fetchProductById.fulfilled]: (state, action) => {
      const isUniq = state.products.includes(
        (product) => product.id === action.payload.id
      );

      if (!isUniq) {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addCategory, clearCategories, setSort } = shopSlice.actions;
export default shopSlice.reducer;
