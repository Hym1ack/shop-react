import { useDispatch } from "react-redux";
import s from "./Counter.module.css";
import { addItem, removeItem } from "../../../redux/cartSlice";
import deleteIcon from "../../../assets/images/cart/deleteItem.svg";

function Counter({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={s.countItems}>
      <button
        onClick={() => dispatch(removeItem(product.id))}
        type="button"
        className={s.deleteItem}
      >
        {product.quantity === 1 ? (
          <img src={deleteIcon} alt="del" className={s.removeItem} />
        ) : (
          <p className={s.removeItem}>-</p>
        )}
      </button>
      <span>{product.quantity}</span>
      <button
        type="button"
        disabled={product.availableCount === product.quantity}
        onClick={() => dispatch(addItem(product.id))}
      >
        <p className={s.addItem}>+</p>
      </button>
    </div>
  );
}

export default Counter;
