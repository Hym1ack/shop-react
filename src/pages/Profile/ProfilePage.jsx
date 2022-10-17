import { Outlet } from "react-router-dom";
import s from "./ProfilePage.module.css";
import { AppLink } from "../../components/UiKit/AppLink";

function ProfilePage() {
  const links = [
    { to: "settings", label: "Личные данные" },
    { to: "history", label: "История заказов" },
    { to: "favourites", label: "Избранное" },
  ];

  return (
    <>
      <div className={s.top}>
        <h4 className={s.title}>Личный кабинет</h4>
        <div className={s.navigation}>
          {links.map((link) => (
            <AppLink
              className={s.item}
              activeClassActive={s.itemActive}
              to={link.to}
              key={link.to}
            >
              {link.label}
            </AppLink>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default ProfilePage;
