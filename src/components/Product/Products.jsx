import { useSelector } from "react-redux";
import s from "./Product.module.css";
import Product from "./Product";
import { selectProductsByFilter } from "../../redux/selectors";

function Products() {
  const products = useSelector(selectProductsByFilter);

  return (
    <div className={s.products}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
