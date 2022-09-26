import s from "./Categories.module.css";

function Categories({
  addCategory,
  clearCategories,
  categories,
  categoriesActive,
  dispatch,
}) {
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
    <optgroup className={s.categoriesList}>
      {categoryElements}
      <option
        className={`${s.categoryClean} ${s.category}`}
        onClick={() => dispatch(clearCategories())}
      >
        Очистить фильтр
      </option>
    </optgroup>
  );
}

export default Categories;
