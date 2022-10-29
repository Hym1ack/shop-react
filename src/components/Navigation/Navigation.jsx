import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
import s from "./Navigation.module.css";

import marketImage from "../../assets/images/header/header-supermarket.png";
import cookingImage from "../../assets/images/header/header-cooking.png";
import freezeImage from "../../assets/images/header/header-freezen.png";
import anotherImage from "../../assets/images/header/header-another.png";
import stockImage from "../../assets/images/header/header-stock.png";
import shopsImage from "../../assets/images/header/header-shops.png";
import { AppLink } from "../UiKit/AppLink";

function Navigation() {
  const links = [
    { to: "shop/water", label: "Супермаркет", image: marketImage },
    { to: "shop/bakery", label: "Кулинария", image: cookingImage },
    { to: "shop/dumplings", label: "Заморозка", image: freezeImage },
    { to: "shop/beauty", label: "Другое", image: anotherImage },
    { to: "discounts", label: "Акции", image: stockImage },
    { to: "address", label: "Магазины", image: shopsImage },
  ];

  return (
    <nav className={s.list}>
      <Swiper
        slidesPerView="auto"
        freeMode
        preventClicks={false}
        preventClicksPropagation={false}
        modules={[FreeMode]}
        style={{ marginLeft: 0 }}
        breakpoints={{
          320: {
            spaceBetween: 7,
          },
          480: {
            spaceBetween: 14,
          },
          768: {
            spaceBetween: 20,
          },
        }}
      >
        {links.map((link) => (
          <SwiperSlide key={link.to} className={s.slide}>
            <AppLink
              className={s.item}
              activeClassActive={s.itemActive}
              to={link.to}
            >
              <img src={link.image} alt="%" />
              <span className={s.itemText}>{link.label}</span>
            </AppLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </nav>
  );
}

export default Navigation;
