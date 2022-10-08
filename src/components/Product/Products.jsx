import { useDispatch, useSelector } from "react-redux";
import s from "./Product.module.css";
import Product from "./Product";
import { selectProductsByFilters } from "../../redux/selectors";
import { addToCart } from "../../redux/cartSlice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsByFilters);
  return (
    <div className={s.products}>
      {products.length === 0 && <p>Товаров не найдено</p>}
      {products.map((product) => (
        <Product
          dispatch={dispatch}
          addToCart={addToCart}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default Products;
