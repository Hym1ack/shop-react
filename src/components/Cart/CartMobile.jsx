import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Cart.module.css";
import cartImage from "../../assets/images/header/shopping-cart.svg";

function CartMobile() {
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);

  return (
    <Link to="cart" className={s.shopCart}>
      <img src={cartImage} alt="cart" className={s.cartImage} />
      {totalQuantity === 0 ? (
        <span className={s.cartDefault}>Корзина</span>
      ) : (
        <>
          <span className={s.quantity}>{totalQuantity}</span>
          <p className={s.cartNotEmpty}>{`${totalAmount} ₽`}</p>
        </>
      )}
    </Link>
  );
}

export default CartMobile;
