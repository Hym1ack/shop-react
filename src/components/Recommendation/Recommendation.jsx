import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import { Navigation } from "swiper";
import s from "./Recommendation.module.css";

import Product from "../Product/Product";
import { addToCart } from "../../redux/cartSlice";

function Recommendation() {
  const dispatch = useDispatch();
  const recProducts = useSelector((state) => state.shop.recommendedProducts);

  return (
    <div className={s.block}>
      <h6 className={s.title}>Рекомендации для вас</h6>
      <div className="carousel-recommendation-buttons">
        <button type="button" className="carousel-recommendation-prev">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14.5" cy="14.5" r="14.5" fill="#FFA900" />
            <path
              d="M15.3068 9.28979L10.3292 14.2673C9.94299 14.6556 9.94299 15.2827 10.3292 15.671L15.3068 20.6485C15.6791 20.9681 16.2296 20.9681 16.6019 20.6485C17.019 20.2911 17.0678 19.662 16.7104 19.2449L12.4397 14.9741L16.7105 10.6935C17.0967 10.3052 17.0967 9.67806 16.7105 9.28979C16.3222 8.90353 15.695 8.90353 15.3068 9.28979Z"
              fill="white"
            />
          </svg>
        </button>
        <button type="button" className="carousel-recommendation-next">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14.5" cy="14.5" r="14.5" fill="#FFA900" />
            <path
              d="M13.6932 9.28979L18.6708 14.2673C19.057 14.6556 19.057 15.2827 18.6708 15.671L13.6932 20.6485C13.3209 20.9681 12.7704 20.9681 12.3981 20.6485C11.981 20.2911 11.9322 19.662 12.2896 19.2449L16.5603 14.9741L12.2895 10.6935C11.9033 10.3052 11.9033 9.67806 12.2895 9.28979C12.6778 8.90353 13.305 8.90353 13.6932 9.28979Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <Swiper
        spaceBetween={27}
        slidesPerView={4}
        loop
        navigation={{
          nextEl: `.carousel-recommendation-next`,
          prevEl: `.carousel-recommendation-prev`,
        }}
        modules={[Navigation]}
      >
        {recProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Product
              product={product}
              dispatch={dispatch}
              addToCart={addToCart}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Recommendation;
