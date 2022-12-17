import { ErrorMessage, Field, Formik } from "formik";
import { useDispatch } from "react-redux";

import { useState } from "react";
import s from "./CheckoutForm.module.css";
import { useAuth } from "../../hooks/useAuth";
import { ReactComponent as Loader } from "../../assets/images/loader.svg";
import Checkbox from "../UiKit/Checkbox";
import { newOrder } from "../../redux/userSlice";
import PhoneInput from "../UiKit/PhoneInput";
import { validationCheckout } from "../../utils/validationCheckout";
import { clearCart } from "../../redux/cartSlice";
import DeliveryModal from "../DeliveryModal/DeliveryModal";

function CheckoutForm({ bindSubmitForm, setOrderSuccess, orderId }) {
  const dispatch = useDispatch();
  const { isAuth, userId, userName, phoneNumber } = useAuth();

  const [nameActive, setNameActive] = useState(true);
  const [phoneActive, setPhoneActive] = useState(true);
  const [modalDelivery, setModalDelivery] = useState(false);

  if (!isAuth) return <Loader />;

  const closeModalDelivery = () => setModalDelivery(false);

  return (
    <Formik
      initialValues={{
        userName: userName || "",
        userPhone: phoneNumber || "",
        payMethod: "",
        deliveryMethod: "delivery",
        address: {
          street: "ул. Новая,Ильинское-Усово, городской округ Красногорск",
          apartment: "",
          floor: "",
          intercom: "",
          entrance: "",
        },
        commentCourier: "",
      }}
      validateOnBlur={false}
      validateOnChange
      validationSchema={validationCheckout}
      onSubmit={(order, { setSubmitting }) => {
        dispatch(newOrder({ userId, order, orderId }));
        setOrderSuccess(true);
        dispatch(clearCart());

        setSubmitting(false);
      }}
    >
      {({
        values,
        touched,
        errors,
        setFieldValue,
        handleChange,
        submitForm,
      }) => {
        bindSubmitForm(submitForm);

        return (
          <div className={s.form}>
            <div>
              <h6 className={s.subTitle}>Ваши данные</h6>
              <fieldset className={s.field}>
                <Field
                  className={s.input}
                  type="text"
                  id="userName"
                  value={values.userName}
                  onChange={handleChange}
                  placeholder="Имя Фамилия"
                  disabled={nameActive}
                />
                <button
                  onClick={() => setNameActive(!nameActive)}
                  type="button"
                  className={s.changeInput}
                >
                  Изменить получателя
                </button>
                <ErrorMessage
                  component="span"
                  className={s.error}
                  name="userName"
                />
              </fieldset>

              <fieldset className={s.field}>
                <Field
                  className={s.input}
                  type="tel"
                  id="userPhone"
                  value={values.userPhone}
                  onChange={handleChange}
                  placeholder="+7 999 999 99 99"
                  component={PhoneInput}
                  disabled={phoneActive}
                />
                <button
                  onClick={() => setPhoneActive(!phoneActive)}
                  type="button"
                  className={s.changeInput}
                >
                  Изменить контактный номер для заказа
                </button>
                <ErrorMessage
                  component="span"
                  className={s.error}
                  name="userPhone"
                />
              </fieldset>
              <p className={s.card}>
                К этому номеру телефона привязана карта №a437503
              </p>
            </div>
            <div className={s.payMethod}>
              <h6 className={s.subTitle}>Способ оплаты</h6>
              <ErrorMessage
                component="span"
                className={s.error}
                name="payMethod"
              />
              <div role="group" className={s.methods}>
                <Checkbox
                  id="cardOnReceipt"
                  checked={values.payMethod === "cardOnReceipt"}
                  onChange={() => setFieldValue("payMethod", "cardOnReceipt")}
                  labelClass={s.checkbox}
                >
                  Оплата картой при получении
                </Checkbox>
                <Checkbox
                  id="cashOnDelivery"
                  checked={values.payMethod === "cashOnDelivery"}
                  onChange={() => setFieldValue("payMethod", "cashOnDelivery")}
                  labelClass={s.checkbox}
                >
                  Оплата наличными при получении
                </Checkbox>
                <Checkbox
                  id="onlinePay"
                  checked={values.payMethod === "onlinePay"}
                  onChange={() => setFieldValue("payMethod", "onlinePay")}
                  labelClass={s.checkbox}
                >
                  Онлайн оплата
                </Checkbox>
              </div>
            </div>
            <div className={s.delivery}>
              <div className={s.orderTime}>
                <h6 className={s.subTitle}>Доставка сегодня за 25 минут</h6>
                <button
                  type="button"
                  className={s.changeTime}
                  onClick={() => setModalDelivery(true)}
                >
                  Изменить
                </button>
                {modalDelivery && (
                  <DeliveryModal
                    modalOpen={modalDelivery}
                    setModalOpen={closeModalDelivery}
                  />
                )}
              </div>
              <p className={s.userAddress}>{values.address.street}</p>

              <div className={s.address}>
                <Field
                  name="address.apartment"
                  type="number"
                  className={
                    errors.address?.apartment && touched.address?.apartment
                      ? `${s.addressField} ${s.warningField}`
                      : s.addressField
                  }
                  placeholder="Квартира"
                />
                <Field
                  name="address.floor"
                  type="number"
                  className={
                    errors.address?.floor && touched.address?.floor
                      ? `${s.addressField} ${s.warningField}`
                      : s.addressField
                  }
                  placeholder="Этаж"
                />
                <Field
                  name="address.intercom"
                  className={
                    errors.address?.intercom && touched.address?.intercom
                      ? `${s.addressField} ${s.warningField}`
                      : s.addressField
                  }
                  placeholder="Домофон"
                />
                <Field
                  name="address.entrance"
                  type="number"
                  className={
                    errors.address?.entrance && touched.address?.entrance
                      ? `${s.addressField} ${s.warningField}`
                      : s.addressField
                  }
                  placeholder="Подъезд"
                />
              </div>
              <textarea
                name="commentCourier"
                onChange={handleChange}
                className={s.addressTextarea}
                placeholder="Комментарий для курьера"
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default CheckoutForm;
