import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import s from "./Product.module.css";
import { linksCatalog } from "../../database/linksCatalog";
import { fetchProducts } from "../../redux/shopSlice";
import Products from "./Products";
import CategoriesContainer from "../Categories/CategoriesContainer";

function ProductContainer() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const { isLoading } = useSelector((state) => state.shop);

  const catalog = linksCatalog.reduce((acc, links) => {
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
      <div className={s.categories}>
        <CategoriesContainer />
      </div>
      {!isLoading && <Products />}
    </div>
  );
}

export default ProductContainer;
