import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Header.module.css";
import logo from "../../assets/images/header/logo.svg";
import cartImage from "../../assets/images/header/shopping-cart.svg";
import Navigation from "../../components/Navigation/Navigation";
import ProfileButton from "../../components/Profile/ProfileButton";
import { AppLink } from "../../components/UiKit/AppLink";
import { ReactComponent as FavouriteLogo } from "../../assets/images/header/favourites.svg";

function Header() {
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);

  const calcQuantityEnding = (quantity) => {
    const ending = ["товар", "товара", "товаров"];

    if (quantity === 1) return ending[0];
    if (quantity > 1 && quantity < 5) return ending[1];

    return ending[2];
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerTop}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <fieldset className={s.searchBlock}>
            <input className={s.search} placeholder="Начать поиск" />
            <span className={s.iconSearch} />
          </fieldset>
          <div className={s.headerRight}>
            <AppLink to="profile/favourites">
              <FavouriteLogo className={s.btnImg} />
            </AppLink>
            <ProfileButton />

            <Link to="cart" className={s.shopCart}>
              <img src={cartImage} alt="cart" className={s.cartImage} />
              {totalQuantity === 0 ? (
                <span className={s.cartDefault}>Корзина</span>
              ) : (
                <p className={s.cartNotEmpty}>
                  {`${totalAmount} ₽`}
                  <br />
                  <span
                    className={s.cartQuantity}
                  >{`${totalQuantity} ${calcQuantityEnding(
                    totalQuantity
                  )}`}</span>
                </p>
              )}
            </Link>
          </div>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
