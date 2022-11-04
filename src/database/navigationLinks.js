import marketImage from "../assets/images/header/header-supermarket.png";
import cookingImage from "../assets/images/header/header-cooking.png";
import freezeImage from "../assets/images/header/header-freezen.png";
import anotherImage from "../assets/images/header/header-another.png";
import stockImage from "../assets/images/header/header-stock.png";
import shopsImage from "../assets/images/header/header-shops.png";

export const navigationLinks = [
  { to: "shop/water", label: "Супермаркет", image: marketImage },
  { to: "shop/bakery", label: "Кулинария", image: cookingImage },
  { to: "shop/dumplings", label: "Заморозка", image: freezeImage },
  { to: "shop/beauty", label: "Другое", image: anotherImage },
  { to: "discounts", label: "Акции", image: stockImage },
  { to: "address", label: "Магазины", image: shopsImage },
];
