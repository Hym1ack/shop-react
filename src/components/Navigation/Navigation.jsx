import { Swiper, SwiperSlide } from "swiper/react";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";
import s from "./Navigation.module.css";
import AppLink from "../UiKit/AppLink";
import { navigationLinks } from "../../database/navigationLinks";

function Navigation() {
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
        {navigationLinks.map((link) => (
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
