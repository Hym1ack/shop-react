import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import s from "./CartPage.module.css";
import Basket from "../../components/Basket/Basket";
import Delivery from "../../components/Delivery/Delivery";
import Slider from "../../components/Slider/Slider";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  clearRecommended,
  fetchRecommendedProducts,
} from "../../redux/shopSlice";

function CartPage() {
  const dispatch = useDispatch();
  const { recommendedProducts } = useSelector((state) => state.shop);
  const cartProducts = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(fetchRecommendedProducts());

    return () => dispatch(clearRecommended());
  }, [dispatch]);

  return (
    <>
      <div className={s.cart}>
        {cartProducts.length !== 0 ? (
          <>
            <Basket cartProducts={cartProducts} dispatch={dispatch} />
            <Delivery />
          </>
        ) : (
          <p className={s.nothing}>В корзине нет товаров</p>
        )}
      </div>
      <Slider title="Рекомендации для вас" type="items" titleStyle={s.slider}>
        {recommendedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Slider>
    </>
  );
}

export default CartPage;
