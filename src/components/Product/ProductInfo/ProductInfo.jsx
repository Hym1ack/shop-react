import s from "../ProductModal/ProductModal.module.css";
import BuyButton from "../../UiKit/BuyButton";
import Favourite from "../../UiKit/Favourite";

function ProductInfo({ product }) {
  const { availableCount, price, newPrice, productName, weight, information } =
    product;

  const weightText = weight < 1 ? `${weight} г.` : `${weight} кг.`;

  return (
    <div className={s.product}>
      <p className={s.productCompany}>{information && information.company}</p>
      <h4 className={s.productName}>{productName}</h4>
      <div>
        <p className={s.productWeight}>
          {`${weightText} ・ В наличии ${availableCount} шт`}
        </p>
      </div>
      <div className={s.purchaseBlock}>
        <h5 className={s.productPrice}>{newPrice || price} руб</h5>
        <div className={s.buyButton}>
          <BuyButton product={product} />
        </div>
        <Favourite circle />
      </div>
      {information && (
        <div className={s.productDetails}>
          <p className={s.detailsText}>Состав: {information.compound}</p>
          <p className={s.detailsText}>
            Пищевая ценность на 100 г: {information.nutritional}
          </p>
          <p className={s.detailsText}>
            Срок хранения: {information.expirationDate}
          </p>
          <p className={s.detailsText}>
            Условия хранения: {information.storage}
          </p>
          <p className={s.detailsText}>Упаковка: {information.packing}</p>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
