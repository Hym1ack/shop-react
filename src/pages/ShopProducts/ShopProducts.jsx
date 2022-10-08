import { useSelector } from "react-redux";
import s from "./ShopProducts.module.css";
import Sort from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";
import ProductContainer from "../../components/Product/ProductContainer";
import Features from "../../components/Features/Features";

function ShopProducts() {
  const title =
    useSelector((state) => state.shop.products?.title) || "Страница товаров";
  return (
    <>
      <div className={s.topMain}>
        <h4 className={s.title}>{title}</h4>
        <Sort />
      </div>
      <div className={s.shop}>
        <div className={s.catalog}>
          <Features />
          <Catalog />
        </div>
        <ProductContainer />
      </div>
    </>
  );
}

export default ShopProducts;
