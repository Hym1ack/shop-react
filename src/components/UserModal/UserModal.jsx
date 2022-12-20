import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import s from "./UserModal.module.css";
import { logout } from "../../redux/userSlice";
import { auth } from "../../firebase";
import { useAuth } from "../../hooks/useAuth";
import AppLink from "../UiKit/AppLink";

function UserModal({ userName }) {
  const dispatch = useDispatch();
  const { favoritesProductsId, bonuses } = useAuth();

  const userLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  return (
    <>
      <h6 className={s.username}>{userName}</h6>
      <AppLink to="profile/settings" className={s.link}>
        Профиль <span className={s.red}>-5%</span>
      </AppLink>
      <AppLink to="profile/history" className={s.link}>
        Заказы
      </AppLink>
      <AppLink to="profile/settings" className={s.link}>
        Бонусы <span className={s.red}>{bonuses}</span>
      </AppLink>
      <AppLink to="profile/favourites" className={s.link}>
        Избранное
        <span className={s.gray}>{favoritesProductsId.length} тов.</span>
      </AppLink>
      <button type="button" onClick={userLogout} className={s.logout}>
        Выход
      </button>
    </>
  );
}

export default UserModal;
