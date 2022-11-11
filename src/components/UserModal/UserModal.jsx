import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import s from "./UserModal.module.css";
import { logout } from "../../redux/userSlice";
import { auth } from "../../firebase";

function UserModal({ userName }) {
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  return (
    <>
      <h6 className={s.username}>{userName}</h6>
      <Link to="profile/settings" className={s.link}>
        Профиль <span className={s.red}>-5%</span>
      </Link>
      <Link to="profile/history" className={s.link}>
        Заказы
      </Link>
      <Link to="profile/settings" className={s.link}>
        Бонусы <span className={s.red}>17</span>
      </Link>
      <Link to="profile/favourites" className={s.link}>
        Избранное <span className={s.gray}>16 тов.</span>
      </Link>
      <button type="button" onClick={userLogout} className={s.logout}>
        Выход
      </button>
    </>
  );
}

export default UserModal;
