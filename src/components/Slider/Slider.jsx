import { Swiper } from "swiper/react";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

import "./Slider.css";

function Slider({ title, titleStyle, children, type, slidesPerView }) {
  const buttons = (typeBtn) => {
    if (typeBtn === 1) {
      return (
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
      );
    }
    return (
      <>
        <button className="carousel-prev" type="button">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 47.5C11.0417 47.5 0.5 36.9583 0.5 24C0.5 11.0418 11.0436 0.499996 24 0.499997C36.9564 0.499997 47.5 11.0418 47.5 24C47.5 36.9583 36.9583 47.5 24 47.5Z"
              fill="#FFF8EB"
              stroke="#FFF1D6"
            />
            <path
              d="M25.0153 18.2897L20.0377 23.2672C19.6515 23.6555 19.6515 24.2826 20.0377 24.6709L25.0153 29.6484C25.3876 29.9679 25.9381 29.9679 26.3104 29.6484C26.7275 29.291 26.7763 28.6619 26.4189 28.2447L22.1482 23.974L26.4189 19.6933C26.8052 19.3051 26.8052 18.6779 26.4189 18.2897C26.0307 17.9034 25.4035 17.9034 25.0153 18.2897Z"
              fill="#323232"
            />
          </svg>
        </button>
        <button className="carousel-next" type="button">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 47.5C36.9583 47.5 47.5 36.9583 47.5 24C47.5 11.0418 36.9564 0.499996 24 0.499997C11.0436 0.499997 0.500003 11.0418 0.500004 24C0.500004 36.9583 11.0417 47.5 24 47.5Z"
              fill="#FFF8EB"
              stroke="#FFF1D6"
            />
            <path
              d="M22.9847 18.2897L27.9623 23.2672C28.3485 23.6555 28.3485 24.2826 27.9623 24.6709L22.9847 29.6484C22.6124 29.9679 22.0619 29.9679 21.6896 29.6484C21.2725 29.291 21.2237 28.6619 21.5811 28.2447L25.8518 23.974L21.5811 19.6933C21.1948 19.3051 21.1948 18.6779 21.5811 18.2897C21.9693 17.9034 22.5965 17.9034 22.9847 18.2897Z"
              fill="#323232"
            />
          </svg>
        </button>
      </>
    );
  };

  return (
    <div className="sliderContainer">
      {title && (
        <h6 className="title" style={titleStyle}>
          {title}
        </h6>
      )}
      {buttons(type)}
      <Swiper
        slidesPerView={slidesPerView}
        pagination={
          type === 2 && {
            el: `.carousel-pagination`,
          }
        }
        modules={[Navigation, Pagination]}
        className={type === 1 ? "sliderType1" : "sliderType2"}
        spaceBetween={27}
        loop
        navigation={
          type === 1
            ? {
                nextEl: `.carousel-recommendation-next`,
                prevEl: `.carousel-recommendation-prev`,
              }
            : {
                prevEl: `.carousel-prev`,
                nextEl: `.carousel-next`,
              }
        }
      >
        {children}
      </Swiper>
      {type === 2 && <div className="carousel-pagination" />}
    </div>
  );
}

export default Slider;

/*

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import { Navigation } from "swiper";
import s from "./Slider.css";

import Product from "../Product/Product";
import { addToCart } from "../../redux/cartSlice";

function Slider({ title, titleStyle }) {
  const dispatch = useDispatch();
  const recProducts = useSelector((state) => state.shop.recommendedProducts);

  return (
    <div className={s.block}>
      <h6 className={s.title} style={titleStyle}>
        {title}
      </h6>
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

export default Slider;

 */

/*

<div className={s.sliderContainer}>
          <button className="carousel-home-prev" type="button">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 47.5C11.0417 47.5 0.5 36.9583 0.5 24C0.5 11.0418 11.0436 0.499996 24 0.499997C36.9564 0.499997 47.5 11.0418 47.5 24C47.5 36.9583 36.9583 47.5 24 47.5Z"
                fill="#FFF8EB"
                stroke="#FFF1D6"
              />
              <path
                d="M25.0153 18.2897L20.0377 23.2672C19.6515 23.6555 19.6515 24.2826 20.0377 24.6709L25.0153 29.6484C25.3876 29.9679 25.9381 29.9679 26.3104 29.6484C26.7275 29.291 26.7763 28.6619 26.4189 28.2447L22.1482 23.974L26.4189 19.6933C26.8052 19.3051 26.8052 18.6779 26.4189 18.2897C26.0307 17.9034 25.4035 17.9034 25.0153 18.2897Z"
                fill="#323232"
              />
            </svg>
          </button>
          <button className="carousel-home-next" type="button">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 47.5C36.9583 47.5 47.5 36.9583 47.5 24C47.5 11.0418 36.9564 0.499996 24 0.499997C11.0436 0.499997 0.500003 11.0418 0.500004 24C0.500004 36.9583 11.0417 47.5 24 47.5Z"
                fill="#FFF8EB"
                stroke="#FFF1D6"
              />
              <path
                d="M22.9847 18.2897L27.9623 23.2672C28.3485 23.6555 28.3485 24.2826 27.9623 24.6709L22.9847 29.6484C22.6124 29.9679 22.0619 29.9679 21.6896 29.6484C21.2725 29.291 21.2237 28.6619 21.5811 28.2447L25.8518 23.974L21.5811 19.6933C21.1948 19.3051 21.1948 18.6779 21.5811 18.2897C21.9693 17.9034 22.5965 17.9034 22.9847 18.2897Z"
                fill="#323232"
              />
            </svg>
          </button>

          <Swiper
            slidesPerView={1}
            loop
            navigation={{
              prevEl: `.carousel-home-prev`,
              nextEl: `.carousel-home-next`,
            }}
            pagination={{
              el: `.carousel-pagination`,
            }}
            modules={[Navigation, Pagination]}
            className={s.slider}
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.to}
                style={{
                  backgroundImage: `url(${sliderImg})`,
                  height: "460px",
                }}
              >
                <h6 className={s.sliderTitle}>{slide.title}</h6>
                <Link className={s.buttonLink} to={slide.to}>
                  Перейти к покупкам
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="carousel-pagination" />
        </div>

 */
