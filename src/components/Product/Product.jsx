import s from "./Product.module.css";

function Product({ product }) {
  const { image, availableCount, price, newPrice, productName, favorited } =
    product;

  const classesFavorited = favorited
    ? `${s.productLike} ${s.productLikeActive}`
    : s.productLike;

  return (
    <div className={s.product}>
      <img className={s.productImage} src={image} alt="product" />
      <svg
        className={classesFavorited}
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.1756 2.46346C18.9981 1.27122 17.4296 0.611476 15.7635 0.611476C14.0973 0.611476 12.5242 1.27122 11.3467 2.46817L11.007 2.81218L10.6579 2.45875C9.47577 1.26179 7.90733 0.602051 6.23651 0.602051C4.57034 0.602051 3.00655 1.25708 1.82906 2.45404C0.646921 3.651 0 5.23909 0 6.92614C0 8.61319 0.651575 10.2013 1.83372 11.3935L10.3368 20.0031C10.5136 20.1822 10.7556 20.2859 11.0116 20.2859C11.2629 20.2859 11.505 20.1822 11.6865 20.0031L20.1663 11.4077C21.3484 10.2107 21.9953 8.62261 22 6.93556C22.0046 5.24851 21.3531 3.66042 20.1756 2.46346Z"
          fill="#DADADA"
        />
      </svg>
      <div className={s.information}>
        <p className={s.infoAvailable}>В наличии {availableCount} шт.</p>
        <p className={s.infoName}>{productName}</p>
      </div>
      <div className={s.buy}>
        <div>
          <p className={s.price}>{newPrice || price} руб.</p>
          {newPrice && <p className={s.oldPrice}>{price} руб.</p>}
        </div>
        <button className={s.buyBtn} type="button">
          В корзину
        </button>
      </div>
    </div>
  );
}

export default Product;
