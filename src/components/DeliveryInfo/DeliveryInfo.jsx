import s from "./DeliveryInfo.module.css";
import deliveryMap from "../../assets/images/main/deliveryMap.png";

function DeliveryInfo() {
  const descrBlocks = [
    {
      title: "Зоны доставки",
      descr: "Доставка осуществляется в районе ЖК «Ильинские Луга»",
    },
    {
      title: "25 минут",
      descr: "Доставка 25 минут. Принимаем заказы с 7:00 до 23:00",
    },
    {
      title: "1000 р",
      descr:
        "Минимальная сумма бесплатной доставки с учетом скидок. Иначе стоимость доставке 250 руб",
    },
    {
      title: "Зоны доставки",
      descr:
        "При оформлении заказа вы можете выбрать удобный для вас способ рассчета",
    },
  ];

  return (
    <>
      <h4 className={s.deliveryTitle}>Доставка и оплата</h4>
      <div className={s.deliveryWrapper}>
        <div className={s.deliveryDescr}>
          {descrBlocks.map((obj) => (
            <div>
              <h6 className={s.deliveryTitleText}>{obj.title}</h6>
              <p className={s.deliveryText}>{obj.descr}</p>
            </div>
          ))}
          <p className={s.deliveryWarning}>
            Изображения продуктов могут отличаться от продуктов в заказе.
          </p>
        </div>
        <div>
          <h6 className={s.mapTitle}>Карта доставки</h6>
          <img className={s.deliveryMap} src={deliveryMap} alt="map" />
        </div>
      </div>
    </>
  );
}

export default DeliveryInfo;
