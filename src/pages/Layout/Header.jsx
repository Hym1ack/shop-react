import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Header.module.css";
import logo from "../../assets/images/header/logo.svg";
import cartImage from "../../assets/images/header/shopping-cart.svg";
import Navigation from "../../components/Navigation/Navigation";
import ProfileButton from "../../components/Profile/ProfileButton";

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
            <button type="button">
              <svg
                className={s.btnImg}
                width="50"
                height="48"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="49"
                  height="47"
                  rx="15.5"
                  fill="white"
                  stroke="#E1E1E1"
                />
                <path
                  d="M34.1756 17.2096C32.9981 16.0173 31.4296 15.3576 29.7635 15.3576C28.0973 15.3576 26.5242 16.0173 25.3467 17.2143C25.1598 17.4036 24.8542 17.4036 24.6672 17.2143L24.6579 17.2048C23.4758 16.0079 21.9073 15.3481 20.2365 15.3481C18.5703 15.3481 17.0066 16.0032 15.8291 17.2001C14.6469 18.3971 14 19.9852 14 21.6722C14 23.3593 14.6516 24.9474 15.8337 26.1396L24.3368 34.7493C24.5136 34.9283 24.7556 35.032 25.0116 35.032C25.2629 35.032 25.505 34.9283 25.6865 34.7493L34.1663 26.1538C35.3484 24.9568 35.9953 23.3687 36 21.6817C36.0046 19.9946 35.3531 18.4065 34.1756 17.2096Z"
                  fill="#E1E1E1"
                />
              </svg>
            </button>
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
