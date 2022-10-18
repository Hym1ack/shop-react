import { useState } from "react";
import s from "./SubscribeNews.module.css";
import Checkbox from "../UiKit/Checkbox";

function SubscribeNews() {
  const [checked, setChecked] = useState(false);

  return (
    <fieldset className={s.news}>
      <p className={s.subscribeText}>
        Подпишитесь на вкусные и полезные новости
      </p>
      <input className={s.subscribeInput} type="email" />
      <button className={s.subscribeButton} type="submit">
        Подписаться
      </button>
      <div className={s.politics}>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="checkboxAgree"
          labelClass={s.checkboxAgree}
        >
          Согласен с политикой конфиденциальности
        </Checkbox>
      </div>
    </fieldset>
  );
}

export default SubscribeNews;
