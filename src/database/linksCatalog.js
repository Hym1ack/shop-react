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

export const linksCatalog = [
  {
    title: "Кулинария",
    items: [
      { label: "Выпечка", to: "bakery", image: cooking1 },
      { label: "Пиццы", to: "pizzas", image: cooking2 },
      { label: "Гриль-меню", to: "grill", image: cooking3 },
      { label: "Салаты", to: "salads", image: cooking4 },
      { label: "Супы", to: "soups", image: cooking5 },
      { label: "Горячие блюда", to: "hot", image: cooking6 },
      { label: "Десерты", to: "desserts", image: cooking7 },
    ],
    backgroundColor: "#FFF8EB",
    borderColor: "#FFE7B9",
  },
  {
    title: "Супермаркет",
    items: [
      { label: "Вода и напитки", to: "water", image: market1 },
      { label: "Молоко, масло и яйца", to: "milk", image: market2 },
      { label: "Снэки и сухофрукты", to: "snakes", image: market3 },
      { label: "Кофе, чай и сладости", to: "tea", image: market4 },
      { label: "Макароны и крупы", to: "cereals", image: market5 },
      { label: "Хлеб и выпечка", to: "bread", image: market6 },
      { label: "Масло, соусы и специи", to: "spices", image: market7 },
      { label: "Консервы и соления", to: "canned", image: market8 },
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
      },
      { label: "Хинкали и манты", to: "khinkali", image: freeze2 },
      { label: "Полуфабрикаты", to: "semi-finished", image: freeze3 },
      { label: "Замороженные овощи", to: "frozen-vegetables", image: freeze4 },
    ],
    backgroundColor: "#EBEDFF",
    borderColor: "#C0C5F2",
  },
  {
    title: "Разное",
    items: [
      { label: "Красота и гигиена", to: "beauty", image: various1 },
      { label: "Стирка и уборка", to: "cleaning", image: various2 },
      { label: "Полезные мелочи", to: "things", image: various3 },
    ],
    backgroundColor: "#EBFDFF",
    borderColor: "#A3D0D6",
  },
];
