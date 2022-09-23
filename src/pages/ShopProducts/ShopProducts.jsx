import { useSelector } from "react-redux";
import s from "./ShopProducts.module.css";
import Sort from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";
import ProductContainer from "../../components/Product/ProductContainer";

function ShopProducts() {
  const title = useSelector((state) => state.shop.products.title);
  return (
    <div className={s.shop}>
      <div className={s.title}>{title}</div>
      <div className={s.features}>title</div>
      <div className={s.catalog}>
        <Catalog />
      </div>
      <div className={s.sort}>
        <Sort />
      </div>
      <div className={s.products}>
        <ProductContainer />
      </div>
    </div>
  );
}

export default ShopProducts;
