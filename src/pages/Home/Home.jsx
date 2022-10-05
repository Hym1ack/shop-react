import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

import cashbackImg from "../../assets/images/main/cashbackButton.png";
import reviewImg from "../../assets/images/main/reviewButton.png";
import sliderImg from "../../assets/images/main/slider1.png";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import s from "./Home.module.css";
import "../../utils/mySwiper.css";
import Recommendation from "../../components/Recommendation/Recommendation";
import { linksCatalog } from "../../database/linksCatalog";

function Home() {
  const slides = [
    {
      title: "Начните день с вкусной выпечки из нашей кулинарии",
      to: "shop/bakery",
    },
    { title: "Заморозка", to: "shop/water" },
    { title: "Супермаркет", to: "shop/dumplings" },
  ];

  const orderLinks = linksCatalog.slice();
  [orderLinks[0], orderLinks[1]] = [orderLinks[1], orderLinks[0]];

  return (
    <div className={s.home}>
      <div className={s.top}>
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

        <div className={s.buttonsRight}>
          <img src={cashbackImg} alt="" />
          <img src={reviewImg} alt="" />
        </div>
      </div>
      <div className={s.sales}>
        <Recommendation title="Скидки" titleStyle={{ marginBottom: "34px" }} />
      </div>
      <div className={s.categories}>
        {orderLinks.map((obj) => (
          <div key={obj.title}>
            <h4 className={s.itemTitle}>{obj.title}</h4>
            <div className={s.items}>
              {obj.items.map((item) => (
                <Link
                  className={s.link}
                  style={{
                    backgroundColor: obj.backgroundColor,
                    borderColor: obj.borderColor,
                  }}
                  to={`shop/${item.to}`}
                  key={item.label}
                >
                  <h5 className={s.text}>{item.label}</h5>
                  <img className={s.image} src={item.image} alt="" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
