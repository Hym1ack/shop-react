import { ReactComponent as HeartCircle } from "../../assets/images/heartCircle.svg";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import s from "./Favourite.module.css";

function Favourite({ favorited = false, circle = false }) {
  const classes = favorited ? `${s.img} ${s.active}` : s.img;

  return (
    <button type="button" className={s.button}>
      {circle && <HeartCircle className={classes} />}

      {!circle && <Heart className={classes} />}
    </button>
  );
}

export default Favourite;
