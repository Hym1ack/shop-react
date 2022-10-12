import { useState } from "react";
import s from "./Rating.module.css";
import imageRating from "../../assets/images/avocados.png";
import imageLeaf from "../../assets/images/leaf.png";
import star from "../../assets/images/star.png";
import starActive from "../../assets/images/starActive.png";

function Rating() {
  const [rating, setRating] = useState(2);
  const maxRating = [1, 2, 3, 4, 5];

  return (
    <div className={s.rating}>
      <div className={s.ratingText}>
        <h5 className={s.title}>Оцените магазин</h5>
        <p className={s.text}>
          Поделитесь впечатлениями о заказе и помогите сделать нас лучше
        </p>
        <img className={s.leaf} src={imageLeaf} alt="leaf" />
      </div>
      <div>
        <div className={s.stars}>
          {maxRating.map((_, i) => (
            <button
              className={s.starButton}
              type="button"
              onClick={() => setRating(i + 1)}
            >
              <img src={i < rating ? starActive : star} alt="" />
            </button>
          ))}
        </div>
        <button className={s.submitButton} type="submit">
          Оставить отзыв
        </button>
      </div>
      <img className={s.img} src={imageRating} alt="avocados" />
    </div>
  );
}

export default Rating;