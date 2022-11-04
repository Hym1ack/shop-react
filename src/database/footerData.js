import s from "../pages/Layout/Footer.module.css";
import locationImg from "../assets/images/footer/location-image.svg";
import instImg from "../assets/images/footer/insta-logo.svg";
import emailImg from "../assets/images/footer/email-logo.svg";

export const footerLinks = [
  {
    title: "Ильинский онлайн",
    class: s.online,
    links: [
      { id: 1, to: "shop/bakery", label: "Кулинария" },
      { id: 2, to: "shop/water", label: "Супермаркет" },
      { id: 3, to: "shop/dumplings", label: "Заморозка" },
      { id: 4, to: "shop/beauty", label: "Другое" },
    ],
  },
  {
    title: "Ильинский клуб",
    class: s.club,
    links: [
      { id: 1, to: "discounts", label: "Акции" },
      { id: 2, to: "/", label: "Доставка и оплата" },
      { id: 3, to: "/", label: "Программа лояльности" },
      { id: 4, to: "/", label: "Политика конфиденциальности" },
      { id: 5, to: "/", label: "Вакансии" },
    ],
  },
  {
    title: "",
    phone: true,
    class: s.feedback,
    links: [
      { id: 1, to: "/", label: "Адреса магазинов", img: locationImg },
      { id: 2, to: "/", label: "Следите за нами", img: instImg },
      { id: 3, to: "/", label: "Обратная связь", img: emailImg },
    ],
  },
];
