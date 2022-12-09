import { useCallback, useRef, useState } from "react";
import { Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import DeliveryWarning from "../../components/DeliveryWarning/DeliveryWarning";
import Delivery from "../../components/Delivery/Delivery";
import s from "./CheckoutPage.module.css";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import NewOrderModal from "../../components/NewOrderModal/NewOrderModal";

function CheckoutPage() {
  const formRef = useRef(null);
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleSubmitForm = (e) => {
    if (formRef.current) {
      formRef.current(e);
      setOrderId(Timestamp.now().seconds);
    }
  };

  const bindSubmitForm = useCallback((submitForm) => {
    formRef.current = submitForm;
  }, []);

  if (!orderSuccess && cartProducts.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.checkout}>
      <div>
        <h4 className={s.title}>Оформление заказа</h4>
        <CheckoutForm
          bindSubmitForm={bindSubmitForm}
          setOrderSuccess={setOrderSuccess}
          orderId={orderId}
        />
      </div>
      <div>
        <Delivery
          handleSubmitForm={handleSubmitForm}
          showBtnTime={false}
          showBonuses={false}
        />
        <DeliveryWarning />
      </div>
      {orderSuccess && (
        <NewOrderModal
          orderId={orderId}
          orderSuccess={orderSuccess}
          closeModal={setOrderSuccess}
        />
      )}
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
