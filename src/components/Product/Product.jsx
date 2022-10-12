import { useSelector } from "react-redux";
import s from "./Product.module.css";
import ProductCard from "./ProductCard/ProductCard";
import CategoriesContainer from "../Categories/CategoriesContainer";
import { selectProductsByFilters } from "../../redux/selectors";

function Product() {
  const products = useSelector(selectProductsByFilters);

  return (
    <>
      <div className={s.categories}>
        <CategoriesContainer />
      </div>

      <div className={s.products}>
        {products.length === 0 && <p>Товаров не найдено</p>}
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Product;
