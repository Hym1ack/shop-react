import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import { fetchProductById } from "../../redux/shopSlice";
import ProductImages from "../../components/ProductImages/ProductImages";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import s from "./ProductPage.module.css";
import Slider from "../../components/Slider/Slider";
import ProductCard from "../../components/ProductCard/ProductCard";
import NewGoods from "../../components/NewGoods/NewGoods";

function ProductPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { products, recommendedProducts } = useSelector((state) => state.shop);

  const id = Number(location.pathname.slice(9));

  const product = location.state || products.find((elem) => elem.id === id);

  useEffect(() => {
    if (!location.state || !product) {
      dispatch(fetchProductById(id));
    }
  }, [product, id, location.state, dispatch]);

  if (!product) {
    return <p>Загрузка страницы</p>;
  }

  return (
    <div>
      <div className={s.productContainer}>
        <ProductImages image={product.image} />
        <ProductInfo product={product} />
      </div>
      <Slider
        title="Похожие товары"
        titleStyle={{ marginBottom: "68px" }}
        type={1}
        slidesPerView={4}
      >
        {recommendedProducts.map((rec) => (
          <SwiperSlide key={rec.id}>
            <ProductCard product={rec} />
          </SwiperSlide>
        ))}
      </Slider>
      <div className={s.newGoods}>
        <NewGoods />
      </div>
    </div>
  );
}

export default ProductPage;
