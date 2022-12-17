import s from "./ProductHistory.module.css";
import saleIcon from "../../assets/images/cart/saleIcon.svg";
import BuyButton from "../UiKit/BuyButton";

function ProductHistory({ product }) {
  const { image, oldPrice, productName, availableCount, price } = product;

  return (
    <div className={s.item}>
      <div className={s.image}>
        <img src={image} alt="productImage" className={s.itemImage} />
        {oldPrice && <img src={saleIcon} alt="%" className={s.saleImage} />}
      </div>
      <div className={s.content}>
        <p className={s.productName}>{productName}</p>
        <p className={s.productCount}>В наличии {availableCount} шт.</p>
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
        <div className={s.totalPurchase}>
          <p className={s.fullPrice}>410 руб</p>
          <span className={s.quantity}>2 шт</span>
        </div>
        <div className={s.buy}>
          <BuyButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductHistory;
