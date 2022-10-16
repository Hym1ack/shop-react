import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import procentImg from "../../../assets/images/user/login-procent.svg";
import discountImg from "../../../assets/images/user/login-discount.svg";
import deliveryImg from "../../../assets/images/user/login-delivery.svg";

import s from "./LoginModal.module.css";
import { login } from "../../../redux/userSlice";
import { auth } from "../../../firebase";

function LoginModal() {
  const dispatch = useDispatch();

  const loginUser = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    const { displayName, email, uid, phoneNumber } = user;
    dispatch(
      login({
        displayName,
        email,
        uid,
        phoneNumber,
      })
    );
  };

  return (
    <>
      <h3 className={s.title}>Авторизуйтесь</h3>
      <p className={s.advantage}>
        <img className={s.image} src={procentImg} alt="%" />
        <span className={s.text}>Покупайте продукты со скидкой</span>
      </p>
      <p className={s.advantage}>
        <img className={s.image} src={deliveryImg} alt="delivery" />
        <span className={s.text}>
          Заказывайте товары с доставкой день в день
        </span>
      </p>
      <p className={s.advantage}>
        <img className={s.image} src={discountImg} alt="discount" />
        <span className={s.text}>Узнавайте первыми и участвуйте в акциях</span>
      </p>
      <button className={s.loginBtn} type="button" onClick={loginUser}>
        Войти с помощью Google
      </button>
    </>
  );
}

export default LoginModal;
