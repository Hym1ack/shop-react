import { useDispatch, useSelector } from "react-redux";

import Categories from "./Categories";
import { addCategory, clearCategories } from "../../redux/shopSlice";

function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, activeCategories } = useSelector(
    (state) => state.shop.products
  );

  if (!categories) {
    return (
      <p style={{ fontSize: 36, color: "#ff0000" }}>
        В выбранной категории нету товаров
      </p>
    );
  }
  return (
    <Categories
      categories={categories}
      categoriesActive={activeCategories}
      dispatch={dispatch}
      addCategory={addCategory}
      clearCategories={clearCategories}
    />
  );
}

export default CategoriesContainer;
