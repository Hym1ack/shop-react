import { Link } from "react-router-dom";
import s from "./NotFound.module.css";
import notFoundImage from "../../assets/images/notfound.png";

function NotFound() {
  return (
    <div className={s.notFound}>
      <div className={s.error}>
        <p>4</p>
        <img className={s.image} src={notFoundImage} alt="0" />
        <p>4</p>
      </div>
      <p className={s.descr}>
        Ой! Кажется что-то пошло не так. Страница, которую вы запрашиваете, не
        существует. Возможно она устарела, была удалена, или был введен неверный
        адрес в адресной строке.
      </p>
      <Link to="/" className={s.link}>
        Перейти на главную
      </Link>
    </div>
  );
}

export default NotFound;
