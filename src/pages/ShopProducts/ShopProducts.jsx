import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import s from "./ShopProducts.module.css";
import Sort from "../../components/Sort/Sort";
import Catalog from "../../components/Catalog/Catalog";
import Features from "../../components/Features/Features";
import { fetchRecommendedProducts } from "../../redux/shopSlice";
import Products from "../../components/Product/Products";
import CategoriesContainer from "../../components/Categories/CategoriesContainer";
import Slider from "../../components/Slider/Slider";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import NewGoods from "../../components/NewGoods/NewGoods";
import { useCatalog } from "../../hooks/useCatalog";

function ShopProducts() {
  const { recommendedProducts } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const { label } = useCatalog();

  useEffect(() => {
    dispatch(fetchRecommendedProducts());
  }, [dispatch]);

  return (
    <>
      <div className={s.topMain}>
        <h4 className={s.title}>{label || "Страница товаров"}</h4>
        <Sort />
      </div>
      <div className={s.shop}>
        <div className={s.catalog}>
          <Features />
          <Catalog />
        </div>
        <div className={s.productContainer}>
          <CategoriesContainer />
          <Products />
        </div>
      </div>
      <Slider title="Рекомендации для вас" type={1} titleStyle={s.sliderTitle}>
        {recommendedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Slider>
      <div className={s.newGoods}>
        <NewGoods />
      </div>
    </>
  );
}

export default ShopProducts;
