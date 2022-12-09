import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import s from "./ProfileButton.module.css";
import LoginModal from "../ProfileLogin/LoginModal";
import { useAuth } from "../../hooks/useAuth";
import UserModal from "../UserModal/UserModal";

function ProfileButton({ children }) {
  const { isAuth, userName } = useAuth();
  const navigate = useNavigate();

  const [authFormHover, setAuthFormHover] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      className={s.auth}
      onClick={() => navigate("/profile")}
      onKeyDown={() => navigate("/profile")}
      onMouseEnter={() => setAuthFormHover(true)}
      onMouseLeave={() => setAuthFormHover(false)}
    >
      {children}
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
