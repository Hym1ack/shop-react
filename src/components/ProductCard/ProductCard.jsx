import { useState } from "react";
import s from "./ProductCard.module.css";
import ProductModal from "../ProductModal/ProductModal";
import BuyButton from "../UiKit/BuyButton";
import Favourite from "../UiKit/Favourite";

function ProductCard({ product }) {
  const [modalProduct, setModalProduct] = useState(false);

  const { image, availableCount, price, newPrice, productName, id } = product;

  const classesSale = newPrice ? `${s.sale} ${s.price}` : s.price;

  return (
    <div className={s.product}>
      <button type="button" onClick={() => setModalProduct(true)}>
        <img className={s.productImage} src={image} alt="product" />
      </button>
      <ProductModal
        openModal={modalProduct}
        closeModal={() => setModalProduct(false)}
        product={product}
      />
      <div className={s.favourite}>
        <Favourite id={id} />
      </div>
      <div className={s.information}>
        <p className={s.infoAvailable}>В наличии {availableCount} шт.</p>
        <p className={s.infoName}>{productName}</p>
      </div>
      <div className={s.buy}>
        <div className={s.prices}>
          <p className={classesSale}>{newPrice || price} руб.</p>
          {newPrice && <p className={s.oldPrice}>{price} руб.</p>}
        </div>
        <div className={s.button}>
          <BuyButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
