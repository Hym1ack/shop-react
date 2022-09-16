import { createSelector } from "@reduxjs/toolkit";

export const selectAllCategories = (state) => state.shop.water.categories;
export const selectAllCategoriesActive = (state) =>
  state.shop.water.activeCategories;
export const selectAllProducts = (state) => state.shop.water.products;

export const selectProductsByFilter = createSelector(
  [selectAllProducts, selectAllCategoriesActive],
  (allProducts, activeCategories) => {
    const filtered = allProducts.filter((product) => {
      if (activeCategories.includes(product.category)) return product;
      return false;
    });

    if (activeCategories.length !== 0) return filtered;
    return allProducts;
  }
);
