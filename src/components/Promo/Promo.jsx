import s from "./Promo.module.css";

function Promo() {
  return (
    <div className={s.promo}>
      <div className={s.text}>
        <p className={s.textTitle}>
          БЕСПЛАТНАЯ ДОСТАВКА
          <span className={s.bottomText}>первого заказа</span>
        </p>

        <p className={s.textTitle}>
          Скидка 10%<span className={s.bottomText}>на заказы клинарии</span>
        </p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => navigator.clipboard.writeText("promo1000")}
      >
        Получить промокод
      </button>
    </div>
  );
}

export default Promo;
