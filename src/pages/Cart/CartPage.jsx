import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import s from "./CartPage.module.css";
import Basket from "../../components/Basket/Basket";
import Delivery from "../../components/Basket/Delivery";
import Slider from "../../components/Slider/Slider";
import Product from "../../components/Product/Product";
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
      <Slider title="Рекомендации для вас" type={1} slidesPerView={4}>
        {elements.map((product) => (
          <SwiperSlide key={product.id}>
            <Product
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
