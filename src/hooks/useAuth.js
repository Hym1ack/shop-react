import { useSelector } from "react-redux";

function useAuth() {
  const {
    userName,
    userId,
    phoneNumber,
    birthdayDate,
    email,
    orders,
    favoritesProducts,
  } = useSelector((state) => state.user);

  return {
    isAuth: !!userId,
    userName,
    userId,
    phoneNumber,
    birthdayDate,
    email,
    orders,
    favoritesProducts,
  };
}

export { useAuth };
