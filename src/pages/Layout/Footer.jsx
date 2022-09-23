import s from "./Footer.module.css";
import cards from "../../assets/images/footerCards.png";
import phoneImg from "../../assets/images/phone.svg";
import locationImg from "../../assets/images/location-image.svg";
import instImg from "../../assets/images/insta-logo.svg";
import emailImg from "../../assets/images/email-logo.svg";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.information}>
          <div className={s.infoColumn}>
            <h6 className={s.infoTitle}>Ильинский онлайн</h6>
            <ul className={s.links}>
              <li className={s.link}>Кулинария</li>
              <li className={s.link}>Супермаркет</li>
              <li className={s.link}>Заморозка</li>
              <li className={s.link}>Другое</li>
            </ul>
          </div>
          <div className={s.infoColumn}>
            <h6 className={s.infoTitle}>Ильинский клуб</h6>
            <ul className={s.links}>
              <li className={s.link}>Акции</li>
              <li className={s.link}>Доставка и оплата</li>
              <li className={s.link}>Программа лояльности</li>
              <li className={s.link}>Политика конфиденциальности</li>
              <li className={s.link}>Вакансии</li>
            </ul>
          </div>
          <div className={s.infoColumn}>
            <div className={s.phone}>
              <p className={s.phoneNumber}>
                <img className={s.phoneImg} src={phoneImg} alt="phone" />
                <span>+7 (333) 33-33-33</span>
              </p>
              <p className={s.phoneDescr}>Ежедневно c 09:00 до 21:00</p>
            </div>
            <ul className={s.links}>
              <li className={s.link}>
                <a className={s.linkContainer} href="/">
                  <img className={s.linkImg} src={locationImg} alt="location" />
                  <p>Адреса магазинов</p>
                </a>
              </li>
              <li className={s.link}>
                <a className={s.linkContainer} href="/">
                  <img className={s.linkImg} src={instImg} alt="instagram" />
                  <p>Следите за нами</p>
                </a>
              </li>
              <li className={s.link}>
                <a className={s.linkContainer} href="/">
                  <img className={s.linkImg} src={emailImg} alt="email" />
                  <p>Обратная связь</p>
                </a>
              </li>
            </ul>
          </div>
          <div className={s.infoColumn}>
            <fieldset>
              <legend className={s.subscribeText}>
                Подпишитесь на вкусные и полезые новости
              </legend>
              <div>
                <input className={s.subscribeInput} type="email" />
                <button className={s.subscribeButton} type="submit">
                  Подписаться
                </button>
              </div>
              <div className={s.politics}>
                <input type="checkbox" id="checkbox" />
                <label className={s.politicsLink} htmlFor="checkbox">
                  Согласен с политикой конфиденциальности
                </label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className={s.footerBottom}>
          <p>© 2022 Ильинский онлайн — доставкатоваров и продуктов на дом</p>
          <p>Информация на сайте не является публичной офертой</p>
          <img src={cards} alt="visa & mastercard" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
