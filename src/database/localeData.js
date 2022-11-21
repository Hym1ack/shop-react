import market1 from "../assets/images/main/supermarket1.png";
import market2 from "../assets/images/main/supermarket2.png";
import market3 from "../assets/images/main/supermarket3.png";
import market4 from "../assets/images/main/supermarket4.png";
import market5 from "../assets/images/main/supermarket5.png";
import market6 from "../assets/images/main/supermarket6.png";
import market7 from "../assets/images/main/supermarket7.png";
import market8 from "../assets/images/main/supermarket8.png";

import cooking1 from "../assets/images/main/cooking1.png";
import cooking2 from "../assets/images/main/cooking2.png";
import cooking3 from "../assets/images/main/cooking3.png";
import cooking4 from "../assets/images/main/cooking4.png";
import cooking5 from "../assets/images/main/cooking5.png";
import cooking6 from "../assets/images/main/cooking6.png";
import cooking7 from "../assets/images/main/cooking7.png";

import freeze1 from "../assets/images/main/freeze1.png";
import freeze2 from "../assets/images/main/freeze2.png";
import freeze3 from "../assets/images/main/freeze3.png";
import freeze4 from "../assets/images/main/freeze4.png";

import various1 from "../assets/images/main/various1.png";
import various2 from "../assets/images/main/various2.png";
import various3 from "../assets/images/main/various3.png";

import banner1 from "../assets/images/main/banner1.png";
import banner2 from "../assets/images/main/banner2.png";
import banner3 from "../assets/images/main/banner3.png";
import banner4 from "../assets/images/main/banner4.png";

export const localeData = [
  {
    title: "Кулинария",
    items: [
      {
        label: "Выпечка",
        to: "bakery",
        image: cooking1,
        categories: ["baguette", "puff", "loaf"],
      },
      { label: "Пиццы (X)", to: "pizzas", image: cooking2 },
      { label: "Гриль-меню (X)", to: "grill", image: cooking3 },
      { label: "Салаты (X)", to: "salads", image: cooking4 },
      { label: "Супы (X)", to: "soups", image: cooking5 },
      { label: "Горячие блюда (X)", to: "hot", image: cooking6 },
      { label: "Десерты (X)", to: "desserts", image: cooking7 },
    ],
    backgroundColor: "#FFF8EB",
    borderColor: "#FFE7B9",
  },
  {
    title: "Супермаркет",
    items: [
      {
        label: "Вода и напитки",
        to: "water",
        image: market1,
        categories: ["water", "juice", "tea", "lemonade"],
      },
      {
        label: "Молоко, масло и яйца",
        to: "milk",
        image: market2,
        categories: ["milk", "oil", "eggs"],
      },
      { label: "Снэки и сухофрукты (X)", to: "snakes", image: market3 },
      { label: "Кофе, чай и сладости (X)", to: "tea", image: market4 },
      { label: "Макароны и крупы (X)", to: "cereals", image: market5 },
      { label: "Хлеб и выпечка (X)", to: "bread", image: market6 },
      { label: "Масло, соусы и специи (X)", to: "spices", image: market7 },
      { label: "Консервы и соления (X)", to: "canned", image: market8 },
    ],
    backgroundColor: "#F7FFE6",
    borderColor: "#CCE0A0",
  },
  {
    title: "Заморозка",
    items: [
      {
        label: "Пельмени, вареники и равиоли",
        to: "dumplings",
        image: freeze1,
        categories: ["dumplings", "vareniki", "ravioli"],
      },
      { label: "Хинкали и манты (X)", to: "khinkali", image: freeze2 },
      { label: "Полуфабрикаты (X)", to: "semi-finished", image: freeze3 },
      {
        label: "Замороженные овощи (X)",
        to: "frozen-vegetables",
        image: freeze4,
      },
    ],
    backgroundColor: "#EBEDFF",
    borderColor: "#C0C5F2",
  },
  {
    title: "Разное",
    items: [
      {
        label: "Красота и гигиена",
        to: "beauty",
        image: various1,
        categories: [
          "wipes",
          "deodorants",
          "bathAndSoul",
          "facialCare",
          "handCare",
        ],
      },
      { label: "Стирка и уборка (X)", to: "cleaning", image: various2 },
      { label: "Полезные мелочи (X)", to: "things", image: various3 },
    ],
    backgroundColor: "#EBFDFF",
    borderColor: "#A3D0D6",
  },
];

export const slidesHome = [
  {
    title: "Начните день с вкусной выпечки из нашей кулинарии",
    to: "shop/bakery",
  },
  { title: "Заморозка", to: "shop/water" },
  { title: "Супермаркет", to: "shop/dumplings" },
];

export const banners = [
  {
    title: "Сделай предзаказ в кулинарии со скидкой",
    coupon: null,
    bgImage: banner1,
  },
  {
    title: "Праздник к нам приходит",
    coupon: "15% скидка",
    bgImage: banner2,
  },
  {
    title: "Скидка на третий товар в корзине «Чистая линия»",
    coupon: null,
    bgImage: banner3,
  },
  {
    title: "Комбо-набор 3 пиццы за 1500 Р",
    coupon: "trio1500",
    promo: "trio1500",
    bgImage: banner4,
  },
  {
    title: "Скидка на товар «Чистая линия»",
    coupon: "line",
    bgImage: banner3,
  },
];

export const ordersData = [
  {
    inWork: true,
    delivered: false,
    orderId: "56940721-1",
    date: "16.10.2022",
    address:
      "ул. Новая, д. 13, кв 33 посёлок Ильинское-Усово, городской округ Красногорс",
    totalPrice: 333,
  },
  {
    inWork: false,
    delivered: false,
    orderId: "56940724-1",
    date: "16.10.2022",
    address:
      "ул. Новая, д. 13, кв 33 посёлок Ильинское-Усово, городской округ Красногорс",
    totalPrice: 333,
  },
  {
    inWork: false,
    delivered: true,
    orderId: "56940754-1",
    date: "16.10.2022",
    address:
      "ул. Новая, д. 13, кв 33 посёлок Ильинское-Усово, городской округ Красногорс",
    totalPrice: 333,
  },
  {
    inWork: false,
    delivered: true,
    orderId: "56940755-1",
    date: "16.10.2022",
    address:
      "ул. Новая, д. 13, кв 33 посёлок Ильинское-Усово, городской округ Красногорс",
    totalPrice: 333,
  },
];
