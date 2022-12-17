import { useState } from "react";
import s from "./OrderCard.module.css";
import OrderModal from "../OrderModal/OrderModal";

function OrderCard({ order }) {
  const {
    inWork,
    date,
    cart: { totalAmount },
    order: {
      deliveryMethod,
      address: { street, apartment },
    },
  } = order;

  const [orderModal, setOrderModal] = useState(false);

  const orderDate = new Date(date * 1000);
  const formattedDate = `${orderDate.getDate()}.${
    orderDate.getMonth() + 1
  }.${orderDate.getFullYear()}`;

  const classesCard = inWork ? `${s.orderWork} ${s.order}` : `${s.order}`;

  return (
    <>
      <div
        className={classesCard}
        role="button"
        tabIndex={0}
        onClick={() => setOrderModal(true)}
        onKeyDown={() => setOrderModal(true)}
      >
        {inWork ? (
          <p className={`${s.inWork} ${s.status}`}>в работе</p>
        ) : (
          <p className={`${s.finished} ${s.status}`}>выполнен</p>
        )}
        <span className={s.orderId}>Заказ №{date}</span>
        <div className={s.delivery}>
          <p className={s.method}>
            {deliveryMethod === "delivery" ? "Доставка" : "Самовывоз"}
          </p>
          <span className={s.date}>{formattedDate}</span>
        </div>
        <p className={s.address}>
          {street}, кв. {apartment}
        </p>
        <div className={s.bottom}>
          <p className={s.price}>{totalAmount} руб.</p>
          <button
            className={inWork ? `${s.btn} ${s.trace}` : `${s.btn} ${s.repeat}`}
            type="button"
          >
            {inWork ? "Отследить" : "Повторить"}
          </button>
        </div>
      </div>
      {orderModal && (
        <OrderModal
          order={order}
          formattedDate={formattedDate}
          openModal={orderModal}
          closeModal={() => setOrderModal(false)}
        />
      )}
    </>
  );
}

export default OrderCard;
