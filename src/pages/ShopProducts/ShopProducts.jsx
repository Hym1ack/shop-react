import s from "./ShopProducts.module.css";
import ProductContainer from "../../components/Product/ProductContainer";
import CategoriesContainer from "../../components/Categories/CategoriesContainer";
import Sort from "../../components/Sort/Sort";

function ShopProducts() {
  return (
    <div className={s.shop}>
      <Sort />
      <CategoriesContainer />
      <ProductContainer />;
    </div>
  );
}

export default ShopProducts;
