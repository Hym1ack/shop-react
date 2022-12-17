import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestoreDatabase } from "../firebase";

export const fetchProductsByName = createAsyncThunk(
  "shop/fetchProductsByName",
  async (name) => {
    const products = [];

    const docRef = collection(firestoreDatabase, "products");

    const q = query(
      docRef,
      where("productName", ">=", name),
      where("productName", "<=", `${name}\uf8ff`),
      limit(3)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    return products;
  }
);

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (categories) => {
    const products = [];
    const docRef = collection(firestoreDatabase, "products");

    const q = query(docRef, where("category", "in", categories));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products;
  }
);

export const fetchCategories = createAsyncThunk(
  "shop/fetchCategories",
  async (categories) => {
    const categoriesOut = [];
    const docRef = collection(firestoreDatabase, "categories");

    const q = query(docRef, where("key", "in", categories));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      categoriesOut.push(doc.data());
    });

    return categoriesOut;
  }
);

export const fetchProductById = createAsyncThunk(
  "shop/fetchProductById",
  async (id) => {
    const docRef = collection(firestoreDatabase, "products");

    const q = await query(docRef, where("id", "==", id));
    const querySnapshot = await getDocs(q);

    let product = {};
    querySnapshot.forEach((doc) => {
      product = doc.data();
    });

    return product;
  }
);

export const fetchProductsById = createAsyncThunk(
  "shop/fetchProductsById",
  async (id) => {
    const products = [];
    const docRef = collection(firestoreDatabase, "products");

    const q = await query(docRef, where("id", "in", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products;
  }
);

export const fetchFavouritesProducts = createAsyncThunk(
  "shop/fetchFavouritesProducts",
  async (idProducts) => {
    const docRef = collection(firestoreDatabase, "products");

    const q = await query(docRef, where("id", "in", idProducts));
    const querySnapshot = await getDocs(q);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products;
  }
);

export const fetchRecommendedProducts = createAsyncThunk(
  "shop/fetchRecommended",
  async () => {
    const docRef = collection(firestoreDatabase, "products");

    const q = await query(docRef, where("rating", ">=", 8));

    const querySnapshot = await getDocs(q);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return products;
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
    searchedProducts: [],
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
    clearFavorites(state) {
      state.favoritesProducts = [];
    },
    clearRecommended(state) {
      state.recommendedProducts = [];
    },
    clearSearchedProducts(state) {
      state.searchedProducts = [];
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
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
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
    [fetchProductsByName.fulfilled]: (state, action) => {
      state.searchedProducts = action.payload;
    },
    [fetchProductsById.fulfilled]: (state, action) => {
      state.productsHistory = action.payload;
    },
  },
});

export const {
  addCategory,
  clearCategories,
  clearFavorites,
  clearRecommended,
  clearSearchedProducts,
  setSort,
} = shopSlice.actions;
export default shopSlice.reducer;
