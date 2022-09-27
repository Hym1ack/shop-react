import { useDispatch, useSelector } from "react-redux";
import s from "./Basket.module.css";
import saleIcon from "../../assets/images/cart/saleIcon.svg";
import deleteIcon from "../../assets/images/cart/deleteItem.svg";
import { addItem, clearCart, removeItem } from "../../redux/cartSlice";

function Basket() {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const cartElements = cartProducts.map((product) => (
    <div className={s.item} key={product.id}>
      <img src={product.image} alt="productImage" className={s.itemImage} />
      {product.newPrice && (
        <img src={saleIcon} alt="%" className={s.saleImage} />
      )}
      <div className={s.product}>
        <p className={s.productName}>{product.productName}</p>
        <p className={s.productCount}>В наличии {product.availableCount} шт.</p>
      </div>
      <div className={s.priceBlock}>
        {product.newPrice ? (
          <>
            <p className={s.newPrice}>{product.newPrice} руб.</p>
            <p className={s.oldPrice}>{product.price} руб.</p>
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
            <img src={deleteIcon} alt="del" />
          ) : (
            <p className={s.removeItem}>-</p>
          )}
        </button>
        {product.quantity}
        <button
          type="button"
          disabled={product.availableCount === product.quantity}
          onClick={() => dispatch(addItem(product.id))}
        >
          <p className={s.addItem}>+</p>
        </button>
      </div>
      <div className={s.favorited}>
        <svg
          width="44"
          height="42"
          viewBox="0 0 44 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="43"
            height="41"
            rx="20.5"
            stroke="#DADADA"
          />
          <path
            d="M31.1756 13.8614C29.9981 12.6692 28.4296 12.0094 26.7635 12.0094C25.0973 12.0094 23.5242 12.6692 22.3467 13.8661L22.007 14.2101L21.6579 13.8567C20.4758 12.6597 18.9073 12 17.2365 12C15.5703 12 14.0066 12.655 12.8291 13.852C11.6469 15.0489 11 16.637 11 18.3241C11 20.0111 11.6516 21.5992 12.8337 22.7915L21.3368 31.4011C21.5136 31.5802 21.7556 31.6838 22.0116 31.6838C22.2629 31.6838 22.505 31.5802 22.6865 31.4011L31.1663 22.8056C32.3484 21.6087 32.9953 20.0206 33 18.3335C33.0046 16.6465 32.3531 15.0584 31.1756 13.8614Z"
            fill="#DADADA"
          />
        </svg>
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
      <div className={s.cartItems}>{cartElements}</div>
    </div>
  );
}

export default Basket;
