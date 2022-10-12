import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import s from "./CartPage.module.css";
import Basket from "../../components/Basket/Basket";
import Delivery from "../../components/Basket/Delivery";
import Slider from "../../components/Slider/Slider";
import ProductCard from "../../components/Product/ProductCard/ProductCard";
import { addToCart } from "../../redux/cartSlice";

function CartPage() {
  const elements = useSelector((state) => state.shop.recommendedProducts);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.cart}>
        <Basket />
        <Delivery />
      </div>
      <Slider
        title="Рекомендации для вас"
        type={1}
        slidesPerView={4}
        titleStyle={{ marginBottom: "77px" }}
      >
        {elements.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              dispatch={dispatch}
              addToCart={addToCart}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </>
  );
}

export default CartPage;
