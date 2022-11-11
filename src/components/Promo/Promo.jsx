import s from "./Promo.module.css";

function Promo() {
  return (
    <div className={s.promo}>
      <div className={s.info}>
        <div className={s.block}>
          <p className={s.title}>БЕСПЛАТНАЯ ДОСТАВКА</p>
          <span className={s.text}>первого заказа</span>
        </div>
        <p className={s.plus}>+</p>
        <div className={s.block}>
          <p className={s.title}>Скидка 10%</p>
          <span className={s.text}>на заказы клинарии</span>
        </div>
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
