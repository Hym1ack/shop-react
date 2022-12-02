import { useState } from "react";
import s from "./DeliveryDate.module.css";
import DeliveryModal from "../DeliveryModal/DeliveryModal";

function DeliveryDate({ showBtn = true }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={s.date}>
        <h6 className={s.time}>Доставка сегодня, 18:11</h6>
        {showBtn && (
          <button
            onClick={() => setModalOpen(true)}
            className={s.changeTime}
            type="button"
          >
            Изменить
          </button>
        )}

        {modalOpen && (
          <DeliveryModal
            modalOpen={modalOpen}
            setModalOpen={() => setModalOpen(false)}
          />
        )}
      </div>
      <p className={s.address}>
        ул. Новая, д. 13, посёлок Ильинское-Усово, городской округ Красногорск
      </p>
    </>
  );
}

export default DeliveryDate;
