import * as yup from "yup";

export const validationCheckout = yup.object().shape({
  userName: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Обязательное поле")
    .trim()
    .matches(
      /^[А-Я][а-яё]{2,}\040[А-Я][а-яё]{2,}$/,
      "Поле должно содержать Имя и Фамилию с заглавной буквы"
    ),
  userPhone: yup
    .string()
    .required("Обязательное поле")
    .min(17, "Номер введён не полностью"),
  payMethod: yup.string().required("Вы не выбрали способ оплаты"),
  address: yup.object().shape({
    street: yup.string().required(),
    apartment: yup.number().required(),
    floor: yup.number().required(),
    intercom: yup.string().required(),
    entrance: yup.number().required(),
  }),
});
