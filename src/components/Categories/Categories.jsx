import { useDispatch, useSelector } from "react-redux";
import s from "./Categories.module.css";
import { addCategory, clearCategories } from "../../redux/shopSlice";
import {
  selectAllCategories,
  selectAllCategoriesActive,
} from "../../redux/selectors";

function Categories() {
  const categories = useSelector(selectAllCategories);
  const categoriesActive = useSelector(selectAllCategoriesActive);
  const dispatch = useDispatch();

  const categoryElements = categories.map((category, i) => (
    <option
      onClick={() => dispatch(addCategory(categories[i].key))}
      className={
        categoriesActive.includes(categories[i].key)
          ? `${s.categoryActive} ${s.category}`
          : s.category
      }
      key={category.key}
    >
      {category.name}
    </option>
  ));

  return (
    <div className={s.categories}>
      <optgroup className={s.categoriesList}>
        {categoryElements}
        <option
          className={`${s.categoryClean} ${s.category}`}
          onClick={() => dispatch(clearCategories())}
        >
          Очистить фильтр
        </option>
      </optgroup>
    </div>
  );
}

export default Categories;
