import { useSelector } from "react-redux";
import s from "./Product.module.css";
import Product from "./Product";
import { selectProductsByFilter } from "../../redux/selectors";

function ProductContainer() {
  const products = useSelector(selectProductsByFilter);

  const productsElements = products.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return <div className={s.products}>{productsElements}</div>;
}

export default ProductContainer;
