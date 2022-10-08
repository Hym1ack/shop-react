import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import s from "./Product.module.css";
import { localeData } from "../../database/localeData";
import { fetchProducts } from "../../redux/shopSlice";
import CategoriesContainer from "../Categories/CategoriesContainer";
import Products from "./Products";

function ProductContainer() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const { isLoading, products } = useSelector((state) => state.shop);

  const catalog = localeData.reduce((acc, links) => {
    let result = { ...acc };
    links.items.forEach((link) => {
      if (location.includes(link.to)) result = link;
    });
    return result;
  }, {});

  useEffect(() => {
    dispatch(fetchProducts(catalog.to));
  }, [catalog.to, dispatch]);

  return (
    <div className={s.productContainer}>
      {products === undefined ? (
        <p>В этой категории нет товаров.</p>
      ) : (
        <>
          <div className={s.categories}>
            <CategoriesContainer />
          </div>
          {!isLoading && <Products />}
        </>
      )}
    </div>
  );
}

export default ProductContainer;
