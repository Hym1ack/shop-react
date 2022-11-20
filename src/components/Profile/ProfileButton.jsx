import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import s from "./ProfileButton.module.css";
import LoginModal from "../ProfileLogin/LoginModal";
import { useAuth } from "../../hooks/useAuth";
import UserModal from "../UserModal/UserModal";
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
      <CSSTransition
        in={authFormHover}
        timeout={300}
        classNames={{
          enterActive: s.tooltipActive,
          exitActive: s.tooltipExit,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={s.authPopup}>
          {isAuth ? <UserModal userName={userName} /> : <LoginModal />}
        </div>
      </CSSTransition>
    </div>
  );
}

export default ProfileButton;
