import s from "./Basket.module.css";
import timeIcon from "../../assets/images/cart/time.svg";
import { clearCart } from "../../redux/cartSlice";
import ProductCart from "../ProductCart/ProductCart";

function Basket({ cartProducts, dispatch }) {
  const nightTime = new Date().getHours() >= 22 || new Date().getHours() <= 7;

  return (
    <div className={s.containerCart}>
      <div className={s.cartTop}>
        <h6 className={s.title}>Корзина</h6>
        <button
          type="button"
          className={s.removeItems}
          onClick={() => dispatch(clearCart())}
        >
          Очистить
        </button>
      </div>
      {nightTime && (
        <div className={s.nightOrder}>
          <img className={s.nightImg} src={timeIcon} alt="Time" />
          <span className={s.nightText}>
            Мы принимаем заказы с 7:00 до 22:00
          </span>
        </div>
      )}
      <div className={s.goods}>
        {cartProducts.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Basket;
