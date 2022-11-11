import { useState } from "react";
import s from "./Rating.module.css";
import imageRating from "../../assets/images/avocados.png";
import imageLeaf from "../../assets/images/leaf.png";
import star from "../../assets/images/star.png";
import starActive from "../../assets/images/starActive.png";

function Rating() {
  const [rating, setRating] = useState(3);
  const maxRating = [1, 2, 3, 4, 5];

  const starsElements = maxRating.map((key, i) => (
    <button
      className={s.starButton}
      key={key}
      type="button"
      onClick={() => setRating(i + 1)}
    >
      <img src={i < rating ? starActive : star} alt="star" />
    </button>
  ));

  return (
    <div className={s.rating}>
      <div className={s.ratingText}>
        <h5 className={s.title}>Оцените магазин</h5>
        <p className={s.text}>
          Поделитесь впечатлениями о заказе и помогите сделать нас лучше
        </p>
        <img className={s.leaf} src={imageLeaf} alt="leaf" />
      </div>
      <div className={s.starsBlock}>
        <div className={s.stars}>{starsElements}</div>
        <button className={s.submitButton} type="submit">
          Оставить отзыв
        </button>
      </div>
      <img className={s.img} src={imageRating} alt="avocados" />
    </div>
  );
}

export default Rating;
