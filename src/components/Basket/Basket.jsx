import { useMediaQuery } from "react-responsive";
import s from "./Basket.module.css";
import saleIcon from "../../assets/images/cart/saleIcon.svg";
import timeIcon from "../../assets/images/cart/time.svg";
import { clearCart } from "../../redux/cartSlice";
import Favourite from "../UiKit/Favourite";
import Counter from "../UiKit/Counter/Counter";

function Basket({ cartProducts, dispatch }) {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const nightTime = new Date().getHours() >= 22 || new Date().getHours() <= 7;

  const cartElements = cartProducts.map((product) => (
    <div className={s.item} key={product.id}>
      <div className={s.image}>
        <img src={product.image} alt="productImage" className={s.itemImage} />
        {product.oldPrice && (
          <img src={saleIcon} alt="%" className={s.saleImage} />
        )}
      </div>
      <div className={s.content}>
        <div className={s.name}>
          <p className={s.productName}>{product.productName}</p>
          <p className={s.productCount}>
            В наличии {product.availableCount} шт.
          </p>
        </div>
        <div className={s.priceBlock}>
          {product.oldPrice ? (
            <>
              <p className={s.newPrice}>{product.price} ₽</p>
              <p className={s.oldPrice}>{product.oldPrice} ₽</p>
            </>
          ) : (
            <p className={s.price}>{product.price} ₽</p>
          )}
        </div>
        <div className={s.counter}>
          <Counter product={product} />
        </div>

        {!isMobile && (
          <div className={s.favourite}>
            <Favourite circle id={product.id} />
          </div>
        )}
        <div className={s.total}>
          <p className={s.totalPrice}>{product.totalPrice} ₽</p>
          <p className={s.totalQuantity}>{product.quantity} шт.</p>
        </div>
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
      <div className={s.goods}>{cartElements}</div>
    </div>
  );
}

export default Basket;
