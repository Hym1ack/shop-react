import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import s from "./ShopProducts.module.css";
import Sort from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";
import Features from "../../components/Features/Features";
import { fetchProducts } from "../../redux/shopSlice";
import ProductSkeleton from "../../components/Product/ProductSkeleton/ProductSkeleton";
import Products from "../../components/Product/Products";
import { useCatalog } from "../../hooks/useCatalog";
import CategoriesSkeleton from "../../components/Categories/CategoriesSkeleton";
import CategoriesContainer from "../../components/Categories/CategoriesContainer";

function ShopProducts() {
  const { isLoading } = useSelector((state) => state.shop);
  const title = useSelector((state) => state.shop.products.title);
  const dispatch = useDispatch();
  const loadCatalog = useCatalog().to;

  useEffect(() => {
    dispatch(fetchProducts(loadCatalog));
  }, [dispatch, loadCatalog]);

  const productSkeleton = [...new Array(9)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ProductSkeleton key={index} />
  ));

  return (
    <>
      <div className={s.topMain}>
        <h4 className={s.title}>{title || "Страница товаров"}</h4>
        <Sort />
      </div>
      <div className={s.shop}>
        <div className={s.catalog}>
          <Features />
          <Catalog />
        </div>
        <div className={s.productContainer}>
          <div className={s.categories}>
            {isLoading ? <CategoriesSkeleton /> : <CategoriesContainer />}
          </div>
          <div className={s.products}>
            {isLoading ? productSkeleton : <Products />}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopProducts;
