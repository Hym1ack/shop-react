import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

import s from "./ProductModal.module.css";
import ProductImages from "../ProductImages/ProductImages";
import ProductInfo from "../ProductInfo/ProductInfo";

function ProductModal({ product, openModal, closeModal }) {
  const navigate = useNavigate();

  if (!openModal) return null;

  const { image, id } = product;

  return (
    <Modal open={openModal} onClose={closeModal}>
      <div className={s.card}>
        <ProductImages image={image} />
        <div className={s.info}>
          <ProductInfo product={product} />
          <button
            type="button"
            className={s.moreInfo}
            onClick={() => {
              closeModal();
              navigate(`/product/${id}`, { state: product });
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ProductModal;
