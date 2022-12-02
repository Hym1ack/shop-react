import { useDispatch, useSelector } from "react-redux";
import s from "./DeliveryPromo.module.css";
import Checkbox from "../UiKit/Checkbox";
import { setNewPrice } from "../../redux/cartSlice";

function DeliveryPromo({ availableBonuses, checked, setChecked, bonuses }) {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.cart);

  const applyBonuses = () => {
    let newPrice;

    if (checked) {
      newPrice = totalAmount + Number(availableBonuses);
    } else {
      newPrice = totalAmount - Number(availableBonuses);
    }
    dispatch(setNewPrice(newPrice));
    setChecked(!checked);
  };

  return (
    <>
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
          disabled={bonuses === 0}
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
    </>
  );
}

export default DeliveryPromo;
