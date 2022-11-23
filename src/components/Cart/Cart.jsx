import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Cart.module.css";
import cartImage from "../../assets/images/header/shopping-cart.svg";

function Cart() {
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);

  const calcQuantityEnding = (quantity) => {
    const ending = ["товар", "товара", "товаров"];

    if (quantity === 1) return ending[0];
    if (quantity > 1 && quantity < 5) return ending[1];

    return ending[2];
  };

  return (
    <Link to="cart" className={s.shopCart}>
      <img src={cartImage} alt="cart" className={s.cartImage} />
      {totalQuantity === 0 ? (
        <span className={s.cartDefault}>Корзина</span>
      ) : (
        <p className={s.cartNotEmpty}>
          {`${totalAmount} ₽`}
          <br />
          <span className={s.cartQuantity}>
            {`${totalQuantity} ${calcQuantityEnding(totalQuantity)}`}
          </span>
        </p>
      )}
    </Link>
  );
}

export default Cart;
