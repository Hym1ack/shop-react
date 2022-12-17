import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import s from "./OrderModal.module.css";
import { fetchProductsById } from "../../redux/shopSlice";
import ProductHistory from "../ProductHistory/ProductHistory";
import { ReactComponent as RepeatOrder } from "../../assets/images/user/repeatOrder.svg";

function OrderModal({ order, formattedDate, openModal, closeModal }) {
  const dispatch = useDispatch();
  const { productsHistory } = useSelector((state) => state.shop);
  const {
    date,
    cart: { cartIds, totalAmount, totalQuantity, totalWeight, totalDiscount },
    order: {
      address: { street, apartment },
    },
  } = order;

  useEffect(() => {
    dispatch(fetchProductsById(cartIds));
  }, [cartIds, dispatch]);

  const deliveryInfo = [
    {
      title: `Вес заказа`,
      text: `${totalWeight}`,
      sale: false,
      unit: "кг.",
    },
    {
      title: `Скидки`,
      text: `${totalDiscount}`,
      sale: false,
      unit: "руб.",
    },
    {
      title: `Бонусы`,
      text: `0`,
      sale: false,
      unit: "руб.",
    },
    {
      title: `Промокод`,
      text: `0`,
      sale: false,
      unit: "руб.",
    },
    { title: `Доставка`, text: "Бесплатно", sale: false, unit: "" },
    {
      title: `Общая сумма заказа`,
      text: `${totalAmount}`,
      sale: false,
      unit: "руб.",
    },
  ];

  return (
    <Modal open={openModal} onClose={closeModal}>
      <div className={s.order}>
        <div className={s.info}>
          <h3 className={s.orderId}>Заказ №{date}</h3>
          <p className={s.sendCheck}>Выслать чек</p>
          <p className={s.orderInProgress}>
            Заказ в процессе. Спасибо, что доверили нам выбор продуктов!
          </p>
          <p className={s.orderDate}>Создан {formattedDate}</p>
          <p className={s.address}>
            Заказ был доставлен по адресу: {street}, кв. {apartment}
          </p>
          <p className={s.subtotal}>
            {totalQuantity} товара ({totalWeight} кг) на сумму {totalAmount}{" "}
            руб.
          </p>
          <div className={s.subtotalSales}>
            <p>
              Скидки:{" "}
              <span className={totalDiscount === 0 ? s.sale : undefined}>
                {totalDiscount} руб
              </span>
            </p>
            <p>
              Промокод:{" "}
              <span className={totalDiscount === 0 ? s.sale : undefined}>
                {totalDiscount} руб
              </span>
            </p>
            <p>
              Бонусы:{" "}
              <span className={totalDiscount === 0 ? s.sale : undefined}>
                {totalDiscount}
              </span>
            </p>
          </div>
          {productsHistory &&
            productsHistory.map((product) => (
              <ProductHistory product={product} key={product.id} />
            ))}
        </div>
        <div className={s.total}>
          <div className={s.totalSum}>
            {deliveryInfo.map((info) => (
              <div className={s.totalInfo} key={info.title}>
                <p className={s.totalTitle}>{info.title}</p>

                {info.sale ? (
                  <p className={s.totalSale}>
                    {info.text !== "0" ? `-${info.text}` : info.text}{" "}
                    {info.unit}
                  </p>
                ) : (
                  <p className={s.totalText}>{`${info.text} ${info.unit}`}</p>
                )}
              </div>
            ))}
          </div>
          <div className={s.payOrder}>
            <p className={s.totalTitle}>Заказ оплачен</p>
            <div className={s.totalInfo}>
              <p className={s.totalTitle}>Способ оплаты: </p>
              <p className={s.totalText}>картой онлайн</p>
            </div>
          </div>
          <div className={s.repeatOrder}>
            <button className={s.repeatBtn} type="button">
              <RepeatOrder /> <span>Повторить</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OrderModal;
