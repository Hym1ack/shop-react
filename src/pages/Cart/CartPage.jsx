import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import s from "./CartPage.module.css";
import Basket from "../../components/Basket/Basket";
import Delivery from "../../components/Basket/Delivery";
import Slider from "../../components/Slider/Slider";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  clearRecommended,
  fetchRecommendedProducts,
} from "../../redux/shopSlice";

function CartPage() {
  const elements = useSelector((state) => state.shop.recommendedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedProducts());

    return () => dispatch(clearRecommended());
  }, [dispatch]);

  return (
    <>
      <div className={s.cart}>
        <Basket />
        <Delivery />
      </div>
      <Slider title="Рекомендации для вас" type="items" titleStyle={s.slider}>
        {elements.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Slider>
    </>
  );
}

export default CartPage;
