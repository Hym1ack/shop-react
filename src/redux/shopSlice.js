import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestoreDatabase } from "../firebase";

const fetchAllProducts = async () => {
  const data = await collection(firestoreDatabase, "products");
  const docs = await getDocs(data);
  const allProducts = [];

  docs.forEach((el) => {
    if (el.data().products === undefined) return null;
    return allProducts.push(el.data().products);
  });

  return allProducts.flat();
};

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
    const products = await fetchAllProducts();

    return products.find((product) =>
      product.id === Number(id) ? product : null
    );
  }
);

export const fetchFavouritesProducts = createAsyncThunk(
  "shop/fetchFavouritesProducts",
  async ([...idProducts]) => {
    const products = await fetchAllProducts();

    return products.filter((product) =>
      idProducts.find((id) => (product.id === Number(id) ? product : null))
    );
  }
);

export const fetchRecommendedProducts = createAsyncThunk(
  "shop/fetchRecommended",
  async () => {
    const products = await fetchAllProducts();

    return products.filter((product) => product.rating > 8);
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    isLoading: true,
    products: [],
    activeCategories: [],
    categories: [],
    title: "",
    recommendedProducts: [],
    favoritesProducts: [],
    sort: { value: "rating", label: "По популярности" },
  },
  reducers: {
    addCategory(state, action) {
      if (state.activeCategories.includes(action.payload)) {
        state.activeCategories = state.activeCategories.filter(
          (item) => item !== action.payload
        );
      } else {
        state.activeCategories.push(action.payload);
      }
    },
    clearCategories(state) {
      state.activeCategories = [];
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      const { activeCategories, products, categories, title } = action.payload;

      state.products = products;
      state.activeCategories = activeCategories;
      state.categories = categories;
      state.title = title;
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
    [fetchFavouritesProducts.fulfilled]: (state, action) => {
      state.favoritesProducts = action.payload;
    },
  },
});

export const { addCategory, clearCategories, setSort } = shopSlice.actions;
export default shopSlice.reducer;
