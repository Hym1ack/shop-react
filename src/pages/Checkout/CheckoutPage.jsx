import { useCallback, useRef } from "react";
import DeliveryWarning from "../../components/DeliveryWarning/DeliveryWarning";
import Delivery from "../../components/Delivery/Delivery";
import s from "./CheckoutPage.module.css";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

function CheckoutPage() {
  const formRef = useRef(null);

  const handleSubmitForm = (e) => {
    if (formRef.current) {
      formRef.current(e);
    }
  };

  const bindSubmitForm = useCallback((submitForm) => {
    formRef.current = submitForm;
  }, []);

  return (
    <div className={s.checkout}>
      <div>
        <h4 className={s.title}>Оформление заказа</h4>
        <CheckoutForm bindSubmitForm={bindSubmitForm} />
      </div>
      <div>
        <Delivery
          handleSubmitForm={handleSubmitForm}
          showBtnTime={false}
          showBonuses={false}
        />
        <DeliveryWarning />
      </div>
    </div>
  );
}

export default CheckoutPage;

/*


   <div className={s.delivery}>
            <h6 className={s.time}>Доставка сегодня за 25 минут</h6>
            <p className={s.userAddress}>
              ул. Новая,Ильинское-Усово, городской округ Красногорск
            </p>
          </div>

 */
