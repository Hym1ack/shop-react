import { useDispatch, useSelector } from "react-redux";

import Categories from "./Categories";
import { addCategory, clearCategories } from "../../redux/shopSlice";

function CategoriesContainer() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.shop);
  const { categories, activeCategories } = products;

  if (isLoading) {
    return <div>Loading</div>;
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
