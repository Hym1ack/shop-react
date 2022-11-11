import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import s from "./Delivery.module.css";
import { setNewPrice } from "../../redux/cartSlice";
import DeliveryModal from "../DeliveryModal/DeliveryModal";
import Checkbox from "../UiKit/Checkbox";

function Delivery() {
  const dispatch = useDispatch();

  const { totalQuantity, totalAmount, totalWeight, totalDiscount } =
    useSelector((state) => state.cart);

  const [modalOpen, setModalOpen] = useState(false);

  const [checked, setChecked] = useState(false);
  const [bonuses, setBonuses] = useState(300);
  const availableBonuses = (bonuses * 0.03).toFixed();

  const applyBonuses = () => {
    let newPrice;
    if (checked) {
      setBonuses(bonuses + Number(availableBonuses));
      newPrice = totalAmount + Number(availableBonuses);
    } else {
      setBonuses(bonuses - Number(availableBonuses));
      newPrice = totalAmount - Number(availableBonuses);
    }
    dispatch(setNewPrice(newPrice));
    setChecked(!checked);
  };

  const deliveryInfo = [
    {
      title: `Товары (${totalQuantity})`,
      text: `${totalWeight}`,
      sale: false,
      unit: "кг.",
    },
    {
      title: `Скидки`,
      text: `${totalDiscount}`,
      sale: true,
      unit: "руб.",
    },
    {
      title: `Бонусы`,
      text: `${checked ? availableBonuses : 0}`,
      sale: true,
      unit: "руб.",
    },
    { title: `Промокод`, text: "0", sale: false, unit: "руб." },
    { title: `Доставка`, text: "Бесплатно", sale: false, unit: "" },
  ];

  return (
    <div className={s.delivery}>
      <div className={s.top}>
        <h6 className={s.time}>Доставка сегодня, 18:11</h6>
        <button
          onClick={() => setModalOpen(true)}
          className={s.changeTime}
          type="button"
        >
          Изменить
        </button>

        <DeliveryModal
          modalOpen={modalOpen}
          setModalOpen={() => setModalOpen(false)}
        />
      </div>
      <p className={s.map}>
        ул. Новая, д. 13, посёлок Ильинское-Усово, городской округ Красногорск
      </p>
      <div className={s.btn}>
        <input
          className={s.promoField}
          type="text"
          placeholder="Есть промокод?"
        />
        <button className={s.applyBtn} type="button">
          Применить
        </button>
      </div>
      <div className={s.bonus}>
        <Checkbox
          checked={checked}
          onChange={applyBonuses}
          id="applyBonuses"
          labelClass={s.bonusLabel}
        >
          Списать бонусы
          <span className={s.count}>Всего {bonuses} бонусов</span>
          <p className={s.available}>
            Доступно к списанию <span>{availableBonuses}</span> бонусов
          </p>
        </Checkbox>
      </div>

      <div>
        {deliveryInfo.map((info) => (
          <div className={s.info} key={info.title}>
            <p className={s.infoText}>{info.title}</p>

            {info.sale ? (
              <p className={s.infoSale}>
                {info.text !== "0" ? `-${info.text}` : info.text} {info.unit}
              </p>
            ) : (
              <p className={s.infoText}>{`${info.text} ${info.unit}`}</p>
            )}
          </div>
        ))}
        <div className={s.infoPay}>
          <span className={s.infoText}>К оплате</span>
          <span className={s.finalPrice}>{totalAmount} руб.</span>
        </div>
        <button className={s.submitBtn} type="submit">
          Оформить заказ
        </button>
        <p className={s.awardBonuses}>
          Будет начислено {(totalAmount * 0.05).toFixed()} бонусов
        </p>
      </div>
    </div>
  );
}

export default Delivery;
