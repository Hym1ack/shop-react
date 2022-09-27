import { useState } from "react";
import s from "./Features.module.css";

function Features() {
  const [features, setFeatures] = useState({
    sale: false,
    deliveryToday: false,
    ourProduction: false,
  });

  const featuresData = [
    { id: 1, value: "sale", text: "Со скидкой" },
    {
      id: 2,
      value: "deliveryToday",
      text: "Доставка сегодня",
    },
    { id: 3, value: "ourProduction", text: "Продукция от «Ильинского»" },
  ];

  return (
    <form className={s.feature}>
      <legend className={s.title}>Особенности</legend>
      {featuresData.map((feature) => (
        <div key={feature.value}>
          <input
            type="checkbox"
            id={feature.value}
            className={s.featureInput}
            checked={features[feature.value] === true}
            onChange={() =>
              setFeatures({
                ...features,
                [feature.value]: !features[feature.value],
              })
            }
          />
          <label className={s.featureLabel} htmlFor={feature.value}>
            {feature.text}
          </label>
        </div>
      ))}
    </form>
  );
}

export default Features;
