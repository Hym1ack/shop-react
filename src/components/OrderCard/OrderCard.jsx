import s from "./OrderCard.module.css";

function OrderCard({ order }) {
  const { inWork, delivered, orderId, date, address, totalPrice } = order;

  const classesCard = inWork ? `${s.orderWork} ${s.order}` : `${s.order}`;

  return (
    <div className={classesCard}>
      <p
        className={
          inWork ? `${s.inWork} ${s.status}` : `${s.finished} ${s.status}`
        }
      >
        {inWork ? "в работе" : "выполнен"}
      </p>
      <span className={s.orderId}>Заказ №{orderId}</span>
      <div className={s.delivery}>
        <p className={s.method}>{delivered ? "Доставка" : "Самовывоз"}</p>
        <span className={s.date}>{date}</span>
      </div>
      <p className={s.address}>{address}</p>
      <div className={s.bottom}>
        <p className={s.price}>{totalPrice} руб.</p>
        <button
          className={inWork ? `${s.btn} ${s.trace}` : `${s.btn} ${s.repeat}`}
          type="button"
        >
          {inWork ? "Отследить" : "Повторить"}
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
