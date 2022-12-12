import { useMediaQuery } from "react-responsive";
import s from "./ProductCart.module.css";
import saleIcon from "../../assets/images/cart/saleIcon.svg";
import Counter from "../UiKit/Counter/Counter";
import Favourite from "../UiKit/Favourite";

function ProductCart({ product }) {
  const {
    id,
    image,
    oldPrice,
    productName,
    availableCount,
    price,
    totalPrice,
    quantity,
  } = product;
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div className={s.item}>
      <div className={s.image}>
        <img src={image} alt="productImage" className={s.itemImage} />
        {oldPrice && <img src={saleIcon} alt="%" className={s.saleImage} />}
      </div>
      <div className={s.content}>
        <div className={s.name}>
          <p className={s.productName}>{productName}</p>
          <p className={s.productCount}>В наличии {availableCount} шт.</p>
        </div>
        <div className={s.priceBlock}>
          {oldPrice ? (
            <>
              <p className={s.newPrice}>{price} ₽</p>
              <p className={s.oldPrice}>{oldPrice} ₽</p>
            </>
          ) : (
            <p className={s.price}>{price} ₽</p>
          )}
        </div>
        <div className={s.counter}>
          <Counter product={product} />
        </div>

        {!isMobile && (
          <div className={s.favourite}>
            <Favourite circle id={id} />
          </div>
        )}
        <div className={s.total}>
          <p className={s.totalPrice}>{totalPrice} ₽</p>
          <p className={s.totalQuantity}>{quantity} шт.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
