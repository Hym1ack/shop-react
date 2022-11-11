import s from "./ProductImages.module.css";

function ProductImages({ image }) {
  return (
    <div className={s.images}>
      <img className={s.img} src={image} alt="" />
    </div>
  );
}

export default ProductImages;
