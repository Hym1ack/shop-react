import s from "./ProductInfo.module.css";
import BuyButton from "../UiKit/BuyButton";
import Favourite from "../UiKit/Favourite";

function ProductInfo({ product }) {
  const { availableCount, price, newPrice, productName, weight, information } =
    product;

  const { compound, nutritional, expirationDate, storage, packing } =
    information;

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
          <p className={s.detailsText}>Состав: {compound}</p>
          <p className={s.detailsText}>
            Пищевая ценность на 100 г: {nutritional}
          </p>
          <p className={s.detailsText}>Срок хранения: {expirationDate}</p>
          <p className={s.detailsText}>Условия хранения: {storage}</p>
          <p className={s.detailsText}>Упаковка: {packing}</p>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
