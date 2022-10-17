import { useState } from "react";
import s from "./ProfileButton.module.css";
import LoginModal from "./ProfileLogin/LoginModal";
import { useAuth } from "../../hooks/useAuth";
import UserModal from "./UserModal/UserModal";
import { ReactComponent as UserIcon } from "../../assets/images/header/userIcon.svg";

function ProfileButton() {
  const { isAuth, userName } = useAuth();

  const [authFormHover, setAuthFormHover] = useState(false);

  return (
    <div
      className={s.auth}
      onMouseEnter={() => setAuthFormHover(true)}
      onMouseLeave={() => setAuthFormHover(false)}
    >
      <UserIcon className={s.btnImg} />
      {authFormHover && (
        <div className={s.authPopup}>
          {isAuth ? <UserModal userName={userName} /> : <LoginModal />}
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
