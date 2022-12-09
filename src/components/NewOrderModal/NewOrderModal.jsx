import Modal from "../Modal/Modal";
import s from "./NewOrderModal.module.css";
import successNight from "../../assets/images/cart/success-order-night.png";
import successDay from "../../assets/images/cart/success-order.png";
import AppLink from "../UiKit/AppLink";

function NewOrderModal({ orderSuccess, closeModal, orderId }) {
  const nightTime = new Date().getHours() >= 22 || new Date().getHours() <= 7;
  const deliveryTime = "20:20";

  return (
    <Modal open={orderSuccess} onClose={() => closeModal(false)}>
      <div className={s.order}>
        <div className={s.success}>
          <img
            className={s.img}
            src={nightTime ? successNight : successDay}
            alt="mark"
          />
          <p className={s.orderId}>Заказ сформирован №{orderId}</p>
        </div>
        {nightTime && (
          <p className={s.text}>Мы модтвердим ваш заказ завтра с 7:00.</p>
        )}
        <p className={s.text}>Ориентировочное время доставки {deliveryTime}</p>
        <p className={s.text}>
          Отследить заказ можно в{" "}
          <AppLink className={s.link} to="/profile/history">
            личном кабинете
          </AppLink>
        </p>
      </div>
    </Modal>
  );
}

export default NewOrderModal;
