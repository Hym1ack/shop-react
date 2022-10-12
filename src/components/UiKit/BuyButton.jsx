import { useDispatch, useSelector } from "react-redux";
import s from "./BuyButton.module.css";
import { addToCart, removeItem } from "../../redux/cartSlice";

function BuyButton({ product }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const itemExist = cartItems.find((item) => item.id === product.id);

  if (itemExist)
    return (
      <div className={s.countItems}>
        <button
          onClick={() => dispatch(removeItem(product.id))}
          type="button"
          className={s.deleteItem}
        >
          <span className={s.minusItem}>-</span>
        </button>
        <span>{itemExist.quantity}</span>
        <button
          type="button"
          disabled={product.availableCount === itemExist.quantity}
          onClick={() => dispatch(addToCart(product))}
          className={s.addItem}
        >
          <span className={s.plusItem}>+</span>
        </button>
      </div>
    );

  return (
    <button
      className={s.buyBtn}
      type="button"
      onClick={() => dispatch(addToCart(product))}
    >
      В корзину
    </button>
  );
}

export default BuyButton;
