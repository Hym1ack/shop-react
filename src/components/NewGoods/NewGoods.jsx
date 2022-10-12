import { useState } from "react";
import s from "./NewGoods.module.css";

function NewGoods() {
  const [value, setValue] = useState("good");

  const formElements = [
    { id: 1, label: "Товар", value: "good" },
    { id: 2, label: "Бренд", value: "brand" },
  ];

  return (
    <div className={s.block}>
      <div>
        <h4 className={s.title}>Не нашли, что искали?</h4>
        <p className={s.descr}>Оставьте ссылку на товар или бренд.</p>
      </div>
      <div className={s.choose}>
        <form className={s.form}>
          {formElements.map((el) => (
            <div className={s.radio}>
              <input
                type="radio"
                name="formNewGoods"
                value={el.value}
                id={el.value}
                className={s.chooseRadio}
                checked={value === el.value}
                onChange={() => setValue(el.value)}
              />
              <label className={s.chooseLabel} htmlFor={el.value}>
                {el.label}
              </label>
            </div>
          ))}
        </form>
        <button className={s.sendButton} type="submit">
          Отправить
        </button>
      </div>
      <input className={s.inputLink} type="url" placeholder="Ссылка" />
    </div>
  );
}

export default NewGoods;
