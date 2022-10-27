import { useDispatch } from "react-redux";
import { ReactComponent as HeartCircle } from "../../assets/images/heartCircle.svg";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import s from "./Favourite.module.css";
import { useAuth } from "../../hooks/useAuth";
import { toggleFavourite } from "../../redux/userSlice";

function Favourite({ circle = false, id }) {
  const { isAuth, favoritesProductsId } = useAuth();
  const dispatch = useDispatch();

  const favorited = !!favoritesProductsId.includes(id);

  const classes = favorited ? `${s.img} ${s.active}` : s.img;

  const addToFavourites = () => {
    if (isAuth) {
      dispatch(toggleFavourite(id));
    }
  };

  return (
    <button type="button" className={s.button} onClick={addToFavourites}>
      {circle && <HeartCircle className={classes} />}

      {!circle && <Heart className={classes} />}
    </button>
  );
}

export default Favourite;
