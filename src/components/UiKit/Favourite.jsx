import { useDispatch } from "react-redux";
import { useState } from "react";
import { ReactComponent as HeartCircle } from "../../assets/images/heartCircle.svg";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import s from "./Favourite.module.css";
import { useAuth } from "../../hooks/useAuth";
import { toggleFavourite } from "../../redux/userSlice";
import ModalAuth from "../ModalAuth/ModalAuth";

function Favourite({ circle = false, id }) {
  const { isAuth, favoritesProductsId } = useAuth();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const favorited = !!favoritesProductsId.includes(id);

  const classes = favorited ? `${s.img} ${s.active}` : s.img;

  const addToFavourites = () => {
    if (isAuth) {
      dispatch(toggleFavourite(id));
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <button type="button" className={s.button} onClick={addToFavourites}>
        {circle ? (
          <HeartCircle className={classes} />
        ) : (
          <Heart className={classes} />
        )}
      </button>

      {modalOpen && (
        <ModalAuth
          modalOpen={modalOpen}
          setModalOpen={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default Favourite;
