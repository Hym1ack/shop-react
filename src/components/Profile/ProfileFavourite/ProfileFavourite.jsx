import { useSelector } from "react-redux";
import s from "./ProfileFavourite.module.css";
import ProductCard from "../../Product/ProductCard/ProductCard";

function ProfileFavourite() {
  const favouriteProducts = useSelector(
    (state) => state.user.favoritesProducts
  );

  return (
    <div className={s.favourites}>
      {favouriteProducts.length !== 0 ? (
        favouriteProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <p className={s.noGoods}>Нету добавленных продуктов</p>
      )}
    </div>
  );
}

export default ProfileFavourite;
