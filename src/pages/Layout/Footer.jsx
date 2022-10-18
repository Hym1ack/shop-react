import s from "./Footer.module.css";
import phoneImg from "../../assets/images/footer/phone.svg";
import locationImg from "../../assets/images/footer/location-image.svg";
import instImg from "../../assets/images/footer/insta-logo.svg";
import emailImg from "../../assets/images/footer/email-logo.svg";
import { ReactComponent as VisaMastercard } from "../../assets/images/footer/VisaMastercard.svg";
import { AppLink } from "../../components/UiKit/AppLink";
import SubscribeNews from "../../components/SubscribeNews/SubscribeNews";

function Footer() {
  const footerElements = [
    {
      title: "Ильинский онлайн",
      class: s.online,
      links: [
        { to: "bakery", label: "Кулинария" },
        { to: "water", label: "Супермаркет" },
        { to: "dumplings", label: "Заморозка" },
        { to: "beauty", label: "Другое" },
      ],
    },
    {
      title: "Ильинский клуб",
      class: s.club,
      links: [
        { to: "bakery", label: "Акции" },
        { to: "water", label: "Доставка и оплата" },
        { to: "dumplings", label: "Программа лояльности" },
        { to: "beauty", label: "Политика конфиденциальности" },
        { to: "beauty", label: "Вакансии" },
      ],
    },
    {
      title: "",
      phone: true,
      class: s.feedback,
      links: [
        { to: "bakery", label: "Адреса магазинов", img: locationImg },
        { to: "water", label: "Следите за нами", img: instImg },
        { to: "dumplings", label: "Обратная связь", img: emailImg },
      ],
    },
  ];

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.information}>
          {footerElements.map((element) => (
            <div className={element.class}>
              {element.title && (
                <h6 className={s.infoTitle}>{element.title}</h6>
              )}
              {element.phone && (
                <div className={s.phone}>
                  <p className={s.phoneNumber}>
                    <img className={s.phoneImg} src={phoneImg} alt="phone" />
                    <span>+7 (333) 33-33-33</span>
                  </p>
                  <p className={s.phoneDescr}>Ежедневно c 09:00 до 21:00</p>
                </div>
              )}
              <ul className={s.links}>
                {element.links.map((link) => (
                  <AppLink className={s.link} to={link.to}>
                    {link.img && (
                      <img
                        className={s.linkImg}
                        src={link.img}
                        alt="imgBefore"
                      />
                    )}
                    {link.label}
                  </AppLink>
                ))}
              </ul>
            </div>
          ))}
          <div className={s.subscribe}>
            <SubscribeNews />
          </div>
        </div>
        <div className={s.footerBottom}>
          <p>© 2022 Ильинский онлайн — доставка товаров и продуктов на дом</p>
          <p>Информация на сайте не является публичной офертой</p>
          <VisaMastercard />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
