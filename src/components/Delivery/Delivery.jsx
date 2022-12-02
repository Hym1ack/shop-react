import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Delivery.module.css";
import DeliveryPromo from "../DeliveryPromo/DeliveryPromo";
import { useAuth } from "../../hooks/useAuth";
import DeliveryDate from "../DeliveryDate/DeliveryDate";
import ModalAuth from "../ModalAuth/ModalAuth";

function Delivery({
  handleSubmitForm,
  showBtnTime = true,
  showBonuses = true,
}) {
  const { totalQuantity, totalAmount, totalWeight, totalDiscount } =
    useSelector((state) => state.cart);
  const { isAuth, bonuses } = useAuth();
  const availableBonuses = (bonuses * 0.03).toFixed();
  const [checked, setChecked] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const navigate = useNavigate();

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

  const orderHandler = () => {
    if (isAuth) {
      navigate("/checkout");
    } else {
      setAuthModal(true);
    }
  };

  return (
    <div className={s.delivery}>
      <DeliveryDate showBtn={showBtnTime} />

      {showBonuses && (
        <DeliveryPromo
          availableBonuses={availableBonuses}
          checked={checked}
          setChecked={setChecked}
          bonuses={bonuses}
        />
      )}

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
        {handleSubmitForm ? (
          <button
            className={s.submitBtn}
            type="submit"
            onClick={handleSubmitForm}
          >
            Оформить
          </button>
        ) : (
          <button className={s.submitBtn} type="button" onClick={orderHandler}>
            Оформить заказ
          </button>
        )}

        {authModal && (
          <ModalAuth
            modalOpen={authModal}
            setModalOpen={() => setAuthModal(false)}
          />
        )}
        <p className={s.awardBonuses}>
          Будет начислено {(totalAmount * 0.05).toFixed()} бонусов
        </p>
      </div>
    </div>
  );
}

export default Delivery;
