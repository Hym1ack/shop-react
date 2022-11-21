import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AppLink from "../../components/UiKit/AppLink";
import cashbackImg from "../../assets/images/main/cashbackButton.png";
import reviewImg from "../../assets/images/main/reviewButton.png";
import sliderImg from "../../assets/images/main/slider1.png";

import s from "./Home.module.css";
import Slider from "../../components/Slider/Slider";
import { banners, localeData, slidesHome } from "../../database/localeData";
import DeliveryInfo from "../../components/DeliveryInfo/DeliveryInfo";
import Promo from "../../components/Promo/Promo";
import Rating from "../../components/Rating/Rating";
import ProductCard from "../../components/ProductCard/ProductCard";

import {
  clearRecommended,
  fetchRecommendedProducts,
} from "../../redux/shopSlice";

function Home() {
  const { recommendedProducts } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedProducts());

    return () => dispatch(clearRecommended());
  }, [dispatch]);

  const orderLinks = localeData.slice();
  [orderLinks[0], orderLinks[1]] = [orderLinks[1], orderLinks[0]];

  return (
    <div className={s.home}>
      <div className={s.top}>
        <Slider type="main">
          {slidesHome.map((slide) => (
            <SwiperSlide
              key={slide.to}
              style={{
                backgroundImage: `url(${sliderImg})`,
                backgroundSize: "cover",
                width: "100%",
              }}
            >
              <div className={s.slide}>
                <h6 className={s.sliderTitle}>{slide.title}</h6>
                <AppLink className={s.buttonLink} to={slide.to}>
                  Перейти к покупкам
                </AppLink>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
        <div className={s.buttonsRight}>
          <img className={s.img} src={cashbackImg} alt="cashback" />
          <img className={s.img} src={reviewImg} alt="review" />
        </div>
      </div>

      <div className={s.sales}>
        <Slider
          title="Скидки"
          titleStyle={s.saleTitle}
          type="items"
          paginationClass="productsPagination"
        >
          {recommendedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>

      {orderLinks.map((linkObj) => (
        <div className={s.sliderLinks} key={linkObj.title}>
          <Slider
            type="links"
            title={linkObj.title}
            titleStyle={s.itemTitle}
            isGrid={linkObj.items.length > 4}
            className={s.sliderWrapper}
          >
            {linkObj.items.map((item) => (
              <SwiperSlide key={item.label} className={s.linkSlide}>
                <Link
                  className={s.link}
                  key={item.title}
                  style={{
                    borderColor: linkObj.borderColor,
                    backgroundColor: linkObj.backgroundColor,
                  }}
                  to={`shop/${item.to}`}
                >
                  <h5 className={s.text}>{item.label}</h5>
                  <img className={s.image} src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      ))}

      <div className={s.sales}>
        <Slider
          type="banners"
          paginationClass="bannersPag"
          title="Акции"
          titleStyle={s.saleTitle}
        >
          <div className={s.banners}>
            {banners.map((banner) => (
              <SwiperSlide key={banner.title} className={s.bannerSlide}>
                <div
                  className={s.banner}
                  style={{
                    backgroundImage: `url(${banner.bgImage})`,
                  }}
                >
                  <h6 className={s.bannerText}>{banner.title}</h6>
                  {banner.coupon && (
                    <p className={`${s.bannerCoupon} swiper-no-swiping`}>
                      {banner.coupon}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Slider>
      </div>

      <div className={s.delivery}>
        <DeliveryInfo />
      </div>
      <div className={s.promoBlock}>
        <Promo />
      </div>
      <div className={s.ratingBlock}>
        <Rating />
      </div>
    </div>
  );
}

export default Home;
