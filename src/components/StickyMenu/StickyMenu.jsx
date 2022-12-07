import AppLink from "../UiKit/AppLink";
import s from "./StickyMenu.module.css";

import catalogImg from "../../assets/images/navMobile/burger.svg";
import stockImg from "../../assets/images/navMobile/stocks.svg";
import favouriteImg from "../../assets/images/navMobile/favourite.svg";
import profileImg from "../../assets/images/navMobile/profile.svg";
import CartMobile from "../Cart/CartMobile";

function StickyMenu() {
  return (
    <nav className={s.menu}>
      <AppLink className={s.catalog}>
        <img className={s.linkImg} src={catalogImg} alt="burger" />
        <span className={s.link}>Каталог</span>
      </AppLink>
      <AppLink className={s.stocks} to="discounts">
        <img className={s.linkImg} src={stockImg} alt="stock" />
        <span className={s.link}>Акции</span>
      </AppLink>
      <CartMobile />
      <AppLink className={s.favourites} to="profile/favourites">
        <img className={s.linkImg} src={favouriteImg} alt="favourite" />
        <span className={s.link}>Избранное</span>
      </AppLink>
      <AppLink className={s.profile} to="profile">
        <img className={s.linkImg} src={profileImg} alt="profile" />
        <span className={s.link}>Профиль</span>
      </AppLink>
    </nav>
  );
}

export default StickyMenu;
