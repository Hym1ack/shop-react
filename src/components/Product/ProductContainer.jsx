import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { localeData } from "../../database/localeData";
import { fetchProducts } from "../../redux/shopSlice";
import Product from "./Product";
import s from "./Product.module.css";

function ProductContainer() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const { isLoading } = useSelector((state) => state.shop);

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
      {isLoading ? <p>Загрузка</p> : <Product />}
    </div>
  );
}

export default ProductContainer;
