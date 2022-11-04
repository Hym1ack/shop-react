import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectProductsByFilters } from "../../redux/selectors";
import Pagination from "../Pagination/Pagination";
import ProductSkeleton from "./ProductSkeleton/ProductSkeleton";
import { useCatalog } from "../../hooks/useCatalog";

import s from "./Products.module.css";
import { fetchProducts } from "../../redux/shopSlice";
import ProductCard from "./ProductCard/ProductCard";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsByFilters);
  const { isLoading } = useSelector((state) => state.shop);
  const { categories } = useCatalog();
  const [currentItems, setCurrentItems] = useState([]);

  const productSkeleton = [...new Array(9)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ProductSkeleton key={index} />
  ));

  useEffect(() => {
    dispatch(fetchProducts(categories));
  }, [dispatch, categories]);

  return (
    <>
      <div className={s.products}>
        {isLoading
          ? productSkeleton
          : currentItems.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>

      <Pagination products={products} setCurrentItems={setCurrentItems} />
    </>
  );
}

export default Products;
