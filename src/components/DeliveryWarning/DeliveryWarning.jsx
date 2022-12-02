import s from "./DeliveryWarning.module.css";
import flag from "../../assets/images/cart/flag.png";

function DeliveryWarning() {
  return (
    <div className={s.warning}>
      <img className={s.flag} src={flag} alt="flag" />
      <p className={s.text}>
        Стоимость заказа может измениться и будет списана только после того, как
        мы проверим наличие товара и соберём вашу покупку.
      </p>
      <p className={s.text}>
        В заказ будет добавлено необходимое количество пакетов и их стоимость.
      </p>
      <p className={s.text}>
        Мы вам позвоним, если товара нет в наличии. Будьте на связи.
      </p>
    </div>
  );
}

export default DeliveryWarning;
