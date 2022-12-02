import { useSelector } from "react-redux";

function useAuth() {
  const {
    userName,
    userId,
    phoneNumber,
    birthdayDate,
    email,
    bonuses,
    address,
    orders,
    favoritesProductsId,
  } = useSelector((state) => state.user);

  return {
    isAuth: !!userId,
    userName,
    userId,
    phoneNumber,
    birthdayDate,
    email,
    bonuses,
    address,
    orders,
    favoritesProductsId,
  };
}

export { useAuth };
