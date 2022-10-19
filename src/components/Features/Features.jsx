import { useState } from "react";
import Checkbox from "../UiKit/Checkbox";
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

  const toggleFeature = (feature) =>
    setFeatures({
      ...features,
      [feature.value]: !features[feature.value],
    });

  return (
    <form className={s.feature}>
      <legend className={s.title}>Особенности</legend>
      {featuresData.map((feature) => (
        <Checkbox
          checked={features[feature.value]}
          onChange={() => toggleFeature(feature)}
          id={feature.value}
          labelClass={s.featureLabel}
          key={feature.id}
        >
          {feature.text}
        </Checkbox>
      ))}
    </form>
  );
}

export default Features;
