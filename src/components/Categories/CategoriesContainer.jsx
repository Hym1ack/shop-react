import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import Categories from "./Categories";
import {
  addCategory,
  clearCategories,
  fetchCategories,
} from "../../redux/shopSlice";
import CategoriesSkeleton from "./CategoriesSkeleton";
import s from "./Categories.module.css";
import { useCatalog } from "../../hooks/useCatalog";

function CategoriesContainer() {
  const dispatch = useDispatch();
  const { isLoading, activeCategories, categories } = useSelector(
    (state) => state.shop
  );

  const categoriesCatalog = useCatalog().categories;

  useEffect(() => {
    dispatch(fetchCategories(categoriesCatalog));
  }, [categoriesCatalog, dispatch]);

  if (!categories) {
    return (
      <p style={{ fontSize: 36, color: "#ff0000" }}>
        В выбранной категории нету товаров
      </p>
    );
  }

  return (
    <div className={s.categories}>
      {isLoading ? (
        <CategoriesSkeleton />
      ) : (
        <Categories
          categories={categories}
          categoriesActive={activeCategories}
          dispatch={dispatch}
          addCategory={addCategory}
          clearCategories={clearCategories}
        />
      )}
    </div>
  );
}

export default CategoriesContainer;
