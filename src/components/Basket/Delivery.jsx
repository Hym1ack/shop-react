import { useSelector } from "react-redux";
import { useState } from "react";
import s from "./Delivery.module.css";

function Delivery() {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const [bonuses] = useState(300);

  const infoBlock = [
    { title: `Товары (${totalQuantity})`, info: "2.443 кг.", sale: false },
    { title: `Скидки`, info: "104 руб.", sale: true },
    { title: `Бонусы`, info: "17 руб.", sale: true },
    { title: `Промокод`, info: "0 руб.", sale: false },
    { title: `Доставка`, info: "Бесплатно", sale: false },
  ];

  return (
    <div className={s.delivery}>
      <div className={s.top}>
        <h6 className={s.time}>Доставка сегодня, 18:11</h6>
        <button className={s.changeTime} type="button">
          Изменить
        </button>
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
        <input type="checkbox" id="applyBonuses" className={s.bonusInput} />
        <label className={s.bonusLabel} htmlFor="applyBonuses">
          Списать бонусы
          <span className={s.count}>Всего {bonuses} бонусов</span>
          <p className={s.available}>
            Доступно к списанию <span>{(bonuses * 0.03).toFixed()}</span>{" "}
            бонусов
          </p>
        </label>
      </div>

      <div>
        {infoBlock.map((info) => (
          <div className={s.info} key={info.title}>
            <p className={s.infoText}>{info.title}</p>
            {info.sale ? (
              <p className={s.infoSale}>-{info.info}</p>
            ) : (
              <p className={s.infoText}>{info.info}</p>
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
