import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  water: {
    title: "Напитки",
    categories: [
      { key: "water", name: "Вода" },
      { key: "juice", name: "Соки" },
      { key: "tea", name: "Холодный чай и кофе" },
      { key: "lemonade", name: "Лимонады" },
    ],
    activeCategories: [],
    products: [
      {
        id: 1,
        image:
          "https://vkusniy.shop/wa-data/public/shop/products/58/31/3158/images/4108/4108.380x0.jpg",
        availableCount: 12,
        price: 99.99,
        newPrice: null,
        productName: "Сок Ideas тыквенно-апельсиновый, 1л",
        favorited: false,
        category: "juice",
      },
      {
        id: 2,
        image:
          "https://orzon.uz/upload/iblock/163/163c7cc8c4a765b379cc45394519ce91.jpg",
        availableCount: 32,
        price: 123.99,
        newPrice: 67.45,
        productName: "Гранола Мюсли Bionova ягодные запечённые хрустящие, 400г",
        favorited: false,
        category: "juice",
      },
      {
        id: 5,
        image:
          "https://media.vprok.ru/products/x155/3n/cn/o46n2varozvs2wku4bqgmjah7axlcn3n.jpeg",
        availableCount: 2,
        price: 299,
        newPrice: null,
        productName: "Вода Evian минеральная столовая негазированная 1.5л",
        favorited: true,
        category: "water",
      },
      {
        id: 3,
        image:
          "https://vkusniy.shop/wa-data/public/shop/products/57/31/3157/images/4107/4107.380x0.jpg",
        availableCount: 2,
        price: 23,
        newPrice: null,
        productName: "Сок Ideas тыквенно-апельсиновый, 1л",
        favorited: true,
        category: "juice",
      },
      {
        id: 4,
        image:
          "https://media.vprok.ru/products/x155/s5/r2/ngkeugpuochyhmi24xnepgh7n5cqr2s5.jpeg",
        availableCount: 1,
        price: 39.9,
        newPrice: 29.9,
        productName: "Вода Сенежская Premium минеральная негазированная 1.5л",
        favorited: true,
        category: "water",
      },
    ],
  },
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCategory(state, action) {
      if (state.water.activeCategories.includes(action.payload)) {
        state.water.activeCategories = state.water.activeCategories.filter(
          (item) => item !== action.payload
        );
      } else {
        state.water.activeCategories.push(action.payload);
      }
    },
    clearCategories(state) {
      state.water.activeCategories = [];
    },
  },
});

export const { addCategory, clearCategories } = shopSlice.actions;
export default shopSlice.reducer;
