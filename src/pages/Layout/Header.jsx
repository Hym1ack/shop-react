import { Link } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../assets/images/header/logo.svg";
import cartImage from "../../assets/images/header/shopping-cart.svg";

function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerTop}>
          <img src={logo} alt="logo" />
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
                  d="M24.9059 24.9567C27.3096 24.9567 29.4333 22.8244 29.6414 20.203C29.7448 18.8861 29.3063 17.6581 28.4065 16.7457C27.5163 15.8444 26.2719 15.3481 24.9059 15.3481C23.5289 15.3481 22.2836 15.8414 21.3998 16.7371C20.5059 17.6426 20.0702 18.8733 20.1704 20.2022C20.3748 22.8239 22.498 24.9567 24.9059 24.9567Z"
                  fill="#E1E1E1"
                />
                <path
                  d="M33.7859 32.8031C33.4245 30.7529 32.2963 29.0307 30.5236 27.8222C28.9492 26.7489 26.9542 26.1578 24.9062 26.1578C22.8582 26.1578 20.8633 26.7489 19.2889 27.8217C17.5162 29.0303 16.388 30.7525 16.0266 32.8026C15.9439 33.2725 16.0561 33.7371 16.3344 34.0773C16.4607 34.2323 16.6192 34.3566 16.7984 34.441C16.9776 34.5254 17.1729 34.5678 17.3702 34.5651H32.4423C32.6397 34.568 32.8352 34.5257 33.0145 34.4414C33.1939 34.3571 33.3525 34.2328 33.4789 34.0777C33.7564 33.7375 33.8686 33.2729 33.7859 32.8031Z"
                  fill="#E1E1E1"
                />
              </svg>
            </button>
            <Link to="cart" className={s.shopCart}>
              <img src={cartImage} alt="cart" className={s.cartImage} />
              <span>Корзина</span>
            </Link>
          </div>
        </div>
        <div>
          <ul className={s.list}>
            <li className={s.item}>Акции</li>
            <li className={`${s.item} ${s.itemActive}`}>Кулинария</li>
            <li className={s.item}>Магазины</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
