import { SwiperSlide } from "swiper/react";
import AppLink from "../UiKit/AppLink";
import Slider from "../Slider/Slider";
import { navigationLinks } from "../../database/navigationLinks";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.list}>
      <Slider type="links" className={s.navSlider}>
        {navigationLinks.map((link) => (
          <SwiperSlide className={s.slide} key={link.to}>
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
      </Slider>
    </nav>
  );
}

export default Navigation;
