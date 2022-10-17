import { useDispatch, useSelector } from "react-redux";
import s from "./Basket.module.css";
import saleIcon from "../../assets/images/cart/saleIcon.svg";
import deleteIcon from "../../assets/images/cart/deleteItem.svg";
import timeIcon from "../../assets/images/cart/time.svg";
import { addItem, clearCart, removeItem } from "../../redux/cartSlice";
import Favourite from "../UiKit/Favourite";

function Basket() {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const nightTime = new Date().getHours() >= 22 || new Date().getHours() <= 7;

  const cartElements = cartProducts.map((product) => (
    <div className={s.item} key={product.id}>
      <img src={product.image} alt="productImage" className={s.itemImage} />
      {product.oldPrice && (
        <img src={saleIcon} alt="%" className={s.saleImage} />
      )}
      <div className={s.product}>
        <p className={s.productName}>{product.productName}</p>
        <p className={s.productCount}>В наличии {product.availableCount} шт.</p>
      </div>
      <div className={s.priceBlock}>
        {product.oldPrice ? (
          <>
            <p className={s.newPrice}>{product.price} руб.</p>
            <p className={s.oldPrice}>{product.oldPrice} руб.</p>
          </>
        ) : (
          <p className={s.price}>{product.price} руб.</p>
        )}
      </div>
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
      <div className={s.favorited}>
        <Favourite circle />
      </div>
      <div className={s.total}>
        <p className={s.totalPrice}>{product.totalPrice} руб.</p>
        <p className={s.totalQuantity}>{product.quantity} шт.</p>
      </div>
    </div>
  ));

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
          <img src={timeIcon} alt="Time" />
          <span>Мы принимаем заказы с 7:00 до 22:00</span>
        </div>
      )}

      {cartElements}
    </div>
  );
}

export default Basket;
