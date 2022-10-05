import { createSelector } from "@reduxjs/toolkit";

const allCategoriesActive = (state) => state.shop.products.activeCategories;
const activeSort = (state) => state.shop.sort.value;

const allProducts = (state) => state.shop.products.products;

export const selectProductsByFilters = createSelector(
  [allProducts, allCategoriesActive, activeSort],
  (products, activeCategories, sort) => {
    const sortedProducts = products.slice();

    const lowerProduct = (letter) => letter.productName.toLowerCase();

    switch (sort) {
      case "rating":
        sortedProducts.sort((a, b) => a.rating - b.rating);
        break;

      case "priceUp":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;

      case "priceDown":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;

      case "alphabetUp":
        sortedProducts.sort((a, b) => {
          if (a === b) return 0;

          return lowerProduct(a) >= lowerProduct(b) ? 1 : -1;
        });
        break;

      case "alphabetDown":
        sortedProducts.sort((a, b) => {
          if (a === b) return 0;

          return lowerProduct(a) <= lowerProduct(b) ? 1 : -1;
        });
        break;

      default: {
        return sortedProducts;
      }
    }

    const filtered = sortedProducts.filter((product) => {
      if (activeCategories.includes(product.category)) return product;
      return false;
    });

    if (activeCategories.length !== 0) return filtered;
    return sortedProducts;
  }
);
