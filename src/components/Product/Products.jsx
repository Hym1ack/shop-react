import { useSelector } from "react-redux";
import { selectProductsByFilters } from "../../redux/selectors";
import ProductCard from "./ProductCard/ProductCard";

function Products() {
  const products = useSelector(selectProductsByFilters);

  return products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));
}

export default Products;
