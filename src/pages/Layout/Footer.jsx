import s from "./Footer.module.css";
import phoneImg from "../../assets/images/footer/phone.svg";
import { ReactComponent as VisaMastercard } from "../../assets/images/footer/VisaMastercard.svg";
import AppLink from "../../components/UiKit/AppLink";
import SubscribeNews from "../../components/SubscribeNews/SubscribeNews";
import { footerLinks } from "../../database/footerData";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.information}>
          {footerLinks.map((element) => (
            <div className={element.class} key={element.class}>
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
                  <AppLink className={s.link} to={link.to} key={link.id}>
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
          <VisaMastercard className={s.footerVisa} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
