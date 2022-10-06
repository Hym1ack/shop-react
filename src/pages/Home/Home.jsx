import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cashbackImg from "../../assets/images/main/cashbackButton.png";
import reviewImg from "../../assets/images/main/reviewButton.png";
import sliderImg from "../../assets/images/main/slider1.png";
import deliveryMap from "../../assets/images/main/deliveryMap.png";

import s from "./Home.module.css";
import Slider from "../../components/Slider/Slider";
import { banners, localeData, slidesHome } from "../../database/localeData";
import Product from "../../components/Product/Product";
import { addToCart } from "../../redux/cartSlice";

function Home() {
  const elements = useSelector((state) => state.shop.recommendedProducts);
  const dispatch = useDispatch();

  const orderLinks = localeData.slice();
  [orderLinks[0], orderLinks[1]] = [orderLinks[1], orderLinks[0]];

  return (
    <div className={s.home}>
      <div className={s.top}>
        <Slider type={2}>
          {slidesHome.map((slide) => (
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
        </Slider>

        <div className={s.buttonsRight}>
          <img src={cashbackImg} alt="cashback" />
          <img src={reviewImg} alt="review" />
        </div>
      </div>
      <div className={s.sales}>
        <Slider
          title="Скидки"
          titleStyle={{ marginBottom: "34px" }}
          type={1}
          slidesPerView={4}
        >
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
      </div>

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

      <div className={s.sales}>
        <Slider
          title="Акции"
          titleStyle={{ marginBottom: "34px" }}
          type={1}
          slidesPerView={4}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.title}>
              <div
                className={s.banner}
                style={{
                  backgroundImage: `url(${banner.bgImage})`,
                  height: "449px",
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
        </Slider>
      </div>
      <div className={s.delivery}>
        <h4 className={s.deliveryTitle}>ДОСТАВКА И ОПЛАТА</h4>
        <div className={s.deliveryWrapper}>
          <div className={s.deliveryDescr}>
            <div>
              <h6 className={s.deliveryTitleText}>Зоны доставки</h6>
              <p className={s.deliveryText}>
                Доставка осуществляется в районе ЖК «Ильинские Луга»
              </p>
            </div>
            <div>
              <h6 className={s.deliveryTitleText}>25 минут</h6>
              <p className={s.deliveryText}>
                Доставка 25 минут. Принимаем заказы с 7:00 до 23:00
              </p>
            </div>

            <div>
              <h6 className={s.deliveryTitleText}>1000 р</h6>
              <p className={s.deliveryText}>
                Минимальная сумма бесплатной доставки с учетом скидок. Инаыче
                стоимость доставке 250 руб
              </p>
            </div>

            <div>
              <h6 className={s.deliveryTitleText}>Зоны доставки</h6>
              <p className={s.deliveryText}>
                При оформлении заказа вы можете выбрать удобный для вас спобос
                рассчета
              </p>
            </div>

            <p className={s.deliveryText}>
              Изображения продуктов могут отличаться от продуктов в заказе.
            </p>
          </div>
          <div className={s.deliveryMap}>
            <h6 className={s.mapTitle}>Карта доставки</h6>
            <img src={deliveryMap} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
