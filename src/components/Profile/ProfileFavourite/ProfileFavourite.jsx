import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import s from "./ProfileFavourite.module.css";
import { fetchFavouritesProducts } from "../../../redux/shopSlice";
import ProductCard from "../../Product/ProductCard/ProductCard";
import ProductSkeleton from "../../Product/ProductSkeleton/ProductSkeleton";
import { useAuth } from "../../../hooks/useAuth";
import { favoritesProducts } from "../../../redux/selectors";

function ProfileFavourite() {
  const dispatch = useDispatch();
  const { favoritesProductsId } = useAuth();
  const products = useSelector(favoritesProducts);

  useEffect(() => {
    dispatch(fetchFavouritesProducts(favoritesProductsId));
  }, [dispatch, favoritesProductsId]);

  if (favoritesProductsId.length === 0)
    return <p className={s.noGoods}>Нету добавленных продуктов</p>;

  return (
    <div className={s.favourites}>
      {products ? (
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <ProductSkeleton />
      )}
    </div>
  );
}

export default ProfileFavourite;
