import { createSelector } from "@reduxjs/toolkit";

const allCategoriesActive = (state) => state.shop.products.activeCategories;
const allProducts = (state) => state.shop.products.products;
export const selectProductsByFilter = createSelector(
  [allProducts, allCategoriesActive],
  (products, activeCategories) => {
    const filtered = products.filter((product) => {
      if (activeCategories.includes(product.category)) return product;
      return false;
    });

    if (activeCategories.length !== 0) return filtered;
    return products;
  }
);
