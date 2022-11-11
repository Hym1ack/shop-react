import { useState } from "react";
import s from "./DeliveryModal.module.css";
import Modal from "../Modal/Modal";

import clearX from "../../assets/images/x.svg";
import userAddress from "../../assets/images/popups/userAddress.svg";
import userDeleteAddress from "../../assets/images/popups/userDeleteAddress.svg";

function DeliveryModal({ modalOpen, setModalOpen }) {
  const [delivery, setDelivery] = useState(true);
  const [address, setAddress] = useState("");

  const userAddresses = [
    {
      id: 1,
      location:
        "ул. Новая, д. 13, посёлок Ильинское-Усово, городской округ Красногорск",
    },
    {
      id: 2,
      location: "ул. Новая, д. 13, посёлок Ильинское-Усово",
    },
  ];

  return (
    <Modal open={modalOpen} onClose={setModalOpen}>
      <div className={s.deliveryModal}>
        <div className={s.container}>
          <div className={s.buttons}>
            <button
              className={
                delivery ? `${s.buttonTop} ${s.buttonActive}` : s.buttonTop
              }
              type="button"
              onClick={() => setDelivery(true)}
            >
              Доставка <p>бесплатно от 1000₽</p>
            </button>
            <button
              className={
                !delivery ? `${s.buttonTop} ${s.buttonActive}` : s.buttonTop
              }
              type="button"
              onClick={() => setDelivery(false)}
            >
              Самовывоз <p>бесплатно</p>
            </button>
          </div>
          {delivery ? (
            <div>
              <p className={s.headerBlock}>Выберите адрес доставки</p>
              <fieldset className={s.addressSearch}>
                <input
                  type="text"
                  className={s.search}
                  placeholder="Введите адрес доставки"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button
                  className={s.clearButton}
                  type="button"
                  onClick={() => setAddress("")}
                >
                  <img src={clearX} alt="X" />
                </button>
              </fieldset>
              <div className={s.lastAddress}>
                <p className={s.headerBlock}>Последние адреса</p>
                {userAddresses.map((userLocation) => (
                  <div className={s.location} key={userLocation.id}>
                    <img src={userAddress} alt="" />
                    <p className={s.locationText}>{userLocation.location}</p>
                    <button className={s.deleteButton} type="button">
                      <img src={userDeleteAddress} alt="" />
                    </button>
                  </div>
                ))}
              </div>
              <div className={s.deliveryTime}>
                <p className={s.headerBlock}>Когда доставить?</p>
                <div className={s.dateTime}>
                  <div className={`${s.date} ${s.deliveryForm}`} />
                  <div className={`${s.time} ${s.deliveryForm}`} />
                </div>
              </div>
              <p style={{ color: "red" }}>Блок не доделан</p>
            </div>
          ) : (
            <p>pickup</p>
          )}
        </div>
        <div className={s.map}>
          <iframe
            title="mapYandex"
            src="src/components/DeliveryModal/DeliveryModal?um=constructor%3A342f343fa73ff0e654afafe2e6efe36e54a6fead8a93cfc2816f253cf25082e5&amp;source=constructor"
            width="700"
            height="720"
            frameBorder="0"
          />
        </div>
      </div>
    </Modal>
  );
}

// todo подключить карту

export default DeliveryModal;
